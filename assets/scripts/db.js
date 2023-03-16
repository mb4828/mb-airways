var DESTINATIONS = [
	{
		code: 'ewr',
		name: 'Newark Liberty International Airport (EWR)',
		city: 'Newark, USA - New Jersey 🇺🇸',
		pos: [40.70340156126785, -74.17330276840164],
		hubs: ['sfo', 'iah', 'mia', 'hnl'],
		isHub: true,
		tz: 'US/Eastern'
	},
	{
		code: 'sfo',
		name: 'San Francisco International Airport (SFO)',
		city: 'San Francisco, USA - California 🇺🇸',
		pos: [37.62141455145011, -122.37878377625846],
		hubs: ['ewr', 'iah', 'mia', 'hnl'],
		isHub: true,
		tz: 'US/Pacific'
	},
	{
		code: 'iah',
		name: 'George Bush Intercontinental Airport (IAH)',
		city: 'Houston, USA - Texas 🇺🇸',
		pos: [29.99029394928301, -95.33691148715191],
		hubs: ['ewr', 'sfo', 'mia', 'hnl'],
		isHub: true,
		tz: 'US/Central'
	},
	{
		code: 'mia',
		name: 'Miami International Airport (MIA)',
		city: 'Miami, USA - Florida 🇺🇸',
		pos: [25.796412980391715, -80.28700802739922],
		hubs: ['ewr', 'sfo', 'iah', 'hnl'],
		isHub: true,
		tz: 'US/Eastern'
	},
	{
		code: 'hnl',
		name: 'Daniel K. Inouye International Airport (HNL)',
		city: 'Honolulu, USA - Hawaii 🇺🇸',
		pos: [21.319087239318254, -157.9254318902438],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		isHub: true,
		tz: 'US/Hawaii'
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
		hubs: ['sfo', 'iah', 'mia'],
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
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
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
		hubs: ['ewr', 'mia'],
		tz: 'US/Central'
	},
	{
		name: 'Billings-Logan International Airport (BIL)',
		city: 'Billings, USA - Montana 🇺🇸',
		pos: [45.80363522704425, -108.53800003259418],
		hubs: ['ewr', 'mia'],
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
		hubs: ['sfo', 'mia'],
		tz: 'US/Pacific'
	},
	{
		name: 'Baltimore/Washington International Airport (BWI)',
		city: 'Baltimore, USA - Maryland 🇺🇸',
		pos: [39.177536943139835, -76.66830640614698],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'Bozeman Yellowstone International Airport (BZN)',
		city: 'Bozeman, USA - Montana 🇺🇸',
		pos: [45.77835940397085, -111.16142041964636],
		hubs: ['ewr', 'mia'],
		tz: 'US/Mountain'
	},
	{
		name: 'Akron-Canton Airport (CAK)',
		city: 'Akron, USA - Ohio 🇺🇸',
		pos: [40.91539520193488, -81.4415358425859],
		hubs: ['ewr', 'sfo', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'Paris Charles de Gaulle Airport (CDG)',
		city: 'Paris, France 🇫🇷',
		pos: [49.01088754570143, 2.5481856293293754],
		hubs: ['ewr'],
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
		hubs: ['ewr', 'mia'],
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
		hubs: ['ewr', 'iah', 'mia'],
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
		name: 'Cancún International Airport (CUN)',
		city: 'Cancún, Mexico 🇲🇽',
		pos: [21.04198345163572, -86.87396332895656],
		hubs: ['ewr', 'iah', 'mia'],
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
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Mountain'
	},
	{
		name: 'Dallas/Fort Worth International Airport (DFW)',
		city: 'Dallas, USA - Texas 🇺🇸',
		pos: [32.90175623187377, -97.04011304308536],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
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
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
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
		hubs: ['ewr', 'iah', 'mia'],
		tz: 'US/Central'
	},
	{
		name: 'Fresno Yosemite International Airport (FAT)',
		city: 'Fresno, USA - California 🇺🇸',
		pos: [36.77582349137883, -119.7182263207816],
		hubs: ['sfo', 'iah', 'mia'],
		tz: 'US/Pacific'
	},
	{
		name: 'Glacier Park International Airport (FCA)',
		city: 'Kalispell, USA - Montana 🇺🇸',
		pos: [48.30775754813589, -114.25254443066616],
		hubs: ['ewr'],
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
		hubs: ['iah'],
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
		hubs: ['ewr', 'mia'],
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
		name: 'Hilo International Airport (ITO)',
		city: 'Hilo, USA - Hawaii 🇺🇸',
		pos: [19.71828308321948, -155.04165378827003],
		hubs: ['hnl'],
		tz: 'US/Hawaii'
	},
	{
		name: 'Indianapolis International Airport (IND)',
		city: 'Indianapolis, USA - Indiana 🇺🇸',
		pos: [39.716991323244, -86.29558447337403],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Eastern'
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
		hubs: ['ewr', 'sfo', 'iah', 'mia', 'hnl'],
		tz: 'US/Pacific'
	},
	{
		name: 'Los Angeles International Airport (LAX)',
		city: 'Los Angeles, USA - California 🇺🇸',
		pos: [33.9412952817257, -118.40872312135349],
		hubs: ['ewr', 'sfo', 'iah', 'mia', 'hnl'],
		tz: 'US/Pacific'
	},
	{
		name: 'Blue Grass Airport (LEX)',
		city: 'Lexington, USA - Kentucky 🇺🇸',
		pos: [38.03779528003609, -84.60259757335659],
		hubs: ['sfo', 'iah', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'Heathrow Airport (LHR)',
		city: 'London, United Kingdom 🇬🇧',
		pos: [51.47058336357465, -0.4544242756733526],
		hubs: ['ewr'],
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
		name: 'Sangster International Airport (MBJ)',
		city: 'Montego Bay, Jamaica 🇯🇲',
		pos: [18.502391775768107, -77.91451690151644],
		hubs: ['mia'],
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
		hubs: ['ewr', 'sfo', 'iah', 'mia', 'hnl'],
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
		hubs: ['ewr', 'sfo', 'iah'],
		tz: 'America/Mexico_City'
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
		hubs: ['ewr', 'mia'],
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
		name: 'O\'Hare International Airport (ORD)',
		city: 'Chicago, USA - Illinois 🇺🇸',
		pos: [41.980694394637, -87.90899793532991],
		hubs: ['ewr', 'sfo', 'iah', 'mia', 'hnl'],
		tz: 'US/Central'
	},
	{
		name: 'Norfolk International Airport (ORF)',
		city: 'Norfolk, USA - Virginia 🇺🇸',
		pos: [36.89570942043663, -76.20000537338909],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Eastern'
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
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
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
		hubs: ['sfo', 'iah', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'Phoenix Sky Harbor International Airport (PHX)',
		city: 'Phoenix, USA - Arizona 🇺🇸',
		pos: [33.43582170243552, -112.0101240396323],
		hubs: ['ewr', 'sfo', 'iah', 'mia', 'hnl'],
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
	// {
	// 	name: 'Vaclav Havel Airport (PRG)',
	// 	city: 'Prague, Czechia 🇨🇿',
	// 	pos: [50.101859796884526, 14.263234742416973],
	// 	hubs: ['ewr'],
	// },
	{
		name: 'Palm Springs International Airport (PSP)',
		city: 'Palm Springs, USA - California 🇺🇸',
		pos: [33.830568637238926, -116.50696100322521],
		hubs: ['sfo','mia'],
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
		hubs: ['ewr', 'mia'],
		tz: 'US/Mountain'
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
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Pacific'
	},
	{
		name: 'Savannah/Hilton Head International Airport (SAV)',
		city: 'Savannah, USA - Georgia 🇺🇸',
		pos: [32.12939158823519, -81.20176254594122],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'Louisville Muhammad Ali International Airport (SDF)',
		city: 'Louisville, USA - Kentucky 🇺🇸',
		pos: [38.183129274399, -85.741038508206],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'Norman Y. Mineta San Jose International Airport (SJC)',
		city: 'San Jose, USA - California 🇺🇸',
		pos: [37.363665715803144, -121.92895897613796],
		hubs: ['ewr', 'iah', 'mia'],
		tz: 'US/Pacific'
	},
	{
		name: 'Robert L. Bradshaw International Airport (SKB)',
		city: 'Basseterre, Saint Kitts & Nevis 🇰🇳',
		pos: [17.3108341120326, -62.71916974592183],
		hubs: ['mia'],
		tz: 'America/Puerto_Rico'
	},
	{
		name: 'Shannon Airport (SNN)',
		city: 'Shannon, Ireland 🇮🇪',
		pos: [52.69897449709459, -8.914894175822724],
		hubs: ['ewr'],
		tz: 'Europe/Dublin'
	},
	{
		name: 'Princess Juliana International Airport (SXM)',
		city: 'Sint Maarten 🇸🇽',
		pos: [18.04192078940854, -63.113028459403225],
		hubs: ['mia'],
		tz: 'America/Puerto_Rico'
	},
	{
		name: 'San Antonio International Airport (SAT)',
		city: 'San Antonio, USA - Texas 🇺🇸',
		pos: [29.531290632199877, -98.46845569088684],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Central'
	},
	{
		name: 'Seattle-Tacoma International Airport (SEA)',
		city: 'Seattle, USA - Washington 🇺🇸',
		pos: [47.45358306768111, -122.30824812930476],
		hubs: ['ewr', 'sfo', 'iah', 'mia', 'hnl'],
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
		name: 'St. Louis Lambert International Airport (STL)',
		city: 'St. Louis, USA - Missouri 🇺🇸',
		pos: [38.74996298137237, -90.37484608851419],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Central'
	},
	{
		name: 'Sydney Airport (SYD)',
		city: 'Sydney, Australia 🇦🇺',
		pos: [-33.94985609315001, 151.1818694507839],
		hubs: ['hnl'],
		tz: 'Australia/Sydney'
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
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
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
		hubs: ['mia'],
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
		name: 'Edmonton International Airport (YEG)',
		city: 'Edmonton, Canada 🇨🇦',
		pos: [53.30623686908562, -113.58276804327605],
		hubs: ['ewr'],
		tz: 'Canada/Mountain'
	},
	{
		name: 'Ottawa International Airport (YOW)',
		city: 'Ottawa, Canada 🇨🇦',
		pos: [45.31923461124119, -75.66914374429483],
		hubs: ['ewr', 'iah'],
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
		hubs: ['ewr', 'iah', 'mia'],
		tz: 'Canada/Mountain'
	},
	{
		name: 'Vancouver International Airport (YVR)',
		city: 'Vancouver, Canada 🇨🇦',
		pos: [49.19675521104217, -123.18147272578588],
		hubs: ['ewr', 'sfo', 'iah', 'mia', 'hnl'],
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

var FLIGHT_SCHEDULE = `Route,Flight,Aircraft,Type,Route Link,Flight Link,Aircraft Link,Departure,Arrival,Pax,Turnover,Result
EWR - ABQ,52143768966,EWR-ABQ-AUS 2,A321-200,https://www.airlines-manager.com/network/showline/43845061,https://www.airlines-manager.com/network/showflight/52143768966,https://www.airlines-manager.com/aircraft/show/90717078,0:45,9:59,310,"$573,352.00","$527,376.00"
EWR - ABQ,52143768967,EWR-ABQ-AUS 5,A321-200,https://www.airlines-manager.com/network/showline/43845061,https://www.airlines-manager.com/network/showflight/52143768967,https://www.airlines-manager.com/aircraft/show/95950199,2:45,11:59,310,"$573,352.00","$527,376.00"
EWR - ABQ,52163458714,EWR-ABQ-AUS 1,A321-200,https://www.airlines-manager.com/network/showline/43845061,https://www.airlines-manager.com/network/showflight/52163458714,https://www.airlines-manager.com/aircraft/show/90717079,10:00,19:14,310,"$573,352.00","$527,376.00"
EWR - ABQ,52181070612,EWR-ABQ-AUS 3,A321-200,https://www.airlines-manager.com/network/showline/43845061,https://www.airlines-manager.com/network/showflight/52181070612,https://www.airlines-manager.com/aircraft/show/90717077,16:45,1:59,310,"$573,352.00","$527,376.00"
EWR - ABQ,52181070613,EWR-ABQ-AUS 4,A321-200,https://www.airlines-manager.com/network/showline/43845061,https://www.airlines-manager.com/network/showflight/52181070613,https://www.airlines-manager.com/aircraft/show/90717076,17:45,2:59,310,"$573,352.00","$527,376.00"
EWR - AMS,52167946283,EWR 56B-4 B1,777-300,https://www.airlines-manager.com/network/showline/42008197,https://www.airlines-manager.com/network/showflight/52167946283,https://www.airlines-manager.com/aircraft/show/94521247,11:30,2:44,748,"$2,319,071.00","$2,074,245.00"
EWR - AMS,52172581937,EWR 56B-2 B1,777-300,https://www.airlines-manager.com/network/showline/42008197,https://www.airlines-manager.com/network/showflight/52172581937,https://www.airlines-manager.com/aircraft/show/90656556,13:15,4:29,748,"$2,319,071.00","$2,074,245.00"
EWR - AMS,52176667043,EWR 56B-7 B1,777-300,https://www.airlines-manager.com/network/showline/42008197,https://www.airlines-manager.com/network/showflight/52176667043,https://www.airlines-manager.com/aircraft/show/89124072,15:00,6:14,747,"$2,072,731.00","$1,889,725.00"
EWR - ANC,52143769255,EWR CARGO 1,A321neo-LR,https://www.airlines-manager.com/network/showline/44793460,https://www.airlines-manager.com/network/showflight/52143769255,https://www.airlines-manager.com/aircraft/show/103406580,4:00,18:59,0,"$313,596.00","$249,742.00"
EWR - ANC,52163458739,EWR-STL-PIT 3,A321neo,https://www.airlines-manager.com/network/showline/44793460,https://www.airlines-manager.com/network/showflight/52163458739,https://www.airlines-manager.com/aircraft/show/115400546,10:00,0:59,338,"$995,874.00","$932,790.00"
EWR - ANC,52172581943,EWR-STL-PIT 2,A321neo,https://www.airlines-manager.com/network/showline/44793460,https://www.airlines-manager.com/network/showflight/52172581943,https://www.airlines-manager.com/aircraft/show/115400547,13:15,4:14,338,"$995,874.00","$932,790.00"
EWR - ANC,52181070794,EWR-STL-PIT 1,A321neo,https://www.airlines-manager.com/network/showline/44793460,https://www.airlines-manager.com/network/showflight/52181070794,https://www.airlines-manager.com/aircraft/show/115400548,18:45,9:44,338,"$995,874.00","$932,790.00"
EWR - ANC,52188655671,EWR-STL-PIT 4,A321neo,https://www.airlines-manager.com/network/showline/44793460,https://www.airlines-manager.com/network/showflight/52188655671,https://www.airlines-manager.com/aircraft/show/115400545,21:45,12:44,338,"$906,951.00","$851,536.00"
EWR - ATH,52143768861,EWR 84A-7 B2,777-300,https://www.airlines-manager.com/network/showline/39747655,https://www.airlines-manager.com/network/showflight/52143768861,https://www.airlines-manager.com/aircraft/show/94521249,0:00,19:59,852,"$3,233,736.00","$2,941,443.00"
EWR - ATH,52185045378,EWR 84A-4 B2,777-300,https://www.airlines-manager.com/network/showline/39747655,https://www.airlines-manager.com/network/showflight/52185045378,https://www.airlines-manager.com/aircraft/show/90656551,19:45,15:44,852,"$3,233,736.00","$2,941,443.00"
EWR - ATL,52163458711,EWR-DFW-ATL 1,737-900ER,https://www.airlines-manager.com/network/showline/39256202,https://www.airlines-manager.com/network/showflight/52163458711,https://www.airlines-manager.com/aircraft/show/90489724,10:00,14:59,320,"$316,268.00","$254,951.00"
EWR - ATL,52172582030,EWR-DFW-ATL 3,737-900ER,https://www.airlines-manager.com/network/showline/39256202,https://www.airlines-manager.com/network/showflight/52172582030,https://www.airlines-manager.com/aircraft/show/90489726,14:15,19:14,320,"$316,268.00","$254,951.00"
EWR - ATL,52181070682,EWR-DFW-ATL 2,737-900ER,https://www.airlines-manager.com/network/showline/39256202,https://www.airlines-manager.com/network/showflight/52181070682,https://www.airlines-manager.com/aircraft/show/90489725,17:30,22:29,320,"$316,268.00","$254,951.00"
EWR - ATL,52181070683,EWR-DFW-ATL 6 B,A319-100,https://www.airlines-manager.com/network/showline/39256202,https://www.airlines-manager.com/network/showflight/52181070683,https://www.airlines-manager.com/aircraft/show/105222360,18:30,23:29,198,"$240,935.00","$198,865.00"
EWR - ATL,52185045379,EWR-DFW-ATL 5,737-900ER,https://www.airlines-manager.com/network/showline/39256202,https://www.airlines-manager.com/network/showflight/52185045379,https://www.airlines-manager.com/aircraft/show/86238752,19:45,0:44,320,"$316,268.00","$254,951.00"
EWR - ATL,52188655706,EWR-DFW-ATL 4,737-900ER,https://www.airlines-manager.com/network/showline/39256202,https://www.airlines-manager.com/network/showflight/52188655706,https://www.airlines-manager.com/aircraft/show/86238753,22:15,3:14,320,"$316,268.00","$254,951.00"
EWR - AUS,52143769112,EWR-ABQ-AUS 3,A321-200,https://www.airlines-manager.com/network/showline/43845077,https://www.airlines-manager.com/network/showflight/52143769112,https://www.airlines-manager.com/aircraft/show/90717077,2:00,9:59,310,"$499,178.00","$457,934.00"
EWR - AUS,52143769113,EWR-ABQ-AUS 4,A321-200,https://www.airlines-manager.com/network/showline/43845077,https://www.airlines-manager.com/network/showflight/52143769113,https://www.airlines-manager.com/aircraft/show/90717076,3:00,10:59,310,"$499,178.00","$457,934.00"
EWR - AUS,52163458767,EWR-ABQ-AUS 2,A321-200,https://www.airlines-manager.com/network/showline/43845077,https://www.airlines-manager.com/network/showflight/52163458767,https://www.airlines-manager.com/aircraft/show/90717078,10:00,17:59,310,"$499,178.00","$457,934.00"
EWR - AUS,52167946341,EWR-ABQ-AUS 5,A321-200,https://www.airlines-manager.com/network/showline/43845077,https://www.airlines-manager.com/network/showflight/52167946341,https://www.airlines-manager.com/aircraft/show/95950199,12:00,19:59,310,"$499,178.00","$457,934.00"
EWR - AUS,52185045327,EWR-ABQ-AUS 1,A321-200,https://www.airlines-manager.com/network/showline/43845077,https://www.airlines-manager.com/network/showflight/52185045327,https://www.airlines-manager.com/aircraft/show/90717079,19:15,3:14,310,"$499,178.00","$457,934.00"
EWR - BCN,52176667088,EWR 84A-5 B2,777-300,https://www.airlines-manager.com/network/showline/39983692,https://www.airlines-manager.com/network/showflight/52176667088,https://www.airlines-manager.com/aircraft/show/94521250,15:45,7:44,852,"$2,614,256.00","$2,371,959.00"
EWR - BCN,52185045384,EWR 84A-2 B2,777-300,https://www.airlines-manager.com/network/showline/39983692,https://www.airlines-manager.com/network/showflight/52185045384,https://www.airlines-manager.com/aircraft/show/94521252,20:00,11:59,851,"$2,608,359.00","$2,366,257.00"
EWR - BDA,52163458648,EWR-YEG-BFF 5 B,A319-100,https://www.airlines-manager.com/network/showline/49208029,https://www.airlines-manager.com/network/showflight/52163458648,https://www.airlines-manager.com/aircraft/show/115493369,8:45,13:59,198,"$243,326.00","$221,553.00"
EWR - BDA,52167946190,EWR-YEG-BFF 2,737-900ER,https://www.airlines-manager.com/network/showline/49208029,https://www.airlines-manager.com/network/showflight/52167946190,https://www.airlines-manager.com/aircraft/show/98936170,11:00,16:14,320,"$321,087.00","$290,297.00"
EWR - BDA,52172581848,EWR-YEG-BFF 4,737-900ER,https://www.airlines-manager.com/network/showline/49208029,https://www.airlines-manager.com/network/showflight/52172581848,https://www.airlines-manager.com/aircraft/show/98936171,13:00,18:14,320,"$321,087.00","$290,297.00"
EWR - BDA,52188655534,EWR-YEG-BFF 1,737-900ER,https://www.airlines-manager.com/network/showline/49208029,https://www.airlines-manager.com/network/showflight/52188655534,https://www.airlines-manager.com/aircraft/show/98936168,21:00,2:14,320,"$321,087.00","$290,297.00"
EWR - BDA,52188655535,EWR-YEG-BFF 3,737-900ER,https://www.airlines-manager.com/network/showline/49208029,https://www.airlines-manager.com/network/showflight/52188655535,https://www.airlines-manager.com/aircraft/show/98936169,22:30,3:44,252,"$258,020.00","$229,013.00"
EWR - BDL,52143768994,EWR-COS-ICT 4,A321-200,https://www.airlines-manager.com/network/showline/47218149,https://www.airlines-manager.com/network/showflight/52143768994,https://www.airlines-manager.com/aircraft/show/108834811,1:00,3:29,310,"$89,382.00","$71,054.00"
EWR - BDL,52163458694,EWR-COS-ICT 5,ERJ-175,https://www.airlines-manager.com/network/showline/47218149,https://www.airlines-manager.com/network/showflight/52163458694,https://www.airlines-manager.com/aircraft/show/108466265,9:30,11:59,112,"$38,352.00","$27,154.00"
EWR - BDL,52172581980,EWR-COS-ICT 3,A321-200,https://www.airlines-manager.com/network/showline/47218149,https://www.airlines-manager.com/network/showflight/52172581980,https://www.airlines-manager.com/aircraft/show/108834810,14:00,16:29,310,"$89,382.00","$71,054.00"
EWR - BDL,52176667123,EWR-COS-ICT 2,A321-200,https://www.airlines-manager.com/network/showline/47218149,https://www.airlines-manager.com/network/showflight/52176667123,https://www.airlines-manager.com/aircraft/show/108834809,16:00,18:29,310,"$89,382.00","$71,054.00"
EWR - BDL,52191270919,EWR-COS-ICT 1,A321-200,https://www.airlines-manager.com/network/showline/47218149,https://www.airlines-manager.com/network/showflight/52191270919,https://www.airlines-manager.com/aircraft/show/108834808,23:00,1:29,310,"$89,382.00","$71,054.00"
EWR - BFF,52143769135,EWR-YEG-BFF 1,737-900ER,https://www.airlines-manager.com/network/showline/49208024,https://www.airlines-manager.com/network/showflight/52143769135,https://www.airlines-manager.com/aircraft/show/98936168,2:15,10:14,320,"$505,501.00","$462,790.00"
EWR - BFF,52143769136,EWR-YEG-BFF 3,737-900ER,https://www.airlines-manager.com/network/showline/49208024,https://www.airlines-manager.com/network/showflight/52143769136,https://www.airlines-manager.com/aircraft/show/98936169,3:45,11:44,320,"$505,501.00","$462,790.00"
EWR - BFF,52172582003,EWR-YEG-BFF 5 B,A319-100,https://www.airlines-manager.com/network/showline/49208024,https://www.airlines-manager.com/network/showflight/52172582003,https://www.airlines-manager.com/aircraft/show/115493369,14:00,21:59,198,"$381,668.00","$350,758.00"
EWR - BFF,52176667150,EWR-YEG-BFF 2,737-900ER,https://www.airlines-manager.com/network/showline/49208024,https://www.airlines-manager.com/network/showflight/52176667150,https://www.airlines-manager.com/aircraft/show/98936170,16:15,0:14,320,"$505,501.00","$462,790.00"
EWR - BFF,52181070760,EWR-YEG-BFF 4,737-900ER,https://www.airlines-manager.com/network/showline/49208024,https://www.airlines-manager.com/network/showflight/52181070760,https://www.airlines-manager.com/aircraft/show/98936171,18:15,2:14,320,"$505,501.00","$462,790.00"
EWR - BHM,52143769145,EWR-RAP-BHM 1,A321-200,https://www.airlines-manager.com/network/showline/49372685,https://www.airlines-manager.com/network/showflight/52143769145,https://www.airlines-manager.com/aircraft/show/116042862,2:15,7:44,310,"$345,483.00","$316,690.00"
EWR - BHM,52163458623,EWR-RAP-BHM 4,A321-200,https://www.airlines-manager.com/network/showline/49372685,https://www.airlines-manager.com/network/showflight/52163458623,https://www.airlines-manager.com/aircraft/show/116042859,8:30,13:59,310,"$345,483.00","$316,690.00"
EWR - BHM,52172581984,EWR-RAP-BHM 3,A321-200,https://www.airlines-manager.com/network/showline/49372685,https://www.airlines-manager.com/network/showflight/52172581984,https://www.airlines-manager.com/aircraft/show/116042860,14:00,19:29,310,"$345,483.00","$316,690.00"
EWR - BHM,52176667075,EWR-RAP-BHM 2,A321-200,https://www.airlines-manager.com/network/showline/49372685,https://www.airlines-manager.com/network/showflight/52176667075,https://www.airlines-manager.com/aircraft/show/116042861,15:15,20:44,310,"$345,483.00","$316,690.00"
EWR - BIL,52163458708,EWR-BIL-BZN 1,737-900ER,https://www.airlines-manager.com/network/showline/49372803,https://www.airlines-manager.com/network/showflight/52163458708,https://www.airlines-manager.com/aircraft/show/116047882,10:00,18:59,320,"$563,270.00","$517,313.00"
EWR - BIL,52167946327,EWR-BIL-BZN 4,737-900ER,https://www.airlines-manager.com/network/showline/49372803,https://www.airlines-manager.com/network/showflight/52167946327,https://www.airlines-manager.com/aircraft/show/116047885,12:00,20:59,320,"$563,270.00","$517,313.00"
EWR - BIL,52188655585,EWR-BIL-BZN 3,737-900ER,https://www.airlines-manager.com/network/showline/49372803,https://www.airlines-manager.com/network/showflight/52188655585,https://www.airlines-manager.com/aircraft/show/116047884,21:15,6:14,320,"$563,270.00","$517,313.00"
EWR - BIL,52188655586,EWR-BIL-BZN 2,737-900ER,https://www.airlines-manager.com/network/showline/49372803,https://www.airlines-manager.com/network/showflight/52188655586,https://www.airlines-manager.com/aircraft/show/116047883,22:45,7:44,320,"$563,270.00","$517,313.00"
EWR - BNA,52143769221,EWR-BNA-JAX 3,A321-200,https://www.airlines-manager.com/network/showline/45849233,https://www.airlines-manager.com/network/showflight/52143769221,https://www.airlines-manager.com/aircraft/show/104610408,3:15,8:14,310,"$321,678.00","$292,338.00"
EWR - BNA,52163458622,EWR-BNA-JAX 2,A321-200,https://www.airlines-manager.com/network/showline/45849233,https://www.airlines-manager.com/network/showflight/52163458622,https://www.airlines-manager.com/aircraft/show/104610409,8:30,13:29,310,"$321,678.00","$292,338.00"
EWR - BNA,52172581892,EWR-BNA-JAX 1,A321-200,https://www.airlines-manager.com/network/showline/45849233,https://www.airlines-manager.com/network/showflight/52172581892,https://www.airlines-manager.com/aircraft/show/104610410,13:00,17:59,310,"$321,678.00","$292,338.00"
EWR - BNA,52181070618,EWR-BNA-JAX 5,ERJ-175,https://www.airlines-manager.com/network/showline/45849233,https://www.airlines-manager.com/network/showflight/52181070618,https://www.airlines-manager.com/aircraft/show/96421247,17:00,21:59,112,"$152,706.00","$133,800.00"
EWR - BNA,52188655579,EWR-BNA-JAX 4,A321-200,https://www.airlines-manager.com/network/showline/45849233,https://www.airlines-manager.com/network/showflight/52188655579,https://www.airlines-manager.com/aircraft/show/104610407,21:15,2:14,310,"$321,678.00","$292,338.00"
EWR - BOI,52143769062,EWR-BOI-PBI 5 B,A319-100,https://www.airlines-manager.com/network/showline/45805680,https://www.airlines-manager.com/network/showflight/52143769062,https://www.airlines-manager.com/aircraft/show/110582846,1:30,11:59,198,"$490,270.00","$452,028.00"
EWR - BOI,52163458748,EWR-BOI-PBI 1,A321-200,https://www.airlines-manager.com/network/showline/45805680,https://www.airlines-manager.com/network/showflight/52163458748,https://www.airlines-manager.com/aircraft/show/104418460,10:00,20:29,310,"$652,790.00","$605,103.00"
EWR - BOI,52176667008,EWR-BOI-PBI 4,A321-200,https://www.airlines-manager.com/network/showline/45805680,https://www.airlines-manager.com/network/showflight/52176667008,https://www.airlines-manager.com/aircraft/show/104418463,15:00,1:29,310,"$652,790.00","$605,103.00"
EWR - BOI,52176667009,EWR-BOI-PBI 3,A321-200,https://www.airlines-manager.com/network/showline/45805680,https://www.airlines-manager.com/network/showflight/52176667009,https://www.airlines-manager.com/aircraft/show/104418462,16:30,2:59,310,"$652,790.00","$605,103.00"
EWR - BOI,52191270957,EWR-BOI-PBI 2,A321-200,https://www.airlines-manager.com/network/showline/45805680,https://www.airlines-manager.com/network/showflight/52191270957,https://www.airlines-manager.com/aircraft/show/104418461,23:30,9:59,310,"$652,790.00","$605,103.00"
EWR - BOS,52143769195,EWR-BWI-BOS 3 E,A319-100,https://www.airlines-manager.com/network/showline/42865564,https://www.airlines-manager.com/network/showflight/52143769195,https://www.airlines-manager.com/aircraft/show/104034464,3:00,5:59,216,"$93,753.00","$73,967.00"
EWR - BOS,52163458752,EWR-BWI-BOS 2 E,A319-100,https://www.airlines-manager.com/network/showline/42865564,https://www.airlines-manager.com/network/showflight/52163458752,https://www.airlines-manager.com/aircraft/show/104034463,10:00,12:59,216,"$93,753.00","$73,967.00"
EWR - BOS,52172581841,EWR-BWI-BOS 1 E,A319-100,https://www.airlines-manager.com/network/showline/42865564,https://www.airlines-manager.com/network/showflight/52172581841,https://www.airlines-manager.com/aircraft/show/104034462,12:45,15:44,216,"$93,753.00","$73,967.00"
EWR - BOS,52172581842,EWR-BWI-BOS 4 E,A319-100,https://www.airlines-manager.com/network/showline/42865564,https://www.airlines-manager.com/network/showflight/52172581842,https://www.airlines-manager.com/aircraft/show/99316501,13:45,16:44,216,"$93,753.00","$73,967.00"
EWR - BOS,52181070647,EWR-BWI-BOS 3 E,A319-100,https://www.airlines-manager.com/network/showline/42865564,https://www.airlines-manager.com/network/showflight/52181070647,https://www.airlines-manager.com/aircraft/show/104034464,17:00,19:59,216,"$93,753.00","$73,967.00"
EWR - BOS,52185045392,EWR-BWI-BOS 2 E,A319-100,https://www.airlines-manager.com/network/showline/42865564,https://www.airlines-manager.com/network/showflight/52185045392,https://www.airlines-manager.com/aircraft/show/104034463,20:00,22:59,216,"$93,753.00","$73,967.00"
EWR - BOS,52188655743,EWR-BWI-BOS 1 E,A319-100,https://www.airlines-manager.com/network/showline/42865564,https://www.airlines-manager.com/network/showflight/52188655743,https://www.airlines-manager.com/aircraft/show/104034462,22:45,1:44,216,"$93,753.00","$73,967.00"
EWR - BOS,52191270981,EWR-BWI-BOS 4 E,A319-100,https://www.airlines-manager.com/network/showline/42865564,https://www.airlines-manager.com/network/showflight/52191270981,https://www.airlines-manager.com/aircraft/show/99316501,23:45,2:44,216,"$93,753.00","$73,967.00"
EWR - BTV,52163458652,EWR-FCA-CID 1,A321-200,https://www.airlines-manager.com/network/showline/49372861,https://www.airlines-manager.com/network/showflight/52163458652,https://www.airlines-manager.com/aircraft/show/116042866,8:45,11:59,310,"$139,409.00","$120,194.00"
EWR - BTV,52167946333,EWR-FCA-CID 4,A321-200,https://www.airlines-manager.com/network/showline/49372861,https://www.airlines-manager.com/network/showflight/52167946333,https://www.airlines-manager.com/aircraft/show/116042863,12:00,15:14,310,"$139,409.00","$120,194.00"
EWR - BTV,52172581846,EWR-FCA-CID 3,A321-200,https://www.airlines-manager.com/network/showline/49372861,https://www.airlines-manager.com/network/showflight/52172581846,https://www.airlines-manager.com/aircraft/show/116042864,13:00,16:14,310,"$139,409.00","$120,194.00"
EWR - BTV,52181070788,EWR-FCA-CID 2,A321-200,https://www.airlines-manager.com/network/showline/49372861,https://www.airlines-manager.com/network/showflight/52181070788,https://www.airlines-manager.com/aircraft/show/116042865,18:45,21:59,310,"$139,409.00","$120,194.00"
EWR - BUF,52157350053,EWR-IND-RDU 5,ERJ-175,https://www.airlines-manager.com/network/showline/46242100,https://www.airlines-manager.com/network/showflight/52157350053,https://www.airlines-manager.com/aircraft/show/106104450,5:30,8:44,112,"$70,522.00","$57,718.00"
EWR - BUF,52167946238,EWR-IND-RDU 4,737-900ER,https://www.airlines-manager.com/network/showline/46242100,https://www.airlines-manager.com/network/showflight/52167946238,https://www.airlines-manager.com/aircraft/show/105731236,11:00,14:14,320,"$154,010.00","$130,040.00"
EWR - BUF,52176666993,EWR-IND-RDU 3,737-900ER,https://www.airlines-manager.com/network/showline/46242100,https://www.airlines-manager.com/network/showflight/52176666993,https://www.airlines-manager.com/aircraft/show/88494376,14:45,17:59,320,"$154,010.00","$130,040.00"
EWR - BUF,52181070765,EWR-IND-RDU 2,737-900ER,https://www.airlines-manager.com/network/showline/46242100,https://www.airlines-manager.com/network/showflight/52181070765,https://www.airlines-manager.com/aircraft/show/88494377,18:30,21:44,320,"$154,010.00","$130,040.00"
EWR - BUF,52191270918,EWR-IND-RDU 1,737-900ER,https://www.airlines-manager.com/network/showline/46242100,https://www.airlines-manager.com/network/showflight/52191270918,https://www.airlines-manager.com/aircraft/show/88494375,23:00,2:14,320,"$154,010.00","$130,040.00"
EWR - BWI,52143768904,EWR-BWI-BOS 3 E,A319-100,https://www.airlines-manager.com/network/showline/40109052,https://www.airlines-manager.com/network/showflight/52143768904,https://www.airlines-manager.com/aircraft/show/104034464,0:15,2:59,216,"$74,590.00","$56,020.00"
EWR - BWI,52143768905,EWR-BWI-BOS 2 E,A319-100,https://www.airlines-manager.com/network/showline/40109052,https://www.airlines-manager.com/network/showflight/52143768905,https://www.airlines-manager.com/aircraft/show/104034463,3:15,5:59,216,"$74,590.00","$56,020.00"
EWR - BWI,52163458753,EWR-BWI-BOS 1 E,A319-100,https://www.airlines-manager.com/network/showline/40109052,https://www.airlines-manager.com/network/showflight/52163458753,https://www.airlines-manager.com/aircraft/show/104034462,10:00,12:44,216,"$74,590.00","$56,020.00"
EWR - BWI,52167946259,EWR-BWI-BOS 4 E,A319-100,https://www.airlines-manager.com/network/showline/40109052,https://www.airlines-manager.com/network/showflight/52167946259,https://www.airlines-manager.com/aircraft/show/99316501,11:00,13:44,216,"$74,590.00","$56,020.00"
EWR - BWI,52172582029,EWR-BWI-BOS 3 E,A319-100,https://www.airlines-manager.com/network/showline/40109052,https://www.airlines-manager.com/network/showflight/52172582029,https://www.airlines-manager.com/aircraft/show/104034464,14:15,16:59,216,"$74,590.00","$56,020.00"
EWR - BWI,52181070675,EWR-BWI-BOS 2 E,A319-100,https://www.airlines-manager.com/network/showline/40109052,https://www.airlines-manager.com/network/showflight/52181070675,https://www.airlines-manager.com/aircraft/show/104034463,17:15,19:59,216,"$74,590.00","$56,020.00"
EWR - BWI,52185045393,EWR-BWI-BOS 1 E,A319-100,https://www.airlines-manager.com/network/showline/40109052,https://www.airlines-manager.com/network/showflight/52185045393,https://www.airlines-manager.com/aircraft/show/104034462,20:00,22:44,216,"$74,590.00","$56,020.00"
EWR - BWI,52188655563,EWR-BWI-BOS 4 E,A319-100,https://www.airlines-manager.com/network/showline/40109052,https://www.airlines-manager.com/network/showflight/52188655563,https://www.airlines-manager.com/aircraft/show/99316501,21:00,23:44,216,"$74,590.00","$56,020.00"
EWR - BZN,52143768941,EWR-BIL-BZN 4,737-900ER,https://www.airlines-manager.com/network/showline/49372807,https://www.airlines-manager.com/network/showflight/52143768941,https://www.airlines-manager.com/aircraft/show/116047885,0:30,9:44,320,"$590,536.00","$543,632.00"
EWR - BZN,52167946334,EWR-BIL-BZN 3,737-900ER,https://www.airlines-manager.com/network/showline/49372807,https://www.airlines-manager.com/network/showflight/52167946334,https://www.airlines-manager.com/aircraft/show/116047884,12:00,21:14,320,"$590,536.00","$543,632.00"
EWR - BZN,52172581952,EWR-BIL-BZN 2,737-900ER,https://www.airlines-manager.com/network/showline/49372807,https://www.airlines-manager.com/network/showflight/52172581952,https://www.airlines-manager.com/aircraft/show/116047883,13:30,22:44,320,"$590,536.00","$543,632.00"
EWR - BZN,52188655720,EWR-BIL-BZN 1,737-900ER,https://www.airlines-manager.com/network/showline/49372807,https://www.airlines-manager.com/network/showflight/52188655720,https://www.airlines-manager.com/aircraft/show/116047882,22:30,7:44,318,"$587,649.00","$540,859.00"
EWR - CAK,52163458618,EWR-BIL-BZN 3,737-900ER,https://www.airlines-manager.com/network/showline/49372801,https://www.airlines-manager.com/network/showflight/52163458618,https://www.airlines-manager.com/aircraft/show/116047884,8:30,11:59,320,"$190,233.00","$166,131.00"
EWR - CAK,52163458619,EWR-BIL-BZN 2,737-900ER,https://www.airlines-manager.com/network/showline/49372801,https://www.airlines-manager.com/network/showflight/52163458619,https://www.airlines-manager.com/aircraft/show/116047883,10:00,13:29,320,"$190,233.00","$166,131.00"
EWR - CAK,52185045319,EWR-BIL-BZN 1,737-900ER,https://www.airlines-manager.com/network/showline/49372801,https://www.airlines-manager.com/network/showflight/52185045319,https://www.airlines-manager.com/aircraft/show/116047882,19:00,22:29,320,"$190,233.00","$166,131.00"
EWR - CAK,52188655518,EWR-BIL-BZN 4,737-900ER,https://www.airlines-manager.com/network/showline/49372801,https://www.airlines-manager.com/network/showflight/52188655518,https://www.airlines-manager.com/aircraft/show/116047885,21:00,0:29,284,"$177,247.00","$153,513.00"
EWR - CDG,52143769194,EWR 56A-5 B1,777-300,https://www.airlines-manager.com/network/showline/40043578,https://www.airlines-manager.com/network/showflight/52143769194,https://www.airlines-manager.com/aircraft/show/106813011,3:00,18:14,748,"$2,328,158.00","$2,067,727.00"
EWR - CDG,52163458656,EWR 56A-6 B1,777-300,https://www.airlines-manager.com/network/showline/40043578,https://www.airlines-manager.com/network/showflight/52163458656,https://www.airlines-manager.com/aircraft/show/106813012,8:45,23:59,748,"$2,328,158.00","$2,067,727.00"
EWR - CDG,52185045294,EWR 56A-2 B1,777-300,https://www.airlines-manager.com/network/showline/40043578,https://www.airlines-manager.com/network/showflight/52185045294,https://www.airlines-manager.com/aircraft/show/106813008,19:00,10:14,560,"$1,744,531.00","$1,567,520.00"
EWR - CHS,52163458644,EWR-TUL-DSM 1,A321-200,https://www.airlines-manager.com/network/showline/47540556,https://www.airlines-manager.com/network/showflight/52163458644,https://www.airlines-manager.com/aircraft/show/110044463,8:30,12:59,310,"$288,474.00","$263,530.00"
EWR - CHS,52167946296,EWR-TUL-DSM 5,ERJ-175,https://www.airlines-manager.com/network/showline/47540556,https://www.airlines-manager.com/network/showflight/52167946296,https://www.airlines-manager.com/aircraft/show/110113039,12:00,16:29,112,"$137,716.00","$121,653.00"
EWR - CHS,52172582028,EWR-TUL-DSM 4,A321-200,https://www.airlines-manager.com/network/showline/47540556,https://www.airlines-manager.com/network/showflight/52172582028,https://www.airlines-manager.com/aircraft/show/110044466,14:15,18:44,310,"$288,474.00","$263,530.00"
EWR - CHS,52188655583,EWR-TUL-DSM 3,A321-200,https://www.airlines-manager.com/network/showline/47540556,https://www.airlines-manager.com/network/showflight/52188655583,https://www.airlines-manager.com/aircraft/show/110044465,21:15,1:44,310,"$288,474.00","$263,530.00"
EWR - CHS,52191270920,EWR-TUL-DSM 2,A321-200,https://www.airlines-manager.com/network/showline/47540556,https://www.airlines-manager.com/network/showflight/52191270920,https://www.airlines-manager.com/aircraft/show/110044464,23:00,3:29,279,"$271,631.00","$247,221.00"
EWR - CID,52143769039,EWR-FCA-CID 4,A321-200,https://www.airlines-manager.com/network/showline/49372869,https://www.airlines-manager.com/network/showflight/52143769039,https://www.airlines-manager.com/aircraft/show/116042863,1:15,6:59,310,"$356,156.00","$327,547.00"
EWR - CID,52143769040,EWR-FCA-CID 3,A321-200,https://www.airlines-manager.com/network/showline/49372869,https://www.airlines-manager.com/network/showflight/52143769040,https://www.airlines-manager.com/aircraft/show/116042864,2:15,7:59,310,"$356,156.00","$327,547.00"
EWR - CID,52163458728,EWR-FCA-CID 2,A321-200,https://www.airlines-manager.com/network/showline/49372869,https://www.airlines-manager.com/network/showflight/52163458728,https://www.airlines-manager.com/aircraft/show/116042865,10:00,15:44,310,"$356,156.00","$327,547.00"
EWR - CID,52188655689,EWR-FCA-CID 1,A321-200,https://www.airlines-manager.com/network/showline/49372869,https://www.airlines-manager.com/network/showflight/52188655689,https://www.airlines-manager.com/aircraft/show/116042866,22:00,3:44,293,"$344,727.00","$316,543.00"
EWR - CLE,52143769099,EWR-IND-RDU 5,ERJ-175,https://www.airlines-manager.com/network/showline/46250227,https://www.airlines-manager.com/network/showflight/52143769099,https://www.airlines-manager.com/aircraft/show/106104450,1:45,5:29,112,"$91,758.00","$77,179.00"
EWR - CLE,52157350017,EWR-IND-RDU 4,737-900ER,https://www.airlines-manager.com/network/showline/46250227,https://www.airlines-manager.com/network/showflight/52157350017,https://www.airlines-manager.com/aircraft/show/105731236,5:00,8:44,320,"$197,776.00","$170,962.00"
EWR - CLE,52167946240,EWR-IND-RDU 3,737-900ER,https://www.airlines-manager.com/network/showline/46250227,https://www.airlines-manager.com/network/showflight/52167946240,https://www.airlines-manager.com/aircraft/show/88494376,11:00,14:44,320,"$197,776.00","$170,962.00"
EWR - CLE,52176666990,EWR-IND-RDU 2,737-900ER,https://www.airlines-manager.com/network/showline/46250227,https://www.airlines-manager.com/network/showflight/52176666990,https://www.airlines-manager.com/aircraft/show/88494377,14:45,18:29,320,"$197,776.00","$170,962.00"
EWR - CLE,52185045341,EWR-IND-RDU 1,737-900ER,https://www.airlines-manager.com/network/showline/46250227,https://www.airlines-manager.com/network/showflight/52185045341,https://www.airlines-manager.com/aircraft/show/88494375,19:15,22:59,320,"$197,776.00","$170,962.00"
EWR - CLT,52143769097,EWR-BWI-BOS 1 E,A319-100,https://www.airlines-manager.com/network/showline/39273490,https://www.airlines-manager.com/network/showflight/52143769097,https://www.airlines-manager.com/aircraft/show/104034462,1:45,5:59,216,"$189,369.00","$162,858.00"
EWR - CLT,52143769098,EWR-BWI-BOS 4 E,A319-100,https://www.airlines-manager.com/network/showline/39273490,https://www.airlines-manager.com/network/showflight/52143769098,https://www.airlines-manager.com/aircraft/show/99316501,2:45,6:59,216,"$189,369.00","$162,858.00"
EWR - CLT,52163458750,EWR-BWI-BOS 3 E,A319-100,https://www.airlines-manager.com/network/showline/39273490,https://www.airlines-manager.com/network/showflight/52163458750,https://www.airlines-manager.com/aircraft/show/104034464,10:00,14:14,216,"$189,369.00","$162,858.00"
EWR - CLT,52172581900,EWR-BWI-BOS 2 E,A319-100,https://www.airlines-manager.com/network/showline/39273490,https://www.airlines-manager.com/network/showflight/52172581900,https://www.airlines-manager.com/aircraft/show/104034463,13:00,17:14,216,"$189,369.00","$162,858.00"
EWR - CLT,52176667091,EWR-BWI-BOS 1 E,A319-100,https://www.airlines-manager.com/network/showline/39273490,https://www.airlines-manager.com/network/showflight/52176667091,https://www.airlines-manager.com/aircraft/show/104034462,15:45,19:59,216,"$189,369.00","$162,858.00"
EWR - CLT,52181070611,EWR-BWI-BOS 4 E,A319-100,https://www.airlines-manager.com/network/showline/39273490,https://www.airlines-manager.com/network/showflight/52181070611,https://www.airlines-manager.com/aircraft/show/99316501,16:45,20:59,216,"$189,369.00","$162,858.00"
EWR - CLT,52185045387,EWR-BWI-BOS 3 E,A319-100,https://www.airlines-manager.com/network/showline/39273490,https://www.airlines-manager.com/network/showflight/52185045387,https://www.airlines-manager.com/aircraft/show/104034464,20:00,0:14,216,"$189,369.00","$162,858.00"
EWR - CLT,52191270929,EWR-BWI-BOS 2 E,A319-100,https://www.airlines-manager.com/network/showline/39273490,https://www.airlines-manager.com/network/showflight/52191270929,https://www.airlines-manager.com/aircraft/show/104034463,23:00,3:14,216,"$189,369.00","$162,858.00"
EWR - CMH,52143769275,EWR-BNA-JAX 2,A321-200,https://www.airlines-manager.com/network/showline/45849199,https://www.airlines-manager.com/network/showflight/52143769275,https://www.airlines-manager.com/aircraft/show/104610409,4:30,8:29,310,"$222,825.00","$198,671.00"
EWR - CMH,52163458621,EWR-BNA-JAX 1,A321-200,https://www.airlines-manager.com/network/showline/45849199,https://www.airlines-manager.com/network/showflight/52163458621,https://www.airlines-manager.com/aircraft/show/104610410,8:30,12:29,310,"$222,825.00","$198,671.00"
EWR - CMH,52172581894,EWR-BNA-JAX 5,ERJ-175,https://www.airlines-manager.com/network/showline/45849199,https://www.airlines-manager.com/network/showflight/52172581894,https://www.airlines-manager.com/aircraft/show/96421247,13:00,16:59,112,"$103,771.00","$88,474.00"
EWR - CMH,52181070676,EWR-BNA-JAX 4,A321-200,https://www.airlines-manager.com/network/showline/45849199,https://www.airlines-manager.com/network/showflight/52181070676,https://www.airlines-manager.com/aircraft/show/104610407,17:15,21:14,310,"$222,825.00","$198,671.00"
EWR - CMH,52191270933,EWR-BNA-JAX 3,A321-200,https://www.airlines-manager.com/network/showline/45849199,https://www.airlines-manager.com/network/showflight/52191270933,https://www.airlines-manager.com/aircraft/show/104610408,23:15,3:14,310,"$222,825.00","$198,671.00"
EWR - COS,52143769075,EWR-COS-ICT 1,A321-200,https://www.airlines-manager.com/network/showline/47218134,https://www.airlines-manager.com/network/showflight/52143769075,https://www.airlines-manager.com/aircraft/show/108834808,1:30,9:59,310,"$533,242.00","$491,590.00"
EWR - COS,52143769076,EWR-COS-ICT 4,A321-200,https://www.airlines-manager.com/network/showline/47218134,https://www.airlines-manager.com/network/showflight/52143769076,https://www.airlines-manager.com/aircraft/show/108834811,3:30,11:59,310,"$533,242.00","$491,590.00"
EWR - COS,52172581867,EWR-COS-ICT 5,ERJ-175,https://www.airlines-manager.com/network/showline/47218134,https://www.airlines-manager.com/network/showflight/52172581867,https://www.airlines-manager.com/aircraft/show/108466265,13:00,21:29,112,"$250,491.00","$222,673.00"
EWR - COS,52176667170,EWR-COS-ICT 3,A321-200,https://www.airlines-manager.com/network/showline/47218134,https://www.airlines-manager.com/network/showflight/52176667170,https://www.airlines-manager.com/aircraft/show/108834810,16:30,0:59,310,"$533,242.00","$491,590.00"
EWR - COS,52181070776,EWR-COS-ICT 2,A321-200,https://www.airlines-manager.com/network/showline/47218134,https://www.airlines-manager.com/network/showflight/52181070776,https://www.airlines-manager.com/aircraft/show/108834809,18:30,2:59,310,"$533,242.00","$491,590.00"
EWR - CUN,52143768976,EWR-CUN-SJU 3,737-900ER,https://www.airlines-manager.com/network/showline/46524825,https://www.airlines-manager.com/network/showflight/52143768976,https://www.airlines-manager.com/aircraft/show/106581306,0:45,8:44,320,"$520,537.00","$472,761.00"
EWR - CUN,52143768977,EWR-CUN-SJU 2,737-900ER,https://www.airlines-manager.com/network/showline/46524825,https://www.airlines-manager.com/network/showflight/52143768977,https://www.airlines-manager.com/aircraft/show/106581305,2:15,10:14,320,"$520,537.00","$472,761.00"
EWR - CUN,52172581878,EWR-CUN-SJU 1,737-900ER,https://www.airlines-manager.com/network/showline/46524825,https://www.airlines-manager.com/network/showflight/52172581878,https://www.airlines-manager.com/aircraft/show/106581304,13:00,20:59,320,"$520,537.00","$472,761.00"
EWR - CUN,52176666980,EWR-CUN-SJU 4,737-900ER,https://www.airlines-manager.com/network/showline/46524825,https://www.airlines-manager.com/network/showflight/52176666980,https://www.airlines-manager.com/aircraft/show/106581307,14:30,22:29,320,"$520,537.00","$472,761.00"
EWR - CUN,52188655710,EWR-CUN-SJU 5,737-900ER,https://www.airlines-manager.com/network/showline/46524825,https://www.airlines-manager.com/network/showflight/52188655710,https://www.airlines-manager.com/aircraft/show/86238754,22:15,6:14,320,"$520,537.00","$472,761.00"
EWR - CVG,52143768893,EWR-BNA-JAX 2,A321-200,https://www.airlines-manager.com/network/showline/45849223,https://www.airlines-manager.com/network/showflight/52143768893,https://www.airlines-manager.com/aircraft/show/104610409,0:15,4:29,310,"$269,645.00","$241,920.00"
EWR - CVG,52143768894,EWR-BNA-JAX 1,A321-200,https://www.airlines-manager.com/network/showline/45849223,https://www.airlines-manager.com/network/showflight/52143768894,https://www.airlines-manager.com/aircraft/show/104610410,4:15,8:29,310,"$269,645.00","$241,920.00"
EWR - CVG,52163458612,EWR-BNA-JAX 5,ERJ-175,https://www.airlines-manager.com/network/showline/45849223,https://www.airlines-manager.com/network/showflight/52163458612,https://www.airlines-manager.com/aircraft/show/96421247,8:15,12:29,112,"$127,354.00","$109,728.00"
EWR - CVG,52163458613,EWR CARGO 2,737-700,https://www.airlines-manager.com/network/showline/45849223,https://www.airlines-manager.com/network/showflight/52163458613,https://www.airlines-manager.com/aircraft/show/107576645,9:00,13:14,0,"$68,941.00","$50,019.00"
EWR - CVG,52172581895,EWR-BNA-JAX 4,A321-200,https://www.airlines-manager.com/network/showline/45849223,https://www.airlines-manager.com/network/showflight/52172581895,https://www.airlines-manager.com/aircraft/show/104610407,13:00,17:14,310,"$269,645.00","$241,920.00"
EWR - CVG,52185045311,EWR-BNA-JAX 3,A321-200,https://www.airlines-manager.com/network/showline/45849223,https://www.airlines-manager.com/network/showflight/52185045311,https://www.airlines-manager.com/aircraft/show/104610408,19:00,23:14,310,"$269,645.00","$241,920.00"
EWR - DEN,52143769109,EWR-DEN-SLC 1,A321-200,https://www.airlines-manager.com/network/showline/39261033,https://www.airlines-manager.com/network/showflight/52143769109,https://www.airlines-manager.com/aircraft/show/86270785,1:45,9:59,310,"$528,791.00","$464,685.00"
EWR - DEN,52143769110,EWR-DEN-SLC 4,A321-200,https://www.airlines-manager.com/network/showline/39261033,https://www.airlines-manager.com/network/showflight/52143769110,https://www.airlines-manager.com/aircraft/show/90452835,2:45,10:59,310,"$528,791.00","$464,685.00"
EWR - DEN,52163458762,EWR-DEN-SLC 2,A321-200,https://www.airlines-manager.com/network/showline/39261033,https://www.airlines-manager.com/network/showflight/52163458762,https://www.airlines-manager.com/aircraft/show/87153196,10:00,18:14,310,"$528,791.00","$464,685.00"
EWR - DEN,52167946272,EWR-DEN-SLC 3,A321-200,https://www.airlines-manager.com/network/showline/39261033,https://www.airlines-manager.com/network/showflight/52167946272,https://www.airlines-manager.com/aircraft/show/86270783,11:00,19:14,310,"$528,791.00","$464,685.00"
EWR - DEN,52176667149,EWR-DEN-SLC 5,A321-200,https://www.airlines-manager.com/network/showline/39261033,https://www.airlines-manager.com/network/showflight/52176667149,https://www.airlines-manager.com/aircraft/show/90452833,16:00,0:14,310,"$528,791.00","$464,685.00"
EWR - DEN,52181070660,EWR-DEN-SLC 6 B,A319-100,https://www.airlines-manager.com/network/showline/39261033,https://www.airlines-manager.com/network/showflight/52181070660,https://www.airlines-manager.com/aircraft/show/105223076,17:00,1:14,197,"$395,314.00","$344,035.00"
EWR - DFW,52143769150,EWR-DFW-ATL 1,737-900ER,https://www.airlines-manager.com/network/showline/39279932,https://www.airlines-manager.com/network/showflight/52143769150,https://www.airlines-manager.com/aircraft/show/90489724,2:30,9:59,320,"$473,148.00","$408,033.00"
EWR - DFW,52143769151,EWR-DFW-ATL 4,737-900ER,https://www.airlines-manager.com/network/showline/39279932,https://www.airlines-manager.com/network/showflight/52143769151,https://www.airlines-manager.com/aircraft/show/86238753,3:30,10:59,320,"$473,148.00","$408,033.00"
EWR - DFW,52163458731,EWR-DFW-ATL 2,737-900ER,https://www.airlines-manager.com/network/showline/39279932,https://www.airlines-manager.com/network/showflight/52163458731,https://www.airlines-manager.com/aircraft/show/90489725,10:00,17:29,320,"$473,148.00","$408,033.00"
EWR - DFW,52167946244,EWR-DFW-ATL 6 B,A319-100,https://www.airlines-manager.com/network/showline/39279932,https://www.airlines-manager.com/network/showflight/52167946244,https://www.airlines-manager.com/aircraft/show/105222360,11:00,18:29,198,"$357,704.00","$312,102.00"
EWR - DFW,52167946245,EWR-DFW-ATL 5,737-900ER,https://www.airlines-manager.com/network/showline/39279932,https://www.airlines-manager.com/network/showflight/52167946245,https://www.airlines-manager.com/aircraft/show/86238752,12:15,19:44,320,"$473,148.00","$408,033.00"
EWR - DFW,52185045342,EWR-DFW-ATL 3,737-900ER,https://www.airlines-manager.com/network/showline/39279932,https://www.airlines-manager.com/network/showflight/52185045342,https://www.airlines-manager.com/aircraft/show/90489726,19:15,2:44,319,"$470,446.00","$405,386.00"
EWR - DSM,52143769126,EWR-TUL-DSM 5,ERJ-175,https://www.airlines-manager.com/network/showline/47540558,https://www.airlines-manager.com/network/showflight/52143769126,https://www.airlines-manager.com/aircraft/show/110113039,2:00,7:59,112,"$177,361.00","$157,321.00"
EWR - DSM,52143769127,EWR-TUL-DSM 4,A321-200,https://www.airlines-manager.com/network/showline/47540558,https://www.airlines-manager.com/network/showflight/52143769127,https://www.airlines-manager.com/aircraft/show/110044466,4:15,10:14,310,"$375,015.00","$344,565.00"
EWR - DSM,52167946302,EWR-TUL-DSM 3,A321-200,https://www.airlines-manager.com/network/showline/47540558,https://www.airlines-manager.com/network/showflight/52167946302,https://www.airlines-manager.com/aircraft/show/110044465,12:00,17:59,310,"$375,015.00","$344,565.00"
EWR - DSM,52172581958,EWR-TUL-DSM 2,A321-200,https://www.airlines-manager.com/network/showline/47540558,https://www.airlines-manager.com/network/showflight/52172581958,https://www.airlines-manager.com/aircraft/show/110044464,13:45,19:44,310,"$375,015.00","$344,565.00"
EWR - DSM,52188655724,EWR-TUL-DSM 1,A321-200,https://www.airlines-manager.com/network/showline/47540558,https://www.airlines-manager.com/network/showflight/52188655724,https://www.airlines-manager.com/aircraft/show/110044463,22:30,4:29,274,"$349,181.00","$319,731.00"
EWR - DTW,52143769237,EWR-DTW-YYZ 5,737-900ER,https://www.airlines-manager.com/network/showline/42493159,https://www.airlines-manager.com/network/showflight/52143769237,https://www.airlines-manager.com/aircraft/show/92003921,3:30,7:29,320,"$225,975.00","$188,728.00"
EWR - DTW,52163458759,EWR-DTW-YYZ 1,737-900ER,https://www.airlines-manager.com/network/showline/42493159,https://www.airlines-manager.com/network/showflight/52163458759,https://www.airlines-manager.com/aircraft/show/92003925,10:00,13:59,320,"$225,975.00","$188,728.00"
EWR - DTW,52172581948,EWR-DTW-YYZ 2,737-900ER,https://www.airlines-manager.com/network/showline/42493159,https://www.airlines-manager.com/network/showflight/52172581948,https://www.airlines-manager.com/aircraft/show/92003924,13:30,17:29,320,"$225,975.00","$188,728.00"
EWR - DTW,52188655654,EWR-DTW-YYZ 3,737-900ER,https://www.airlines-manager.com/network/showline/42493159,https://www.airlines-manager.com/network/showflight/52188655654,https://www.airlines-manager.com/aircraft/show/92003923,21:45,1:44,320,"$225,975.00","$188,728.00"
EWR - DTW,52188655656,EWR-DTW-YYZ 4,737-900ER,https://www.airlines-manager.com/network/showline/42493159,https://www.airlines-manager.com/network/showflight/52188655656,https://www.airlines-manager.com/aircraft/show/92003922,22:15,2:14,320,"$225,975.00","$188,728.00"
EWR - DTW,52188655657,EWR CARGO 1,A321neo-LR,https://www.airlines-manager.com/network/showline/42493159,https://www.airlines-manager.com/network/showflight/52188655657,https://www.airlines-manager.com/aircraft/show/103406580,22:45,2:44,0,"$77,012.00","$45,858.00"
EWR - DUB,52143769222,EWR 56C-2 F,787-10,https://www.airlines-manager.com/network/showline/46569727,https://www.airlines-manager.com/network/showflight/52143769222,https://www.airlines-manager.com/aircraft/show/106721557,3:30,16:59,598,"$1,654,162.00","$1,542,898.00"
EWR - DUB,52157350030,EWR 56C-4 F,787-10,https://www.airlines-manager.com/network/showline/46569727,https://www.airlines-manager.com/network/showflight/52157350030,https://www.airlines-manager.com/aircraft/show/106721559,5:15,18:44,598,"$1,654,162.00","$1,542,898.00"
EWR - DUB,52167946176,EWR 56C-6 F,787-10,https://www.airlines-manager.com/network/showline/46569727,https://www.airlines-manager.com/network/showflight/52167946176,https://www.airlines-manager.com/aircraft/show/106721561,10:30,23:59,597,"$1,649,845.00","$1,538,700.00"
EWR - EDI,52143769268,EWR 56C-3 F,787-10,https://www.airlines-manager.com/network/showline/46569734,https://www.airlines-manager.com/network/showflight/52143769268,https://www.airlines-manager.com/aircraft/show/106721558,4:15,17:59,598,"$1,639,705.00","$1,532,414.00"
EWR - EDI,52157350083,EWR 56C-5 F,787-10,https://www.airlines-manager.com/network/showline/46569734,https://www.airlines-manager.com/network/showflight/52157350083,https://www.airlines-manager.com/aircraft/show/106721560,6:00,19:44,598,"$1,639,705.00","$1,532,414.00"
EWR - EDI,52185045377,EWR 56C-5 F,787-10,https://www.airlines-manager.com/network/showline/46569734,https://www.airlines-manager.com/network/showflight/52185045377,https://www.airlines-manager.com/aircraft/show/106721560,19:45,9:29,598,"$1,639,705.00","$1,532,414.00"
EWR - ELP,52143768930,EWR-ELP-SAT 2,737-900ER,https://www.airlines-manager.com/network/showline/45334027,https://www.airlines-manager.com/network/showflight/52143768930,https://www.airlines-manager.com/aircraft/show/103365577,0:30,9:59,320,"$590,283.00","$540,501.00"
EWR - ELP,52143768931,EWR-ELP-SAT 5 B,A319-100,https://www.airlines-manager.com/network/showline/45334027,https://www.airlines-manager.com/network/showflight/52143768931,https://www.airlines-manager.com/aircraft/show/110582847,2:30,11:59,198,"$444,766.00","$408,563.00"
EWR - ELP,52163458705,EWR-ELP-SAT 1,737-900ER,https://www.airlines-manager.com/network/showline/45334027,https://www.airlines-manager.com/network/showflight/52163458705,https://www.airlines-manager.com/aircraft/show/103365578,10:00,19:29,320,"$590,283.00","$540,501.00"
EWR - ELP,52167946328,EWR-ELP-SAT 4,737-900ER,https://www.airlines-manager.com/network/showline/45334027,https://www.airlines-manager.com/network/showflight/52167946328,https://www.airlines-manager.com/aircraft/show/103365575,12:00,21:29,320,"$590,283.00","$540,501.00"
EWR - ELP,52176667154,EWR-ELP-SAT 3,737-900ER,https://www.airlines-manager.com/network/showline/45334027,https://www.airlines-manager.com/network/showflight/52176667154,https://www.airlines-manager.com/aircraft/show/103365576,16:15,1:44,320,"$590,283.00","$540,501.00"
EWR - FAR,52143769096,EWR-LIT-FAR 4,A321-200,https://www.airlines-manager.com/network/showline/48530160,https://www.airlines-manager.com/network/showflight/52143769096,https://www.airlines-manager.com/aircraft/show/86270784,1:45,8:29,310,"$423,479.00","$390,512.00"
EWR - FAR,52157349995,EWR-LIT-FAR 3,A321-200,https://www.airlines-manager.com/network/showline/48530160,https://www.airlines-manager.com/network/showflight/52157349995,https://www.airlines-manager.com/aircraft/show/86270786,5:00,11:44,310,"$423,479.00","$390,512.00"
EWR - FAR,52176667031,EWR-LIT-FAR 2,A321-200,https://www.airlines-manager.com/network/showline/48530160,https://www.airlines-manager.com/network/showflight/52176667031,https://www.airlines-manager.com/aircraft/show/86270787,15:00,21:44,310,"$423,479.00","$390,512.00"
EWR - FAR,52185045340,EWR-LIT-FAR 1,A321-200,https://www.airlines-manager.com/network/showline/48530160,https://www.airlines-manager.com/network/showflight/52185045340,https://www.airlines-manager.com/aircraft/show/90452834,19:15,1:59,310,"$423,479.00","$390,512.00"
EWR - FCA,52167946340,EWR-FCA-CID 1,A321-200,https://www.airlines-manager.com/network/showline/49372873,https://www.airlines-manager.com/network/showflight/52167946340,https://www.airlines-manager.com/aircraft/show/116042866,12:00,21:59,310,"$623,155.00","$578,453.00"
EWR - FCA,52176667073,EWR-FCA-CID 4,A321-200,https://www.airlines-manager.com/network/showline/49372873,https://www.airlines-manager.com/network/showflight/52176667073,https://www.airlines-manager.com/aircraft/show/116042863,15:15,1:14,310,"$623,155.00","$578,453.00"
EWR - FCA,52176667074,EWR-FCA-CID 3,A321-200,https://www.airlines-manager.com/network/showline/49372873,https://www.airlines-manager.com/network/showflight/52176667074,https://www.airlines-manager.com/aircraft/show/116042864,16:15,2:14,310,"$623,155.00","$578,453.00"
EWR - FCA,52188655688,EWR-FCA-CID 2,A321-200,https://www.airlines-manager.com/network/showline/49372873,https://www.airlines-manager.com/network/showflight/52188655688,https://www.airlines-manager.com/aircraft/show/116042865,22:00,7:59,310,"$623,155.00","$578,453.00"
EWR - FCO,52143769166,EWR 84A-2 B2,777-300,https://www.airlines-manager.com/network/showline/39865842,https://www.airlines-manager.com/network/showflight/52143769166,https://www.airlines-manager.com/aircraft/show/94521252,2:30,19:59,852,"$2,899,967.00","$2,626,053.00"
EWR - FCO,52167946331,EWR 84A-3 B2,777-300,https://www.airlines-manager.com/network/showline/39865842,https://www.airlines-manager.com/network/showflight/52167946331,https://www.airlines-manager.com/aircraft/show/90656553,12:00,5:29,852,"$2,899,967.00","$2,626,053.00"
EWR - FLL,52143769023,EWR CARGO 2,737-700,https://www.airlines-manager.com/network/showline/42503825,https://www.airlines-manager.com/network/showflight/52143769023,https://www.airlines-manager.com/aircraft/show/107576645,1:15,7:29,0,"$102,826.00","$77,278.00"
EWR - FLL,52143769024,EWR-DTW-YYZ 2,737-900ER,https://www.airlines-manager.com/network/showline/42503825,https://www.airlines-manager.com/network/showflight/52143769024,https://www.airlines-manager.com/aircraft/show/92003924,3:45,9:59,320,"$388,903.00","$348,890.00"
EWR - FLL,52157350065,EWR-DTW-YYZ 4,737-900ER,https://www.airlines-manager.com/network/showline/42503825,https://www.airlines-manager.com/network/showflight/52157350065,https://www.airlines-manager.com/aircraft/show/92003922,5:45,11:59,320,"$388,903.00","$348,890.00"
EWR - FLL,52167946266,EWR-DTW-YYZ 5,737-900ER,https://www.airlines-manager.com/network/showline/42503825,https://www.airlines-manager.com/network/showflight/52167946266,https://www.airlines-manager.com/aircraft/show/92003921,11:00,17:14,320,"$388,903.00","$348,890.00"
EWR - FLL,52167946267,EWR-DTW-YYZ 3,737-900ER,https://www.airlines-manager.com/network/showline/42503825,https://www.airlines-manager.com/network/showflight/52167946267,https://www.airlines-manager.com/aircraft/show/92003923,12:00,18:14,320,"$388,903.00","$348,890.00"
EWR - FLL,52181070693,EWR-DTW-YYZ 1,737-900ER,https://www.airlines-manager.com/network/showline/42503825,https://www.airlines-manager.com/network/showflight/52181070693,https://www.airlines-manager.com/aircraft/show/92003925,17:30,23:44,320,"$388,903.00","$348,890.00"
EWR - FRA,52143769181,EWR 56B-5 B1,777-300,https://www.airlines-manager.com/network/showline/39908990,https://www.airlines-manager.com/network/showflight/52143769181,https://www.airlines-manager.com/aircraft/show/94521253,2:45,18:44,748,"$2,440,839.00","$2,175,935.00"
EWR - FRA,52143769182,EWR 56B-3 B1,777-300,https://www.airlines-manager.com/network/showline/39908990,https://www.airlines-manager.com/network/showflight/52143769182,https://www.airlines-manager.com/aircraft/show/90656555,4:30,20:29,748,"$2,440,839.00","$2,175,935.00"
EWR - FRA,52157350110,EWR 56B-1 B1,777-300,https://www.airlines-manager.com/network/showline/39908990,https://www.airlines-manager.com/network/showflight/52157350110,https://www.airlines-manager.com/aircraft/show/94521251,6:15,22:14,748,"$2,202,964.00","$2,001,972.00"
EWR - FSD,52143769270,EWR-OKC-FSD 3,A321-200,https://www.airlines-manager.com/network/showline/46719736,https://www.airlines-manager.com/network/showflight/52143769270,https://www.airlines-manager.com/aircraft/show/107161240,4:15,10:59,310,"$411,290.00","$378,809.00"
EWR - FSD,52163458673,EWR-OKC-FSD 5,ERJ-175,https://www.airlines-manager.com/network/showline/46719736,https://www.airlines-manager.com/network/showflight/52163458673,https://www.airlines-manager.com/aircraft/show/86782214,9:00,15:44,112,"$193,855.00","$172,325.00"
EWR - FSD,52167946216,EWR-OKC-FSD 2,A321-200,https://www.airlines-manager.com/network/showline/46719736,https://www.airlines-manager.com/network/showflight/52167946216,https://www.airlines-manager.com/aircraft/show/107161239,11:00,17:44,310,"$411,290.00","$378,809.00"
EWR - FSD,52176667076,EWR-OKC-FSD 4,A321-200,https://www.airlines-manager.com/network/showline/46719736,https://www.airlines-manager.com/network/showflight/52176667076,https://www.airlines-manager.com/aircraft/show/107161241,15:15,21:59,310,"$411,290.00","$378,809.00"
EWR - FSD,52181070752,EWR-OKC-FSD 1,A321-200,https://www.airlines-manager.com/network/showline/46719736,https://www.airlines-manager.com/network/showflight/52181070752,https://www.airlines-manager.com/aircraft/show/107161238,18:15,0:59,278,"$385,646.00","$354,199.00"
EWR - GRR,52163458616,EWR-RAP-BHM 1,A321-200,https://www.airlines-manager.com/network/showline/49372675,https://www.airlines-manager.com/network/showflight/52163458616,https://www.airlines-manager.com/aircraft/show/116042862,8:30,12:59,310,"$276,965.00","$252,023.00"
EWR - GRR,52172581993,EWR-RAP-BHM 4,A321-200,https://www.airlines-manager.com/network/showline/49372675,https://www.airlines-manager.com/network/showflight/52172581993,https://www.airlines-manager.com/aircraft/show/116042859,14:00,18:29,310,"$276,965.00","$252,023.00"
EWR - GRR,52185045352,EWR-RAP-BHM 3,A321-200,https://www.airlines-manager.com/network/showline/49372675,https://www.airlines-manager.com/network/showflight/52185045352,https://www.airlines-manager.com/aircraft/show/116042860,19:30,23:59,310,"$276,965.00","$252,023.00"
EWR - GRR,52185045353,EWR-RAP-BHM 2,A321-200,https://www.airlines-manager.com/network/showline/49372675,https://www.airlines-manager.com/network/showflight/52185045353,https://www.airlines-manager.com/aircraft/show/116042861,20:45,1:14,309,"$275,335.00","$250,418.00"
EWR - IAH,52143769226,EWR-IAH-LAS 3,A321neo,https://www.airlines-manager.com/network/showline/39422884,https://www.airlines-manager.com/network/showflight/52143769226,https://www.airlines-manager.com/aircraft/show/105859512,3:30,10:59,338,"$517,352.00","$469,490.00"
EWR - IAH,52143769227,EWR-IAH-LAS 5,A321neo,https://www.airlines-manager.com/network/showline/39422884,https://www.airlines-manager.com/network/showflight/52143769227,https://www.airlines-manager.com/aircraft/show/105859514,4:30,11:59,338,"$517,352.00","$469,490.00"
EWR - IAH,52157350203,EWR-IAH-LAS 1,A321neo,https://www.airlines-manager.com/network/showline/39422884,https://www.airlines-manager.com/network/showflight/52157350203,https://www.airlines-manager.com/aircraft/show/105859510,7:30,14:59,338,"$517,352.00","$469,490.00"
EWR - IAH,52167946235,EWR-IAH-LAS 2,A321neo,https://www.airlines-manager.com/network/showline/39422884,https://www.airlines-manager.com/network/showflight/52167946235,https://www.airlines-manager.com/aircraft/show/105859511,11:00,18:29,338,"$517,352.00","$469,490.00"
EWR - IAH,52167946236,EWR-IAH-LAS 4,A321neo,https://www.airlines-manager.com/network/showline/39422884,https://www.airlines-manager.com/network/showflight/52167946236,https://www.airlines-manager.com/aircraft/show/105859513,12:00,19:29,338,"$517,352.00","$469,490.00"
EWR - IAH,52181070780,EWR-IAH-LAS 6,ERJ-175,https://www.airlines-manager.com/network/showline/39422884,https://www.airlines-manager.com/network/showflight/52181070780,https://www.airlines-manager.com/aircraft/show/105864236,18:45,2:14,112,"$225,487.00","$193,280.00"
EWR - ICT,52143769001,EWR-COS-ICT 3,A321-200,https://www.airlines-manager.com/network/showline/47218155,https://www.airlines-manager.com/network/showflight/52143769001,https://www.airlines-manager.com/aircraft/show/108834810,1:00,7:59,310,"$441,036.00","$406,336.00"
EWR - ICT,52143769002,EWR-COS-ICT 2,A321-200,https://www.airlines-manager.com/network/showline/47218155,https://www.airlines-manager.com/network/showflight/52143769002,https://www.airlines-manager.com/aircraft/show/108834809,3:00,9:59,310,"$441,036.00","$406,336.00"
EWR - ICT,52167946209,EWR-COS-ICT 1,A321-200,https://www.airlines-manager.com/network/showline/47218155,https://www.airlines-manager.com/network/showflight/52167946209,https://www.airlines-manager.com/aircraft/show/108834808,11:00,17:59,310,"$441,036.00","$406,336.00"
EWR - ICT,52172581866,EWR-COS-ICT 4,A321-200,https://www.airlines-manager.com/network/showline/47218155,https://www.airlines-manager.com/network/showflight/52172581866,https://www.airlines-manager.com/aircraft/show/108834811,13:00,19:59,310,"$441,036.00","$406,336.00"
EWR - ICT,52188655635,EWR-COS-ICT 5,ERJ-175,https://www.airlines-manager.com/network/showline/47218155,https://www.airlines-manager.com/network/showflight/52188655635,https://www.airlines-manager.com/aircraft/show/108466265,21:30,4:29,112,"$208,775.00","$185,755.00"
EWR - IND,52143768944,EWR-IND-RDU 3,737-900ER,https://www.airlines-manager.com/network/showline/46255763,https://www.airlines-manager.com/network/showflight/52143768944,https://www.airlines-manager.com/aircraft/show/88494376,0:30,4:59,320,"$294,147.00","$262,579.00"
EWR - IND,52143768945,EWR-IND-RDU 2,737-900ER,https://www.airlines-manager.com/network/showline/46255763,https://www.airlines-manager.com/network/showflight/52143768945,https://www.airlines-manager.com/aircraft/show/88494377,4:15,8:44,320,"$294,147.00","$262,579.00"
EWR - IND,52167946247,EWR-IND-RDU 1,737-900ER,https://www.airlines-manager.com/network/showline/46255763,https://www.airlines-manager.com/network/showflight/52167946247,https://www.airlines-manager.com/aircraft/show/88494375,11:00,15:29,320,"$294,147.00","$262,579.00"
EWR - IND,52181070698,EWR-IND-RDU 5,ERJ-175,https://www.airlines-manager.com/network/showline/46255763,https://www.airlines-manager.com/network/showflight/52181070698,https://www.airlines-manager.com/aircraft/show/106104450,17:30,21:59,112,"$140,406.00","$122,751.00"
EWR - IND,52185045458,EWR-IND-RDU 4,737-900ER,https://www.airlines-manager.com/network/showline/46255763,https://www.airlines-manager.com/network/showflight/52185045458,https://www.airlines-manager.com/aircraft/show/105731236,20:45,1:14,320,"$294,147.00","$262,579.00"
EWR - JAN,52143769117,EWR-LIT-FAR 1,A321-200,https://www.airlines-manager.com/network/showline/48530163,https://www.airlines-manager.com/network/showflight/52143769117,https://www.airlines-manager.com/aircraft/show/90452834,2:00,8:14,310,"$387,602.00","$356,921.00"
EWR - JAN,52163458642,EWR-LIT-FAR 4,A321-200,https://www.airlines-manager.com/network/showline/48530163,https://www.airlines-manager.com/network/showflight/52163458642,https://www.airlines-manager.com/aircraft/show/86270784,8:30,14:44,310,"$387,602.00","$356,921.00"
EWR - JAN,52167946336,EWR-LIT-FAR 3,A321-200,https://www.airlines-manager.com/network/showline/48530163,https://www.airlines-manager.com/network/showflight/52167946336,https://www.airlines-manager.com/aircraft/show/86270786,12:00,18:14,310,"$387,602.00","$356,921.00"
EWR - JAN,52188655667,EWR-LIT-FAR 2,A321-200,https://www.airlines-manager.com/network/showline/48530163,https://www.airlines-manager.com/network/showflight/52188655667,https://www.airlines-manager.com/aircraft/show/86270787,21:45,3:59,310,"$387,602.00","$356,921.00"
EWR - JAX,52143769134,EWR-BNA-JAX 4,A321-200,https://www.airlines-manager.com/network/showline/45849204,https://www.airlines-manager.com/network/showflight/52143769134,https://www.airlines-manager.com/aircraft/show/104610407,2:15,7:29,310,"$336,340.00","$307,317.00"
EWR - JAX,52163458614,EWR-BNA-JAX 3,A321-200,https://www.airlines-manager.com/network/showline/45849204,https://www.airlines-manager.com/network/showflight/52163458614,https://www.airlines-manager.com/aircraft/show/104610408,8:15,13:29,310,"$336,340.00","$307,317.00"
EWR - JAX,52172582010,EWR-BNA-JAX 2,A321-200,https://www.airlines-manager.com/network/showline/45849204,https://www.airlines-manager.com/network/showflight/52172582010,https://www.airlines-manager.com/aircraft/show/104610409,14:00,19:14,310,"$336,340.00","$307,317.00"
EWR - JAX,52181070718,EWR-BNA-JAX 1,A321-200,https://www.airlines-manager.com/network/showline/45849204,https://www.airlines-manager.com/network/showflight/52181070718,https://www.airlines-manager.com/aircraft/show/104610410,18:00,23:14,310,"$336,340.00","$307,317.00"
EWR - JAX,52188655680,EWR-BNA-JAX 5,ERJ-175,https://www.airlines-manager.com/network/showline/45849204,https://www.airlines-manager.com/network/showflight/52188655680,https://www.airlines-manager.com/aircraft/show/96421247,22:00,3:14,112,"$159,669.00","$140,823.00"
EWR - KEF,52181070632,EWR 56C-2 F,787-10,https://www.airlines-manager.com/network/showline/46569722,https://www.airlines-manager.com/network/showflight/52181070632,https://www.airlines-manager.com/aircraft/show/106721557,17:00,4:14,598,"$1,336,722.00","$1,247,711.00"
EWR - KEF,52181070633,EWR 56C-3 F,787-10,https://www.airlines-manager.com/network/showline/46569722,https://www.airlines-manager.com/network/showflight/52181070633,https://www.airlines-manager.com/aircraft/show/106721558,18:00,5:14,598,"$1,336,722.00","$1,247,711.00"
EWR - KEF,52181070634,EWR 56C-4 F,787-10,https://www.airlines-manager.com/network/showline/46569722,https://www.airlines-manager.com/network/showflight/52181070634,https://www.airlines-manager.com/aircraft/show/106721559,18:45,5:59,598,"$1,336,722.00","$1,247,711.00"
EWR - LAS,52143768906,EWR-IAH-LAS 2,A321neo,https://www.airlines-manager.com/network/showline/39279941,https://www.airlines-manager.com/network/showflight/52143768906,https://www.airlines-manager.com/aircraft/show/105859511,0:15,10:59,338,"$734,373.00","$670,209.00"
EWR - LAS,52143768907,EWR-IAH-LAS 4,A321neo,https://www.airlines-manager.com/network/showline/39279941,https://www.airlines-manager.com/network/showflight/52143768907,https://www.airlines-manager.com/aircraft/show/105859513,1:15,11:59,338,"$734,373.00","$670,209.00"
EWR - LAS,52143768908,EWR-IAH-LAS 6,ERJ-175,https://www.airlines-manager.com/network/showline/39279941,https://www.airlines-manager.com/network/showflight/52143768908,https://www.airlines-manager.com/aircraft/show/105864236,2:15,12:59,112,"$317,303.00","$273,258.00"
EWR - LAS,52167946335,EWR-IAH-LAS 5,A321neo,https://www.airlines-manager.com/network/showline/39279941,https://www.airlines-manager.com/network/showflight/52167946335,https://www.airlines-manager.com/aircraft/show/105859514,12:00,22:44,338,"$734,373.00","$670,209.00"
EWR - LAS,52176667055,EWR-IAH-LAS 1,A321neo,https://www.airlines-manager.com/network/showline/39279941,https://www.airlines-manager.com/network/showflight/52176667055,https://www.airlines-manager.com/aircraft/show/105859510,15:00,1:44,338,"$734,373.00","$670,209.00"
EWR - LAS,52181070607,EWR-IAH-LAS 3,A321neo,https://www.airlines-manager.com/network/showline/39279941,https://www.airlines-manager.com/network/showflight/52181070607,https://www.airlines-manager.com/aircraft/show/105859512,16:45,3:29,338,"$734,373.00","$670,209.00"
EWR - LAX,52143768831,EWR-SFO-LAX 4,757-300,https://www.airlines-manager.com/network/showline/39254373,https://www.airlines-manager.com/network/showflight/52143768831,https://www.airlines-manager.com/aircraft/show/89233030,0:00,11:29,400,"$933,265.00","$842,042.00"
EWR - LAX,52143768832,EWR-SFO-LAX 5,757-300,https://www.airlines-manager.com/network/showline/39254373,https://www.airlines-manager.com/network/showflight/52143768832,https://www.airlines-manager.com/aircraft/show/89233027,2:00,13:29,400,"$933,265.00","$842,042.00"
EWR - LAX,52172581834,EWR-SFO-LAX 1,757-300,https://www.airlines-manager.com/network/showline/39254373,https://www.airlines-manager.com/network/showflight/52172581834,https://www.airlines-manager.com/aircraft/show/83716137,12:30,23:59,400,"$933,265.00","$842,042.00"
EWR - LAX,52172581835,EWR-SFO-LAX 2,757-300,https://www.airlines-manager.com/network/showline/39254373,https://www.airlines-manager.com/network/showflight/52172581835,https://www.airlines-manager.com/aircraft/show/89233028,14:00,1:29,400,"$933,265.00","$842,042.00"
EWR - LAX,52176667080,EWR-SFO-LAX 3,757-300,https://www.airlines-manager.com/network/showline/39254373,https://www.airlines-manager.com/network/showflight/52176667080,https://www.airlines-manager.com/aircraft/show/89233029,15:30,2:59,400,"$933,265.00","$842,042.00"
EWR - LHR,52143769133,EWR 56A-1 B1,777-300,https://www.airlines-manager.com/network/showline/40098745,https://www.airlines-manager.com/network/showflight/52143769133,https://www.airlines-manager.com/aircraft/show/106813007,2:15,16:44,748,"$2,219,977.00","$1,968,374.00"
EWR - LHR,52172581832,EWR 56A-4 B1,777-300,https://www.airlines-manager.com/network/showline/40098745,https://www.airlines-manager.com/network/showflight/52172581832,https://www.airlines-manager.com/aircraft/show/106813010,12:30,2:59,748,"$2,219,977.00","$1,968,374.00"
EWR - LHR,52181070751,EWR 56A-5 B1,777-300,https://www.airlines-manager.com/network/showline/40098745,https://www.airlines-manager.com/network/showflight/52181070751,https://www.airlines-manager.com/aircraft/show/106813011,18:15,8:44,748,"$2,004,154.00","$1,809,794.00"
EWR - LIS,52157350064,EWR 84A-4 B2,777-300,https://www.airlines-manager.com/network/showline/46601012,https://www.airlines-manager.com/network/showflight/52157350064,https://www.airlines-manager.com/aircraft/show/90656551,5:30,19:44,852,"$2,328,969.00","$2,120,634.00"
EWR - LIS,52167946350,EWR 84A-1 B2,777-300,https://www.airlines-manager.com/network/showline/46601012,https://www.airlines-manager.com/network/showflight/52167946350,https://www.airlines-manager.com/aircraft/show/90656554,12:15,2:29,852,"$2,328,969.00","$2,120,634.00"
EWR - LIT,52163458641,EWR-LIT-FAR 2,A321-200,https://www.airlines-manager.com/network/showline/48530155,https://www.airlines-manager.com/network/showflight/52163458641,https://www.airlines-manager.com/aircraft/show/86270787,8:30,14:44,310,"$393,314.00","$362,357.00"
EWR - LIT,52172581853,EWR-LIT-FAR 1,A321-200,https://www.airlines-manager.com/network/showline/48530155,https://www.airlines-manager.com/network/showflight/52172581853,https://www.airlines-manager.com/aircraft/show/90452834,13:00,19:14,310,"$393,314.00","$362,357.00"
EWR - LIT,52185045356,EWR-LIT-FAR 4,A321-200,https://www.airlines-manager.com/network/showline/48530155,https://www.airlines-manager.com/network/showflight/52185045356,https://www.airlines-manager.com/aircraft/show/86270784,19:30,1:44,310,"$393,314.00","$362,357.00"
EWR - LIT,52188655750,EWR-LIT-FAR 3,A321-200,https://www.airlines-manager.com/network/showline/48530155,https://www.airlines-manager.com/network/showflight/52188655750,https://www.airlines-manager.com/aircraft/show/86270786,22:45,4:59,310,"$393,314.00","$362,357.00"
EWR - MAD,52143768854,EWR 56B-7 B1,777-300,https://www.airlines-manager.com/network/showline/42007979,https://www.airlines-manager.com/network/showflight/52143768854,https://www.airlines-manager.com/aircraft/show/89124072,0:00,14:59,748,"$2,289,844.00","$2,036,885.00"
EWR - MAD,52185045440,EWR 56B-3 B1,777-300,https://www.airlines-manager.com/network/showline/42007979,https://www.airlines-manager.com/network/showflight/52185045440,https://www.airlines-manager.com/aircraft/show/90656555,20:30,11:29,748,"$2,289,844.00","$2,036,885.00"
EWR - MAD,52188655704,EWR 56B-1 B1,777-300,https://www.airlines-manager.com/network/showline/42007979,https://www.airlines-manager.com/network/showflight/52188655704,https://www.airlines-manager.com/aircraft/show/94521251,22:15,13:14,747,"$2,064,416.00","$1,871,147.00"
EWR - MCI,52143769241,EWR-ELP-SAT 1,737-900ER,https://www.airlines-manager.com/network/showline/45356715,https://www.airlines-manager.com/network/showflight/52143769241,https://www.airlines-manager.com/aircraft/show/103365578,3:45,9:59,320,"$393,015.00","$354,039.00"
EWR - MCI,52157350069,EWR-ELP-SAT 4,737-900ER,https://www.airlines-manager.com/network/showline/45356715,https://www.airlines-manager.com/network/showflight/52157350069,https://www.airlines-manager.com/aircraft/show/103365575,5:45,11:59,320,"$393,015.00","$354,039.00"
EWR - MCI,52163458751,EWR-ELP-SAT 3,737-900ER,https://www.airlines-manager.com/network/showline/45356715,https://www.airlines-manager.com/network/showflight/52163458751,https://www.airlines-manager.com/aircraft/show/103365576,10:00,16:14,320,"$393,015.00","$354,039.00"
EWR - MCI,52172581944,EWR CARGO 2,737-700,https://www.airlines-manager.com/network/showline/45356715,https://www.airlines-manager.com/network/showflight/52172581944,https://www.airlines-manager.com/aircraft/show/107576645,13:15,19:29,0,"$103,001.00","$77,854.00"
EWR - MCI,52181070753,EWR-ELP-SAT 2,737-900ER,https://www.airlines-manager.com/network/showline/45356715,https://www.airlines-manager.com/network/showflight/52181070753,https://www.airlines-manager.com/aircraft/show/103365577,18:15,0:29,320,"$393,015.00","$354,039.00"
EWR - MCI,52185045425,EWR-ELP-SAT 5 B,A319-100,https://www.airlines-manager.com/network/showline/45356715,https://www.airlines-manager.com/network/showflight/52185045425,https://www.airlines-manager.com/aircraft/show/110582847,20:15,2:29,198,"$297,509.00","$269,782.00"
EWR - MCO,52143769101,EWR-IAH-LAS 1,A321neo,https://www.airlines-manager.com/network/showline/40395708,https://www.airlines-manager.com/network/showflight/52143769101,https://www.airlines-manager.com/aircraft/show/105859510,1:45,7:29,338,"$389,555.00","$350,260.00"
EWR - MCO,52167946237,EWR-IAH-LAS 3,A321neo,https://www.airlines-manager.com/network/showline/40395708,https://www.airlines-manager.com/network/showflight/52167946237,https://www.airlines-manager.com/aircraft/show/105859512,11:00,16:44,338,"$389,555.00","$350,260.00"
EWR - MCO,52172581882,EWR-IAH-LAS 6,ERJ-175,https://www.airlines-manager.com/network/showline/40395708,https://www.airlines-manager.com/network/showflight/52172581882,https://www.airlines-manager.com/aircraft/show/105864236,13:00,18:44,112,"$170,716.00","$144,798.00"
EWR - MCO,52181070770,EWR-IAH-LAS 2,A321neo,https://www.airlines-manager.com/network/showline/40395708,https://www.airlines-manager.com/network/showflight/52181070770,https://www.airlines-manager.com/aircraft/show/105859511,18:30,0:14,338,"$389,555.00","$350,260.00"
EWR - MCO,52185045351,EWR-IAH-LAS 4,A321neo,https://www.airlines-manager.com/network/showline/40395708,https://www.airlines-manager.com/network/showflight/52185045351,https://www.airlines-manager.com/aircraft/show/105859513,19:30,1:14,338,"$389,555.00","$350,260.00"
EWR - MCO,52188655744,EWR-IAH-LAS 5,A321neo,https://www.airlines-manager.com/network/showline/40395708,https://www.airlines-manager.com/network/showflight/52188655744,https://www.airlines-manager.com/aircraft/show/105859514,22:45,4:29,335,"$387,503.00","$348,272.00"
EWR - MEM,52143769047,EWR-RNO-MEM 4,737-900ER,https://www.airlines-manager.com/network/showline/45056241,https://www.airlines-manager.com/network/showflight/52143769047,https://www.airlines-manager.com/aircraft/show/99920619,1:15,6:59,320,"$361,610.00","$324,552.00"
EWR - MEM,52143769048,EWR-RNO-MEM 3,737-900ER,https://www.airlines-manager.com/network/showline/45056241,https://www.airlines-manager.com/network/showflight/52143769048,https://www.airlines-manager.com/aircraft/show/99920620,3:45,9:29,320,"$361,610.00","$324,552.00"
EWR - MEM,52163458771,EWR-RNO-MEM 2,737-900ER,https://www.airlines-manager.com/network/showline/45056241,https://www.airlines-manager.com/network/showflight/52163458771,https://www.airlines-manager.com/aircraft/show/99920621,10:15,15:59,320,"$361,610.00","$324,552.00"
EWR - MEM,52185045362,EWR CARGO 2,737-700,https://www.airlines-manager.com/network/showline/45056241,https://www.airlines-manager.com/network/showflight/52185045362,https://www.airlines-manager.com/aircraft/show/107576645,19:30,1:14,0,"$96,225.00","$72,790.00"
EWR - MEM,52185045363,EWR-RNO-MEM 5 B,A319-100,https://www.airlines-manager.com/network/showline/45056241,https://www.airlines-manager.com/network/showflight/52185045363,https://www.airlines-manager.com/aircraft/show/100096560,20:15,1:59,198,"$274,216.00","$248,000.00"
EWR - MEM,52188655615,EWR-RNO-MEM 1,737-900ER,https://www.airlines-manager.com/network/showline/45056241,https://www.airlines-manager.com/network/showflight/52188655615,https://www.airlines-manager.com/aircraft/show/99920622,21:30,3:14,320,"$361,610.00","$324,552.00"
EWR - MEX,52143769084,EWR-DTW-YYZ 3,737-900ER,https://www.airlines-manager.com/network/showline/42538129,https://www.airlines-manager.com/network/showflight/52143769084,https://www.airlines-manager.com/aircraft/show/92003923,1:45,11:59,320,"$638,640.00","$575,040.00"
EWR - MEX,52163458749,EWR-DTW-YYZ 6 E,A319-100,https://www.airlines-manager.com/network/showline/42538129,https://www.airlines-manager.com/network/showflight/52163458749,https://www.airlines-manager.com/aircraft/show/104258433,10:00,20:14,216,"$486,277.00","$439,772.00"
EWR - MEX,52167946313,EWR-DTW-YYZ 4,737-900ER,https://www.airlines-manager.com/network/showline/42538129,https://www.airlines-manager.com/network/showflight/52167946313,https://www.airlines-manager.com/aircraft/show/92003922,12:00,22:14,320,"$638,640.00","$575,040.00"
EWR - MEX,52181070673,EWR-DTW-YYZ 5,737-900ER,https://www.airlines-manager.com/network/showline/42538129,https://www.airlines-manager.com/network/showflight/52181070673,https://www.airlines-manager.com/aircraft/show/92003921,17:15,3:29,320,"$638,640.00","$575,040.00"
EWR - MEX,52181070674,EWR-DTW-YYZ 2,737-900ER,https://www.airlines-manager.com/network/showline/42538129,https://www.airlines-manager.com/network/showflight/52181070674,https://www.airlines-manager.com/aircraft/show/92003924,17:30,3:44,320,"$638,640.00","$575,040.00"
EWR - MEX,52185045431,EWR-DTW-YYZ 6 E,A319-100,https://www.airlines-manager.com/network/showline/42538129,https://www.airlines-manager.com/network/showflight/52185045431,https://www.airlines-manager.com/aircraft/show/104258433,20:15,6:29,216,"$486,277.00","$439,772.00"
EWR - MEX,52191270975,EWR-DTW-YYZ 1,737-900ER,https://www.airlines-manager.com/network/showline/42538129,https://www.airlines-manager.com/network/showflight/52191270975,https://www.airlines-manager.com/aircraft/show/92003925,23:45,9:59,298,"$600,524.00","$538,462.00"
EWR - MHT,52143769244,EWR-FCA-CID 1,A321-200,https://www.airlines-manager.com/network/showline/49372865,https://www.airlines-manager.com/network/showflight/52143769244,https://www.airlines-manager.com/aircraft/show/116042866,3:45,6:44,310,"$126,397.00","$107,260.00"
EWR - MHT,52163458669,EWR-FCA-CID 4,A321-200,https://www.airlines-manager.com/network/showline/49372865,https://www.airlines-manager.com/network/showflight/52163458669,https://www.airlines-manager.com/aircraft/show/116042863,9:00,11:59,310,"$126,397.00","$107,260.00"
EWR - MHT,52163458670,EWR-FCA-CID 3,A321-200,https://www.airlines-manager.com/network/showline/49372865,https://www.airlines-manager.com/network/showflight/52163458670,https://www.airlines-manager.com/aircraft/show/116042864,10:00,12:59,310,"$126,397.00","$107,260.00"
EWR - MHT,52167946186,EWR-STL-PIT 5,ERJ-175,https://www.airlines-manager.com/network/showline/49372865,https://www.airlines-manager.com/network/showflight/52167946186,https://www.airlines-manager.com/aircraft/show/98887257,11:00,13:59,112,"$56,334.00","$44,487.00"
EWR - MHT,52176667087,EWR-FCA-CID 2,A321-200,https://www.airlines-manager.com/network/showline/49372865,https://www.airlines-manager.com/network/showflight/52176667087,https://www.airlines-manager.com/aircraft/show/116042865,15:45,18:44,310,"$126,397.00","$107,260.00"
EWR - MIA,52143769152,EWR-MIA-ORD 5,A321neo,https://www.airlines-manager.com/network/showline/39256188,https://www.airlines-manager.com/network/showflight/52143769152,https://www.airlines-manager.com/aircraft/show/113251309,2:30,8:44,338,"$429,739.00","$386,653.00"
EWR - MIA,52143769153,EWR-MIA-ORD 1,A321neo,https://www.airlines-manager.com/network/showline/39256188,https://www.airlines-manager.com/network/showflight/52143769153,https://www.airlines-manager.com/aircraft/show/113251305,4:00,10:14,338,"$429,739.00","$386,653.00"
EWR - MIA,52163458729,EWR-MIA-ORD 2,A321neo,https://www.airlines-manager.com/network/showline/39256188,https://www.airlines-manager.com/network/showflight/52163458729,https://www.airlines-manager.com/aircraft/show/113251306,10:00,16:14,338,"$429,739.00","$386,653.00"
EWR - MIA,52167946196,EWR-MIA-ORD 4,A321neo,https://www.airlines-manager.com/network/showline/39256188,https://www.airlines-manager.com/network/showflight/52167946196,https://www.airlines-manager.com/aircraft/show/113251308,11:00,17:14,338,"$429,739.00","$386,653.00"
EWR - MIA,52176667163,EWR-MIA-ORD 3,A321neo,https://www.airlines-manager.com/network/showline/39256188,https://www.airlines-manager.com/network/showflight/52176667163,https://www.airlines-manager.com/aircraft/show/113251307,16:30,22:44,338,"$429,739.00","$386,653.00"
EWR - MKE,52143769212,EWR-BNA-JAX 5,ERJ-175,https://www.airlines-manager.com/network/showline/45849213,https://www.airlines-manager.com/network/showflight/52143769212,https://www.airlines-manager.com/aircraft/show/96421247,3:15,8:14,112,"$149,842.00","$131,850.00"
EWR - MKE,52157350201,EWR-BNA-JAX 4,A321-200,https://www.airlines-manager.com/network/showline/45849213,https://www.airlines-manager.com/network/showflight/52157350201,https://www.airlines-manager.com/aircraft/show/104610407,7:30,12:29,310,"$315,444.00","$287,559.00"
EWR - MKE,52172582009,EWR-BNA-JAX 3,A321-200,https://www.airlines-manager.com/network/showline/45849213,https://www.airlines-manager.com/network/showflight/52172582009,https://www.airlines-manager.com/aircraft/show/104610408,14:00,18:59,310,"$315,444.00","$287,559.00"
EWR - MKE,52185045328,EWR-BNA-JAX 2,A321-200,https://www.airlines-manager.com/network/showline/45849213,https://www.airlines-manager.com/network/showflight/52185045328,https://www.airlines-manager.com/aircraft/show/104610409,19:15,0:14,310,"$315,444.00","$287,559.00"
EWR - MKE,52191270938,EWR-BNA-JAX 1,A321-200,https://www.airlines-manager.com/network/showline/45849213,https://www.airlines-manager.com/network/showflight/52191270938,https://www.airlines-manager.com/aircraft/show/104610410,23:15,4:14,310,"$315,444.00","$287,559.00"
EWR - MSN,52143769154,EWR-RAP-BHM 4,A321-200,https://www.airlines-manager.com/network/showline/49372678,https://www.airlines-manager.com/network/showflight/52143769154,https://www.airlines-manager.com/aircraft/show/116042859,2:30,7:44,310,"$330,285.00","$303,041.00"
EWR - MSN,52163458653,EWR-RAP-BHM 3,A321-200,https://www.airlines-manager.com/network/showline/49372678,https://www.airlines-manager.com/network/showflight/52163458653,https://www.airlines-manager.com/aircraft/show/116042860,8:45,13:59,310,"$330,285.00","$303,041.00"
EWR - MSN,52163458654,EWR-RAP-BHM 2,A321-200,https://www.airlines-manager.com/network/showline/49372678,https://www.airlines-manager.com/network/showflight/52163458654,https://www.airlines-manager.com/aircraft/show/116042861,10:00,15:14,310,"$330,285.00","$303,041.00"
EWR - MSN,52188655562,EWR-RAP-BHM 1,A321-200,https://www.airlines-manager.com/network/showline/49372678,https://www.airlines-manager.com/network/showflight/52188655562,https://www.airlines-manager.com/aircraft/show/116042862,21:00,2:14,310,"$330,285.00","$303,041.00"
EWR - MSO,52143768990,EWR-OKC-FSD 1,A321-200,https://www.airlines-manager.com/network/showline/46719716,https://www.airlines-manager.com/network/showflight/52143768990,https://www.airlines-manager.com/aircraft/show/107161238,1:00,10:59,310,"$615,568.00","$570,621.00"
EWR - MSO,52167946222,EWR-OKC-FSD 3,A321-200,https://www.airlines-manager.com/network/showline/46719716,https://www.airlines-manager.com/network/showflight/52167946222,https://www.airlines-manager.com/aircraft/show/107161240,11:00,20:59,310,"$615,568.00","$570,621.00"
EWR - MSO,52176667103,EWR-OKC-FSD 5,ERJ-175,https://www.airlines-manager.com/network/showline/46719716,https://www.airlines-manager.com/network/showflight/52176667103,https://www.airlines-manager.com/aircraft/show/86782214,15:45,1:44,112,"$289,117.00","$258,634.00"
EWR - MSO,52181070704,EWR-OKC-FSD 2,A321-200,https://www.airlines-manager.com/network/showline/46719716,https://www.airlines-manager.com/network/showflight/52181070704,https://www.airlines-manager.com/aircraft/show/107161239,17:45,3:44,310,"$615,568.00","$570,621.00"
EWR - MSO,52188655691,EWR-OKC-FSD 4,A321-200,https://www.airlines-manager.com/network/showline/46719716,https://www.airlines-manager.com/network/showflight/52188655691,https://www.airlines-manager.com/aircraft/show/107161241,22:00,7:59,310,"$615,568.00","$570,621.00"
EWR - MSP,52157349992,EWR-DEN-SLC 3,A321-200,https://www.airlines-manager.com/network/showline/40395806,https://www.airlines-manager.com/network/showflight/52157349992,https://www.airlines-manager.com/aircraft/show/86270783,5:00,10:59,310,"$374,508.00","$335,273.00"
EWR - MSP,52163458761,EWR-DEN-SLC 5,A321-200,https://www.airlines-manager.com/network/showline/40395806,https://www.airlines-manager.com/network/showflight/52163458761,https://www.airlines-manager.com/aircraft/show/90452833,10:00,15:59,310,"$374,508.00","$335,273.00"
EWR - MSP,52167946243,EWR-DEN-SLC 6 B,A319-100,https://www.airlines-manager.com/network/showline/40395806,https://www.airlines-manager.com/network/showflight/52167946243,https://www.airlines-manager.com/aircraft/show/105223076,11:00,16:59,198,"$283,860.00","$252,429.00"
EWR - MSP,52181070755,EWR-DEN-SLC 2,A321-200,https://www.airlines-manager.com/network/showline/40395806,https://www.airlines-manager.com/network/showflight/52181070755,https://www.airlines-manager.com/aircraft/show/87153196,18:15,0:14,310,"$374,508.00","$335,273.00"
EWR - MSP,52185045380,EWR-DEN-SLC 1,A321-200,https://www.airlines-manager.com/network/showline/40395806,https://www.airlines-manager.com/network/showflight/52185045380,https://www.airlines-manager.com/aircraft/show/86270785,19:45,1:44,310,"$374,508.00","$335,273.00"
EWR - MSP,52185045381,EWR-DEN-SLC 4,A321-200,https://www.airlines-manager.com/network/showline/40395806,https://www.airlines-manager.com/network/showflight/52185045381,https://www.airlines-manager.com/aircraft/show/90452835,20:45,2:44,310,"$374,508.00","$335,273.00"
EWR - MSY,52143769217,EWR-ABQ-AUS 1,A321-200,https://www.airlines-manager.com/network/showline/43857268,https://www.airlines-manager.com/network/showflight/52143769217,https://www.airlines-manager.com/aircraft/show/90717079,3:15,9:59,310,"$414,442.00","$379,691.00"
EWR - MSY,52163458766,EWR-ABQ-AUS 3,A321-200,https://www.airlines-manager.com/network/showline/43857268,https://www.airlines-manager.com/network/showflight/52163458766,https://www.airlines-manager.com/aircraft/show/90717077,10:00,16:44,310,"$414,442.00","$379,691.00"
EWR - MSY,52167946263,EWR-ABQ-AUS 4,A321-200,https://www.airlines-manager.com/network/showline/43857268,https://www.airlines-manager.com/network/showflight/52167946263,https://www.airlines-manager.com/aircraft/show/90717076,11:00,17:44,310,"$414,442.00","$379,691.00"
EWR - MSY,52181070729,EWR-ABQ-AUS 2,A321-200,https://www.airlines-manager.com/network/showline/43857268,https://www.airlines-manager.com/network/showflight/52181070729,https://www.airlines-manager.com/aircraft/show/90717078,18:00,0:44,310,"$414,442.00","$379,691.00"
EWR - MSY,52185045402,EWR-ABQ-AUS 5,A321-200,https://www.airlines-manager.com/network/showline/43857268,https://www.airlines-manager.com/network/showflight/52185045402,https://www.airlines-manager.com/aircraft/show/95950199,20:00,2:44,310,"$414,442.00","$379,691.00"
EWR - MUC,52143768851,EWR 56C-7 F,787-10,https://www.airlines-manager.com/network/showline/46569718,https://www.airlines-manager.com/network/showflight/52143768851,https://www.airlines-manager.com/aircraft/show/106721562,0:00,16:29,598,"$2,039,119.00","$1,889,048.00"
EWR - MUC,52167946207,EWR 56C-1 F,787-10,https://www.airlines-manager.com/network/showline/46569718,https://www.airlines-manager.com/network/showflight/52167946207,https://www.airlines-manager.com/aircraft/show/106721556,11:00,3:29,598,"$2,039,119.00","$1,889,048.00"
EWR - MUC,52181070766,EWR 56C-7 F,787-10,https://www.airlines-manager.com/network/showline/46569718,https://www.airlines-manager.com/network/showflight/52181070766,https://www.airlines-manager.com/aircraft/show/106721562,18:30,10:59,598,"$2,039,119.00","$1,889,048.00"
EWR - NAS,52157350025,EWR-TUS-TPA 1,A321-200,https://www.airlines-manager.com/network/showline/44584392,https://www.airlines-manager.com/network/showflight/52157350025,https://www.airlines-manager.com/aircraft/show/98379319,5:15,11:44,310,"$395,325.00","$362,324.00"
EWR - NAS,52172581915,EWR-TUS-TPA 3,A321-200,https://www.airlines-manager.com/network/showline/44584392,https://www.airlines-manager.com/network/showflight/52172581915,https://www.airlines-manager.com/aircraft/show/98379317,13:00,19:29,310,"$395,325.00","$362,324.00"
EWR - NAS,52181070740,EWR-TUS-TPA 4,A321-200,https://www.airlines-manager.com/network/showline/44584392,https://www.airlines-manager.com/network/showflight/52181070740,https://www.airlines-manager.com/aircraft/show/98379316,18:00,0:29,310,"$395,325.00","$362,324.00"
EWR - NAS,52185045301,EWR-TUS-TPA 2,A321-200,https://www.airlines-manager.com/network/showline/44584392,https://www.airlines-manager.com/network/showflight/52185045301,https://www.airlines-manager.com/aircraft/show/98379318,19:00,1:29,310,"$395,325.00","$362,324.00"
EWR - NAS,52188655538,EWR-TUS-TPA 5,A321-200,https://www.airlines-manager.com/network/showline/44584392,https://www.airlines-manager.com/network/showflight/52188655538,https://www.airlines-manager.com/aircraft/show/98379315,21:00,3:29,289,"$371,816.00","$339,605.00"
EWR - NRT,52143768868,EWR 56A-7 B1,777-300,https://www.airlines-manager.com/network/showline/46601007,https://www.airlines-manager.com/network/showflight/52143768868,https://www.airlines-manager.com/aircraft/show/106813013,0:00,2:14,748,"$3,981,529.00","$3,582,827.00"
EWR - NRT,52163458779,EWR 56A-3 B1,777-300,https://www.airlines-manager.com/network/showline/46601007,https://www.airlines-manager.com/network/showflight/52163458779,https://www.airlines-manager.com/aircraft/show/106813009,10:15,12:29,748,"$3,955,749.00","$3,566,130.00"
EWR - NRT,52181070606,EWR 56A-1 B1,777-300,https://www.airlines-manager.com/network/showline/46601007,https://www.airlines-manager.com/network/showflight/52181070606,https://www.airlines-manager.com/aircraft/show/106813007,16:45,18:59,746,"$3,546,674.00","$3,262,133.00"
EWR - OAK,52143769017,EWR-OAK-SJC 5,A321-200,https://www.airlines-manager.com/network/showline/39907187,https://www.airlines-manager.com/network/showflight/52143769017,https://www.airlines-manager.com/aircraft/show/104717239,1:00,12:59,310,"$735,944.00","$680,370.00"
EWR - OAK,52163458727,EWR-OAK-SJC 1,A321-200,https://www.airlines-manager.com/network/showline/39907187,https://www.airlines-manager.com/network/showflight/52163458727,https://www.airlines-manager.com/aircraft/show/104717243,10:00,21:59,310,"$735,944.00","$680,370.00"
EWR - OAK,52167946320,EWR-OAK-SJC 2,A321-200,https://www.airlines-manager.com/network/showline/39907187,https://www.airlines-manager.com/network/showflight/52167946320,https://www.airlines-manager.com/aircraft/show/104717242,12:00,23:59,310,"$735,944.00","$680,370.00"
EWR - OAK,52172582008,EWR-OAK-SJC 3,A321-200,https://www.airlines-manager.com/network/showline/39907187,https://www.airlines-manager.com/network/showflight/52172582008,https://www.airlines-manager.com/aircraft/show/104717241,14:00,1:59,310,"$735,944.00","$680,370.00"
EWR - OAK,52188655728,EWR-OAK-SJC 4,A321-200,https://www.airlines-manager.com/network/showline/39907187,https://www.airlines-manager.com/network/showflight/52188655728,https://www.airlines-manager.com/aircraft/show/104717240,22:30,10:29,309,"$734,500.00","$678,996.00"
EWR - OKC,52143769103,EWR-OKC-FSD 5,ERJ-175,https://www.airlines-manager.com/network/showline/46719742,https://www.airlines-manager.com/network/showflight/52143769103,https://www.airlines-manager.com/aircraft/show/86782214,1:45,8:59,112,"$217,529.00","$193,783.00"
EWR - OKC,52143769104,EWR-OKC-FSD 2,A321-200,https://www.airlines-manager.com/network/showline/46719742,https://www.airlines-manager.com/network/showflight/52143769104,https://www.airlines-manager.com/aircraft/show/107161239,3:45,10:59,310,"$460,889.00","$425,160.00"
EWR - OKC,52163458596,EWR-OKC-FSD 4,A321-200,https://www.airlines-manager.com/network/showline/46719742,https://www.airlines-manager.com/network/showflight/52163458596,https://www.airlines-manager.com/aircraft/show/107161241,8:00,15:14,310,"$460,889.00","$425,160.00"
EWR - OKC,52167946217,EWR-OKC-FSD 1,A321-200,https://www.airlines-manager.com/network/showline/46719742,https://www.airlines-manager.com/network/showflight/52167946217,https://www.airlines-manager.com/aircraft/show/107161238,11:00,18:14,310,"$460,889.00","$425,160.00"
EWR - OKC,52188655555,EWR-OKC-FSD 3,A321-200,https://www.airlines-manager.com/network/showline/46719742,https://www.airlines-manager.com/network/showflight/52188655555,https://www.airlines-manager.com/aircraft/show/107161240,21:00,4:14,310,"$460,889.00","$425,160.00"
EWR - OMA,52143769156,EWR-BOI-PBI 1,A321-200,https://www.airlines-manager.com/network/showline/45805662,https://www.airlines-manager.com/network/showflight/52143769156,https://www.airlines-manager.com/aircraft/show/104418460,2:30,8:59,310,"$401,779.00","$368,804.00"
EWR - OMA,52157350209,EWR-BOI-PBI 4,A321-200,https://www.airlines-manager.com/network/showline/45805662,https://www.airlines-manager.com/network/showflight/52157350209,https://www.airlines-manager.com/aircraft/show/104418463,7:30,13:59,310,"$401,779.00","$368,804.00"
EWR - OMA,52163458747,EWR-BOI-PBI 3,A321-200,https://www.airlines-manager.com/network/showline/45805662,https://www.airlines-manager.com/network/showflight/52163458747,https://www.airlines-manager.com/aircraft/show/104418462,10:00,16:29,310,"$401,779.00","$368,804.00"
EWR - OMA,52181070630,EWR-BOI-PBI 2,A321-200,https://www.airlines-manager.com/network/showline/45805662,https://www.airlines-manager.com/network/showflight/52181070630,https://www.airlines-manager.com/aircraft/show/104418461,17:00,23:29,310,"$401,779.00","$368,804.00"
EWR - OMA,52185045307,EWR-BOI-PBI 5 B,A319-100,https://www.airlines-manager.com/network/showline/45805662,https://www.airlines-manager.com/network/showflight/52185045307,https://www.airlines-manager.com/aircraft/show/110582846,19:00,1:29,193,"$300,131.00","$273,880.00"
EWR - ONT,52143768870,EWR-SMF-ONT 4,737-900ER,https://www.airlines-manager.com/network/showline/48619155,https://www.airlines-manager.com/network/showflight/52143768870,https://www.airlines-manager.com/aircraft/show/94889153,0:00,11:29,320,"$702,968.00","$644,264.00"
EWR - ONT,52143768871,EWR-SMF-ONT 5,737-900ER,https://www.airlines-manager.com/network/showline/48619155,https://www.airlines-manager.com/network/showflight/52143768871,https://www.airlines-manager.com/aircraft/show/94889154,2:00,13:29,320,"$702,968.00","$644,264.00"
EWR - ONT,52167946292,EWR-SMF-ONT 1,737-900ER,https://www.airlines-manager.com/network/showline/48619155,https://www.airlines-manager.com/network/showflight/52167946292,https://www.airlines-manager.com/aircraft/show/94889150,11:45,23:14,320,"$702,968.00","$644,264.00"
EWR - ONT,52172581938,EWR-SMF-ONT 2,737-900ER,https://www.airlines-manager.com/network/showline/48619155,https://www.airlines-manager.com/network/showflight/52172581938,https://www.airlines-manager.com/aircraft/show/94889151,13:15,0:44,320,"$702,968.00","$644,264.00"
EWR - ONT,52176666984,EWR-SMF-ONT 3,737-900ER,https://www.airlines-manager.com/network/showline/48619155,https://www.airlines-manager.com/network/showflight/52176666984,https://www.airlines-manager.com/aircraft/show/94889152,14:45,2:14,298,"$673,078.00","$615,797.00"
EWR - ORD,52157350008,EWR-MIA-ORD 2,A321neo,https://www.airlines-manager.com/network/showline/39259370,https://www.airlines-manager.com/network/showflight/52157350008,https://www.airlines-manager.com/aircraft/show/113251306,5:00,9:59,338,"$340,392.00","$293,357.00"
EWR - ORD,52163458776,EWR-MIA-ORD 1,A321neo,https://www.airlines-manager.com/network/showline/39259370,https://www.airlines-manager.com/network/showflight/52163458776,https://www.airlines-manager.com/aircraft/show/113251305,10:15,15:14,338,"$340,392.00","$293,357.00"
EWR - ORD,52167946291,EWR-MIA-ORD 3,A321neo,https://www.airlines-manager.com/network/showline/39259370,https://www.airlines-manager.com/network/showflight/52167946291,https://www.airlines-manager.com/aircraft/show/113251307,11:30,16:29,338,"$340,392.00","$293,357.00"
EWR - ORD,52181070664,EWR-MIA-ORD 4,A321neo,https://www.airlines-manager.com/network/showline/39259370,https://www.airlines-manager.com/network/showflight/52181070664,https://www.airlines-manager.com/aircraft/show/113251308,17:15,22:14,338,"$340,392.00","$293,357.00"
EWR - ORD,52188655609,EWR-MIA-ORD 5,A321neo,https://www.airlines-manager.com/network/showline/39259370,https://www.airlines-manager.com/network/showflight/52188655609,https://www.airlines-manager.com/aircraft/show/113251309,21:30,2:29,338,"$340,392.00","$293,357.00"
EWR - ORF,52143769141,EWR-IND-RDU 1,737-900ER,https://www.airlines-manager.com/network/showline/46250219,https://www.airlines-manager.com/network/showflight/52143769141,https://www.airlines-manager.com/aircraft/show/88494375,2:15,5:29,320,"$153,141.00","$129,591.00"
EWR - ORF,52167946225,EWR-IND-RDU 5,ERJ-175,https://www.airlines-manager.com/network/showline/46250219,https://www.airlines-manager.com/network/showflight/52167946225,https://www.airlines-manager.com/aircraft/show/106104450,11:00,14:14,112,"$70,253.00","$57,651.00"
EWR - ORF,52172582027,EWR-IND-RDU 4,737-900ER,https://www.airlines-manager.com/network/showline/46250219,https://www.airlines-manager.com/network/showflight/52172582027,https://www.airlines-manager.com/aircraft/show/105731236,14:15,17:29,320,"$153,141.00","$129,591.00"
EWR - ORF,52181070727,EWR-IND-RDU 3,737-900ER,https://www.airlines-manager.com/network/showline/46250219,https://www.airlines-manager.com/network/showflight/52181070727,https://www.airlines-manager.com/aircraft/show/88494376,18:00,21:14,320,"$153,141.00","$129,591.00"
EWR - ORF,52188655670,EWR-IND-RDU 2,737-900ER,https://www.airlines-manager.com/network/showline/46250219,https://www.airlines-manager.com/network/showflight/52188655670,https://www.airlines-manager.com/aircraft/show/88494377,21:45,0:59,320,"$153,141.00","$129,591.00"
EWR - PBI,52143769063,EWR-BOI-PBI 4,A321-200,https://www.airlines-manager.com/network/showline/45805644,https://www.airlines-manager.com/network/showflight/52143769063,https://www.airlines-manager.com/aircraft/show/104418463,1:30,7:29,310,"$379,298.00","$346,857.00"
EWR - PBI,52143769064,EWR-BOI-PBI 3,A321-200,https://www.airlines-manager.com/network/showline/45805644,https://www.airlines-manager.com/network/showflight/52143769064,https://www.airlines-manager.com/aircraft/show/104418462,3:00,8:59,310,"$379,298.00","$346,857.00"
EWR - PBI,52167946254,EWR-BOI-PBI 2,A321-200,https://www.airlines-manager.com/network/showline/45805644,https://www.airlines-manager.com/network/showflight/52167946254,https://www.airlines-manager.com/aircraft/show/104418461,11:00,16:59,310,"$379,298.00","$346,857.00"
EWR - PBI,52172581861,EWR-BOI-PBI 5 B,A319-100,https://www.airlines-manager.com/network/showline/45805644,https://www.airlines-manager.com/network/showflight/52172581861,https://www.airlines-manager.com/aircraft/show/110582846,13:00,18:59,198,"$287,127.00","$261,131.00"
EWR - PBI,52185045445,EWR-BOI-PBI 1,A321-200,https://www.airlines-manager.com/network/showline/45805644,https://www.airlines-manager.com/network/showflight/52185045445,https://www.airlines-manager.com/aircraft/show/104418460,20:30,2:29,310,"$379,298.00","$346,857.00"
EWR - PDX,52143768862,EWR-PHX-PDX 3,A321neo,https://www.airlines-manager.com/network/showline/39259269,https://www.airlines-manager.com/network/showflight/52143768862,https://www.airlines-manager.com/aircraft/show/113595213,0:00,11:29,338,"$757,644.00","$704,937.00"
EWR - PDX,52143768863,EWR-PHX-PDX 4,A321neo,https://www.airlines-manager.com/network/showline/39259269,https://www.airlines-manager.com/network/showflight/52143768863,https://www.airlines-manager.com/aircraft/show/113595214,2:00,13:29,338,"$757,644.00","$704,937.00"
EWR - PDX,52157349996,EWR-PHX-PDX 5,A321neo,https://www.airlines-manager.com/network/showline/39259269,https://www.airlines-manager.com/network/showflight/52157349996,https://www.airlines-manager.com/aircraft/show/113595215,5:00,16:29,338,"$757,644.00","$704,937.00"
EWR - PDX,52157349997,EWR-PHX-PDX 6 B,A319-100,https://www.airlines-manager.com/network/showline/39259269,https://www.airlines-manager.com/network/showflight/52157349997,https://www.airlines-manager.com/aircraft/show/99219630,6:30,17:59,198,"$526,353.00","$481,656.00"
EWR - PDX,52163458774,EWR-PHX-PDX 1,A321neo,https://www.airlines-manager.com/network/showline/39259269,https://www.airlines-manager.com/network/showflight/52163458774,https://www.airlines-manager.com/aircraft/show/113595211,10:15,21:44,338,"$757,644.00","$704,937.00"
EWR - PDX,52167946349,EWR-PHX-PDX 2,A321neo,https://www.airlines-manager.com/network/showline/39259269,https://www.airlines-manager.com/network/showflight/52167946349,https://www.airlines-manager.com/aircraft/show/113595212,12:15,23:44,305,"$712,449.00","$661,569.00"
EWR - PHX,52143768864,EWR-PHX-PDX 1,A321neo,https://www.airlines-manager.com/network/showline/39338280,https://www.airlines-manager.com/network/showflight/52143768864,https://www.airlines-manager.com/aircraft/show/113595211,0:00,10:14,338,"$703,984.00","$646,614.00"
EWR - PHX,52143768865,EWR-PHX-PDX 2,A321neo,https://www.airlines-manager.com/network/showline/39338280,https://www.airlines-manager.com/network/showflight/52143768865,https://www.airlines-manager.com/aircraft/show/113595212,2:00,12:14,338,"$703,984.00","$646,614.00"
EWR - PHX,52167946290,EWR-PHX-PDX 3,A321neo,https://www.airlines-manager.com/network/showline/39338280,https://www.airlines-manager.com/network/showflight/52167946290,https://www.airlines-manager.com/aircraft/show/113595213,11:30,21:44,338,"$703,984.00","$646,614.00"
EWR - PHX,52172581950,EWR-PHX-PDX 4,A321neo,https://www.airlines-manager.com/network/showline/39338280,https://www.airlines-manager.com/network/showflight/52172581950,https://www.airlines-manager.com/aircraft/show/113595214,13:30,23:44,338,"$703,984.00","$646,614.00"
EWR - PHX,52176667165,EWR-PHX-PDX 5,A321neo,https://www.airlines-manager.com/network/showline/39338280,https://www.airlines-manager.com/network/showflight/52176667165,https://www.airlines-manager.com/aircraft/show/113595215,16:30,2:44,338,"$703,984.00","$646,614.00"
EWR - PHX,52181070723,EWR-PHX-PDX 6 B,A319-100,https://www.airlines-manager.com/network/showline/39338280,https://www.airlines-manager.com/network/showflight/52181070723,https://www.airlines-manager.com/aircraft/show/99219630,18:00,4:29,198,"$489,590.00","$441,475.00"
EWR - PIT,52143769269,EWR-STL-PIT 5,ERJ-175,https://www.airlines-manager.com/network/showline/44778351,https://www.airlines-manager.com/network/showflight/52143769269,https://www.airlines-manager.com/aircraft/show/98887257,4:15,7:29,112,"$77,390.00","$63,030.00"
EWR - PIT,52157350117,EWR-STL-PIT 3,A321neo,https://www.airlines-manager.com/network/showline/44778351,https://www.airlines-manager.com/network/showflight/52157350117,https://www.airlines-manager.com/aircraft/show/115400546,6:30,9:44,338,"$182,175.00","$159,563.00"
EWR - PIT,52163458740,EWR-STL-PIT 2,A321neo,https://www.airlines-manager.com/network/showline/44778351,https://www.airlines-manager.com/network/showflight/52163458740,https://www.airlines-manager.com/aircraft/show/115400547,10:00,13:14,338,"$182,175.00","$159,563.00"
EWR - PIT,52172581847,EWR-STL-PIT 4,A321neo,https://www.airlines-manager.com/network/showline/44778351,https://www.airlines-manager.com/network/showflight/52172581847,https://www.airlines-manager.com/aircraft/show/115400545,13:00,16:14,338,"$182,175.00","$159,563.00"
EWR - PIT,52176667082,EWR-STL-PIT 1,A321neo,https://www.airlines-manager.com/network/showline/44778351,https://www.airlines-manager.com/network/showflight/52176667082,https://www.airlines-manager.com/aircraft/show/115400548,15:30,18:44,338,"$182,175.00","$159,563.00"
EWR - PIT,52185045350,EWR-STL-PIT 5,ERJ-175,https://www.airlines-manager.com/network/showline/44778351,https://www.airlines-manager.com/network/showflight/52185045350,https://www.airlines-manager.com/aircraft/show/98887257,19:30,22:44,112,"$77,390.00","$63,030.00"
EWR - PVD,52143769059,EWR-TUL-DSM 4,A321-200,https://www.airlines-manager.com/network/showline/47540547,https://www.airlines-manager.com/network/showflight/52143769059,https://www.airlines-manager.com/aircraft/show/110044466,1:30,4:14,310,"$98,896.00","$81,261.00"
EWR - PVD,52163458682,EWR-TUL-DSM 3,A321-200,https://www.airlines-manager.com/network/showline/47540547,https://www.airlines-manager.com/network/showflight/52163458682,https://www.airlines-manager.com/aircraft/show/110044465,9:15,11:59,310,"$98,896.00","$81,261.00"
EWR - PVD,52167946205,EWR-TUL-DSM 2,A321-200,https://www.airlines-manager.com/network/showline/47540547,https://www.airlines-manager.com/network/showflight/52167946205,https://www.airlines-manager.com/aircraft/show/110044464,11:00,13:44,310,"$98,896.00","$81,261.00"
EWR - PVD,52185045372,EWR-TUL-DSM 1,A321-200,https://www.airlines-manager.com/network/showline/47540547,https://www.airlines-manager.com/network/showflight/52185045372,https://www.airlines-manager.com/aircraft/show/110044463,19:45,22:29,310,"$98,896.00","$81,261.00"
EWR - PVD,52191270942,EWR-TUL-DSM 5,ERJ-175,https://www.airlines-manager.com/network/showline/47540547,https://www.airlines-manager.com/network/showflight/52191270942,https://www.airlines-manager.com/aircraft/show/110113039,23:15,1:59,112,"$42,444.00","$31,586.00"
EWR - PWM,52143769283,EWR-TUL-DSM 1,A321-200,https://www.airlines-manager.com/network/showline/47540554,https://www.airlines-manager.com/network/showflight/52143769283,https://www.airlines-manager.com/aircraft/show/110044463,4:30,7:44,310,"$154,002.00","$134,952.00"
EWR - PWM,52163458645,EWR-TUL-DSM 5,ERJ-175,https://www.airlines-manager.com/network/showline/47540554,https://www.airlines-manager.com/network/showflight/52163458645,https://www.airlines-manager.com/aircraft/show/110113039,8:45,11:59,112,"$69,981.00","$58,055.00"
EWR - PWM,52167946206,EWR-TUL-DSM 4,A321-200,https://www.airlines-manager.com/network/showline/47540554,https://www.airlines-manager.com/network/showflight/52167946206,https://www.airlines-manager.com/aircraft/show/110044466,11:00,14:14,310,"$154,002.00","$134,952.00"
EWR - PWM,52181070748,EWR-TUL-DSM 3,A321-200,https://www.airlines-manager.com/network/showline/47540554,https://www.airlines-manager.com/network/showflight/52181070748,https://www.airlines-manager.com/aircraft/show/110044465,18:00,21:14,310,"$154,002.00","$134,952.00"
EWR - PWM,52185045373,EWR-TUL-DSM 2,A321-200,https://www.airlines-manager.com/network/showline/47540554,https://www.airlines-manager.com/network/showflight/52185045373,https://www.airlines-manager.com/aircraft/show/110044464,19:45,22:59,299,"$150,809.00","$131,844.00"
EWR - RAP,52143768836,EWR-RAP-BHM 3,A321-200,https://www.airlines-manager.com/network/showline/49372682,https://www.airlines-manager.com/network/showflight/52143768836,https://www.airlines-manager.com/aircraft/show/116042860,0:00,7:59,310,"$495,214.00","$458,198.00"
EWR - RAP,52143768837,EWR-RAP-BHM 2,A321-200,https://www.airlines-manager.com/network/showline/49372682,https://www.airlines-manager.com/network/showflight/52143768837,https://www.airlines-manager.com/aircraft/show/116042861,1:15,9:14,310,"$495,214.00","$458,198.00"
EWR - RAP,52172581845,EWR-RAP-BHM 1,A321-200,https://www.airlines-manager.com/network/showline/49372682,https://www.airlines-manager.com/network/showflight/52172581845,https://www.airlines-manager.com/aircraft/show/116042862,13:00,20:59,310,"$495,214.00","$458,198.00"
EWR - RAP,52181070764,EWR-RAP-BHM 4,A321-200,https://www.airlines-manager.com/network/showline/49372682,https://www.airlines-manager.com/network/showflight/52181070764,https://www.airlines-manager.com/aircraft/show/116042859,18:30,2:29,310,"$495,214.00","$458,198.00"
EWR - RDU,52143769036,EWR-IND-RDU 4,737-900ER,https://www.airlines-manager.com/network/showline/46258935,https://www.airlines-manager.com/network/showflight/52143769036,https://www.airlines-manager.com/aircraft/show/105731236,1:15,4:59,320,"$200,541.00","$172,573.00"
EWR - RDU,52157350013,EWR-IND-RDU 3,737-900ER,https://www.airlines-manager.com/network/showline/46258935,https://www.airlines-manager.com/network/showflight/52157350013,https://www.airlines-manager.com/aircraft/show/88494376,5:00,8:44,320,"$200,541.00","$172,573.00"
EWR - RDU,52167946246,EWR-IND-RDU 2,737-900ER,https://www.airlines-manager.com/network/showline/46258935,https://www.airlines-manager.com/network/showflight/52167946246,https://www.airlines-manager.com/aircraft/show/88494377,11:00,14:44,320,"$200,541.00","$172,573.00"
EWR - RDU,52176667079,EWR-IND-RDU 1,737-900ER,https://www.airlines-manager.com/network/showline/46258935,https://www.airlines-manager.com/network/showflight/52176667079,https://www.airlines-manager.com/aircraft/show/88494375,15:30,19:14,320,"$200,541.00","$172,573.00"
EWR - RDU,52188655679,EWR-IND-RDU 5,ERJ-175,https://www.airlines-manager.com/network/showline/46258935,https://www.airlines-manager.com/network/showflight/52188655679,https://www.airlines-manager.com/aircraft/show/106104450,22:00,1:44,112,"$92,998.00","$77,801.00"
EWR - RIC,52143769013,EWR-IND-RDU 2,737-900ER,https://www.airlines-manager.com/network/showline/46242111,https://www.airlines-manager.com/network/showflight/52143769013,https://www.airlines-manager.com/aircraft/show/88494377,1:00,4:14,320,"$138,998.00","$115,577.00"
EWR - RIC,52157350041,EWR-IND-RDU 1,737-900ER,https://www.airlines-manager.com/network/showline/46242111,https://www.airlines-manager.com/network/showflight/52157350041,https://www.airlines-manager.com/aircraft/show/88494375,5:30,8:44,320,"$138,998.00","$115,577.00"
EWR - RIC,52172582026,EWR-IND-RDU 5,ERJ-175,https://www.airlines-manager.com/network/showline/46242111,https://www.airlines-manager.com/network/showflight/52172582026,https://www.airlines-manager.com/aircraft/show/106104450,14:15,17:29,112,"$62,608.00","$50,091.00"
EWR - RIC,52181070678,EWR-IND-RDU 4,737-900ER,https://www.airlines-manager.com/network/showline/46242111,https://www.airlines-manager.com/network/showflight/52181070678,https://www.airlines-manager.com/aircraft/show/105731236,17:30,20:44,320,"$138,998.00","$115,577.00"
EWR - RIC,52188655592,EWR-IND-RDU 3,737-900ER,https://www.airlines-manager.com/network/showline/46242111,https://www.airlines-manager.com/network/showflight/52188655592,https://www.airlines-manager.com/aircraft/show/88494376,21:15,0:29,320,"$138,998.00","$115,577.00"
EWR - RNO,52143769115,EWR-RNO-MEM 5 B,A319-100,https://www.airlines-manager.com/network/showline/45056255,https://www.airlines-manager.com/network/showflight/52143769115,https://www.airlines-manager.com/aircraft/show/100096560,2:00,13:29,198,"$529,759.00","$487,972.00"
EWR - RNO,52163458770,EWR-RNO-MEM 1,737-900ER,https://www.airlines-manager.com/network/showline/45056255,https://www.airlines-manager.com/network/showflight/52163458770,https://www.airlines-manager.com/aircraft/show/99920622,10:15,21:29,320,"$702,697.00","$645,737.00"
EWR - RNO,52172582004,EWR-RNO-MEM 4,737-900ER,https://www.airlines-manager.com/network/showline/45056255,https://www.airlines-manager.com/network/showflight/52172582004,https://www.airlines-manager.com/aircraft/show/99920619,14:00,1:14,320,"$702,697.00","$645,737.00"
EWR - RNO,52176667161,EWR-RNO-MEM 3,737-900ER,https://www.airlines-manager.com/network/showline/45056255,https://www.airlines-manager.com/network/showflight/52176667161,https://www.airlines-manager.com/aircraft/show/99920620,16:30,3:44,320,"$702,697.00","$645,737.00"
EWR - RNO,52188655707,EWR-RNO-MEM 2,737-900ER,https://www.airlines-manager.com/network/showline/45056255,https://www.airlines-manager.com/network/showflight/52188655707,https://www.airlines-manager.com/aircraft/show/99920621,22:15,9:29,320,"$702,697.00","$645,737.00"
EWR - RSW,52143769213,EWR-RNO-MEM 1,737-900ER,https://www.airlines-manager.com/network/showline/45056246,https://www.airlines-manager.com/network/showflight/52143769213,https://www.airlines-manager.com/aircraft/show/99920622,3:15,9:29,320,"$388,840.00","$350,070.00"
EWR - RSW,52157350181,EWR-RNO-MEM 4,737-900ER,https://www.airlines-manager.com/network/showline/45056246,https://www.airlines-manager.com/network/showflight/52157350181,https://www.airlines-manager.com/aircraft/show/99920619,7:00,13:14,320,"$388,840.00","$350,070.00"
EWR - RSW,52163458773,EWR-RNO-MEM 3,737-900ER,https://www.airlines-manager.com/network/showline/45056246,https://www.airlines-manager.com/network/showflight/52163458773,https://www.airlines-manager.com/aircraft/show/99920620,10:15,16:29,320,"$388,840.00","$350,070.00"
EWR - RSW,52172582002,EWR-RNO-MEM 5 B,A319-100,https://www.airlines-manager.com/network/showline/45056246,https://www.airlines-manager.com/network/showflight/52172582002,https://www.airlines-manager.com/aircraft/show/100096560,14:00,20:14,198,"$294,823.00","$267,264.00"
EWR - RSW,52176667136,EWR-RNO-MEM 2,737-900ER,https://www.airlines-manager.com/network/showline/45056246,https://www.airlines-manager.com/network/showflight/52176667136,https://www.airlines-manager.com/aircraft/show/99920621,16:00,22:14,320,"$388,840.00","$350,070.00"
EWR - SAN,52143768844,EWR-MIA-ORD 3,A321neo,https://www.airlines-manager.com/network/showline/39319598,https://www.airlines-manager.com/network/showflight/52143768844,https://www.airlines-manager.com/aircraft/show/113251307,0:00,11:29,338,"$775,604.00","$723,308.00"
EWR - SAN,52163458741,EWR-MIA-ORD 5,A321neo,https://www.airlines-manager.com/network/showline/39319598,https://www.airlines-manager.com/network/showflight/52163458741,https://www.airlines-manager.com/aircraft/show/113251309,10:00,21:29,338,"$775,604.00","$723,308.00"
EWR - SAN,52176667068,EWR-MIA-ORD 1,A321neo,https://www.airlines-manager.com/network/showline/39319598,https://www.airlines-manager.com/network/showflight/52176667068,https://www.airlines-manager.com/aircraft/show/113251305,15:15,2:44,338,"$775,604.00","$723,308.00"
EWR - SAN,52176667069,EWR-MIA-ORD 2,A321neo,https://www.airlines-manager.com/network/showline/39319598,https://www.airlines-manager.com/network/showflight/52176667069,https://www.airlines-manager.com/aircraft/show/113251306,16:15,3:44,338,"$775,604.00","$723,308.00"
EWR - SAN,52188655709,EWR-MIA-ORD 4,A321neo,https://www.airlines-manager.com/network/showline/39319598,https://www.airlines-manager.com/network/showflight/52188655709,https://www.airlines-manager.com/aircraft/show/113251308,22:15,9:44,338,"$775,604.00","$723,308.00"
EWR - SAT,52143769108,EWR-ELP-SAT 3,737-900ER,https://www.airlines-manager.com/network/showline/45356722,https://www.airlines-manager.com/network/showflight/52143769108,https://www.airlines-manager.com/aircraft/show/103365576,1:45,9:59,320,"$517,618.00","$473,824.00"
EWR - SAT,52163458704,EWR-ELP-SAT 2,737-900ER,https://www.airlines-manager.com/network/showline/45356722,https://www.airlines-manager.com/network/showflight/52163458704,https://www.airlines-manager.com/aircraft/show/103365577,10:00,18:14,320,"$517,618.00","$473,824.00"
EWR - SAT,52167946298,EWR-ELP-SAT 5 B,A319-100,https://www.airlines-manager.com/network/showline/45356722,https://www.airlines-manager.com/network/showflight/52167946298,https://www.airlines-manager.com/aircraft/show/110582847,12:00,20:14,198,"$390,629.00","$358,925.00"
EWR - SAT,52185045357,EWR-ELP-SAT 1,737-900ER,https://www.airlines-manager.com/network/showline/45356722,https://www.airlines-manager.com/network/showflight/52185045357,https://www.airlines-manager.com/aircraft/show/103365578,19:30,3:44,320,"$517,618.00","$473,824.00"
EWR - SAT,52188655614,EWR-ELP-SAT 4,737-900ER,https://www.airlines-manager.com/network/showline/45356722,https://www.airlines-manager.com/network/showflight/52188655614,https://www.airlines-manager.com/aircraft/show/103365575,21:30,5:44,320,"$517,618.00","$473,824.00"
EWR - SAV,52143769279,EWR-COS-ICT 5,ERJ-175,https://www.airlines-manager.com/network/showline/47218122,https://www.airlines-manager.com/network/showflight/52143769279,https://www.airlines-manager.com/aircraft/show/108466265,4:30,9:29,112,"$146,280.00","$129,363.00"
EWR - SAV,52163458661,EWR-COS-ICT 3,A321-200,https://www.airlines-manager.com/network/showline/47218122,https://www.airlines-manager.com/network/showflight/52163458661,https://www.airlines-manager.com/aircraft/show/108834810,9:00,13:59,310,"$307,503.00","$281,368.00"
EWR - SAV,52167946208,EWR-COS-ICT 2,A321-200,https://www.airlines-manager.com/network/showline/47218122,https://www.airlines-manager.com/network/showflight/52167946208,https://www.airlines-manager.com/aircraft/show/108834809,11:00,15:59,310,"$307,503.00","$281,368.00"
EWR - SAV,52181070745,EWR-COS-ICT 1,A321-200,https://www.airlines-manager.com/network/showline/47218122,https://www.airlines-manager.com/network/showflight/52181070745,https://www.airlines-manager.com/aircraft/show/108834808,18:00,22:59,310,"$307,503.00","$281,368.00"
EWR - SAV,52185045413,EWR-COS-ICT 4,A321-200,https://www.airlines-manager.com/network/showline/47218122,https://www.airlines-manager.com/network/showflight/52185045413,https://www.airlines-manager.com/aircraft/show/108834811,20:00,0:59,258,"$277,362.00","$252,236.00"
EWR - SDF,52143769252,EWR-LIT-FAR 2,A321-200,https://www.airlines-manager.com/network/showline/48530172,https://www.airlines-manager.com/network/showflight/52143769252,https://www.airlines-manager.com/aircraft/show/86270787,4:00,8:29,310,"$295,400.00","$268,307.00"
EWR - SDF,52163458599,EWR-LIT-FAR 1,A321-200,https://www.airlines-manager.com/network/showline/48530172,https://www.airlines-manager.com/network/showflight/52163458599,https://www.airlines-manager.com/aircraft/show/90452834,8:15,12:44,310,"$295,400.00","$268,307.00"
EWR - SDF,52176667028,EWR-LIT-FAR 4,A321-200,https://www.airlines-manager.com/network/showline/48530172,https://www.airlines-manager.com/network/showflight/52176667028,https://www.airlines-manager.com/aircraft/show/86270784,15:00,19:29,310,"$295,400.00","$268,307.00"
EWR - SDF,52181070759,EWR-LIT-FAR 3,A321-200,https://www.airlines-manager.com/network/showline/48530172,https://www.airlines-manager.com/network/showflight/52181070759,https://www.airlines-manager.com/aircraft/show/86270786,18:15,22:44,310,"$295,400.00","$268,307.00"
EWR - SEA,52143769018,EWR-DFW-ATL 5,737-900ER,https://www.airlines-manager.com/network/showline/39259211,https://www.airlines-manager.com/network/showflight/52143769018,https://www.airlines-manager.com/aircraft/show/86238752,1:00,12:14,320,"$709,690.00","$640,621.00"
EWR - SEA,52143769019,EWR-DFW-ATL 3,737-900ER,https://www.airlines-manager.com/network/showline/39259211,https://www.airlines-manager.com/network/showflight/52143769019,https://www.airlines-manager.com/aircraft/show/90489726,3:00,14:14,320,"$709,690.00","$640,621.00"
EWR - SEA,52167946273,EWR-DFW-ATL 4,737-900ER,https://www.airlines-manager.com/network/showline/39259211,https://www.airlines-manager.com/network/showflight/52167946273,https://www.airlines-manager.com/aircraft/show/86238753,11:00,22:14,320,"$709,690.00","$640,621.00"
EWR - SEA,52176667007,EWR-DFW-ATL 1,737-900ER,https://www.airlines-manager.com/network/showline/39259211,https://www.airlines-manager.com/network/showflight/52176667007,https://www.airlines-manager.com/aircraft/show/90489724,15:00,2:14,320,"$709,690.00","$640,621.00"
EWR - SEA,52188655735,EWR-DFW-ATL 2,737-900ER,https://www.airlines-manager.com/network/showline/39259211,https://www.airlines-manager.com/network/showflight/52188655735,https://www.airlines-manager.com/aircraft/show/90489725,22:45,9:59,320,"$709,690.00","$640,621.00"
EWR - SEA,52191270963,EWR-DFW-ATL 6 B,A319-100,https://www.airlines-manager.com/network/showline/39259211,https://www.airlines-manager.com/network/showflight/52191270963,https://www.airlines-manager.com/aircraft/show/105222360,23:30,10:59,198,"$534,821.00","$484,943.00"
EWR - SFO,52143768825,EWR-SFO-LAX 1,757-300,https://www.airlines-manager.com/network/showline/39254584,https://www.airlines-manager.com/network/showflight/52143768825,https://www.airlines-manager.com/aircraft/show/83716137,0:00,11:44,400,"$944,710.00","$860,101.00"
EWR - SFO,52143768826,EWR-SFO-LAX 2,757-300,https://www.airlines-manager.com/network/showline/39254584,https://www.airlines-manager.com/network/showflight/52143768826,https://www.airlines-manager.com/aircraft/show/89233028,1:30,13:14,400,"$944,710.00","$860,101.00"
EWR - SFO,52143768827,EWR-SFO-LAX 3,757-300,https://www.airlines-manager.com/network/showline/39254584,https://www.airlines-manager.com/network/showflight/52143768827,https://www.airlines-manager.com/aircraft/show/89233029,3:00,14:44,400,"$944,710.00","$860,101.00"
EWR - SFO,52167946347,EWR-SFO-LAX 4,757-300,https://www.airlines-manager.com/network/showline/39254584,https://www.airlines-manager.com/network/showflight/52167946347,https://www.airlines-manager.com/aircraft/show/89233030,12:15,23:59,400,"$944,710.00","$860,101.00"
EWR - SFO,52172582031,EWR-SFO-LAX 5,757-300,https://www.airlines-manager.com/network/showline/39254584,https://www.airlines-manager.com/network/showflight/52172582031,https://www.airlines-manager.com/aircraft/show/89233027,14:15,1:59,400,"$944,710.00","$860,101.00"
EWR - SJC,52143768819,EWR-OAK-SJC 2,A321-200,https://www.airlines-manager.com/network/showline/45881921,https://www.airlines-manager.com/network/showflight/52143768819,https://www.airlines-manager.com/aircraft/show/104717242,0:00,11:59,310,"$732,841.00","$676,891.00"
EWR - SJC,52143768820,EWR-OAK-SJC 3,A321-200,https://www.airlines-manager.com/network/showline/45881921,https://www.airlines-manager.com/network/showflight/52143768820,https://www.airlines-manager.com/aircraft/show/104717241,2:00,13:59,310,"$732,841.00","$676,891.00"
EWR - SJC,52167946170,EWR-OAK-SJC 4,A321-200,https://www.airlines-manager.com/network/showline/45881921,https://www.airlines-manager.com/network/showflight/52167946170,https://www.airlines-manager.com/aircraft/show/104717240,10:30,22:29,310,"$732,841.00","$676,891.00"
EWR - SJC,52172581893,EWR-OAK-SJC 5,A321-200,https://www.airlines-manager.com/network/showline/45881921,https://www.airlines-manager.com/network/showflight/52172581893,https://www.airlines-manager.com/aircraft/show/104717239,13:00,0:59,310,"$732,841.00","$676,891.00"
EWR - SJC,52188655693,EWR-OAK-SJC 1,A321-200,https://www.airlines-manager.com/network/showline/45881921,https://www.airlines-manager.com/network/showflight/52188655693,https://www.airlines-manager.com/aircraft/show/104717243,22:00,9:59,310,"$732,841.00","$676,891.00"
EWR - SJU,52143768928,EWR-CUN-SJU 1,737-900ER,https://www.airlines-manager.com/network/showline/46524807,https://www.airlines-manager.com/network/showflight/52143768928,https://www.airlines-manager.com/aircraft/show/106581304,0:30,8:44,320,"$526,630.00","$480,733.00"
EWR - SJU,52143768929,EWR-CUN-SJU 4,737-900ER,https://www.airlines-manager.com/network/showline/46524807,https://www.airlines-manager.com/network/showflight/52143768929,https://www.airlines-manager.com/aircraft/show/106581307,2:00,10:14,320,"$526,630.00","$480,733.00"
EWR - SJU,52157350184,EWR-CUN-SJU 5,737-900ER,https://www.airlines-manager.com/network/showline/46524807,https://www.airlines-manager.com/network/showflight/52157350184,https://www.airlines-manager.com/aircraft/show/86238754,7:00,15:14,320,"$526,630.00","$480,733.00"
EWR - SJU,52172581877,EWR-CUN-SJU 3,737-900ER,https://www.airlines-manager.com/network/showline/46524807,https://www.airlines-manager.com/network/showflight/52172581877,https://www.airlines-manager.com/aircraft/show/106581306,13:00,21:14,320,"$526,630.00","$480,733.00"
EWR - SJU,52176666979,EWR-CUN-SJU 2,737-900ER,https://www.airlines-manager.com/network/showline/46524807,https://www.airlines-manager.com/network/showflight/52176666979,https://www.airlines-manager.com/aircraft/show/106581305,14:30,22:44,320,"$526,630.00","$480,733.00"
EWR - SLC,52143768911,EWR-DEN-SLC 2,A321-200,https://www.airlines-manager.com/network/showline/42046650,https://www.airlines-manager.com/network/showflight/52143768911,https://www.airlines-manager.com/aircraft/show/87153196,0:15,9:59,310,"$611,440.00","$559,511.00"
EWR - SLC,52143768912,EWR-DEN-SLC 5,A321-200,https://www.airlines-manager.com/network/showline/42046650,https://www.airlines-manager.com/network/showflight/52143768912,https://www.airlines-manager.com/aircraft/show/90452833,0:15,9:59,310,"$611,440.00","$559,511.00"
EWR - SLC,52143768913,EWR-DEN-SLC 6 B,A319-100,https://www.airlines-manager.com/network/showline/42046650,https://www.airlines-manager.com/network/showflight/52143768913,https://www.airlines-manager.com/aircraft/show/105223076,1:15,10:59,198,"$459,846.00","$418,219.00"
EWR - SLC,52163458738,EWR-DEN-SLC 1,A321-200,https://www.airlines-manager.com/network/showline/42046650,https://www.airlines-manager.com/network/showflight/52163458738,https://www.airlines-manager.com/aircraft/show/86270785,10:00,19:44,310,"$611,440.00","$559,511.00"
EWR - SLC,52167946271,EWR-DEN-SLC 4,A321-200,https://www.airlines-manager.com/network/showline/42046650,https://www.airlines-manager.com/network/showflight/52167946271,https://www.airlines-manager.com/aircraft/show/90452835,11:00,20:44,310,"$611,440.00","$559,511.00"
EWR - SLC,52185045347,EWR-DEN-SLC 3,A321-200,https://www.airlines-manager.com/network/showline/42046650,https://www.airlines-manager.com/network/showflight/52185045347,https://www.airlines-manager.com/aircraft/show/86270783,19:15,4:59,310,"$611,440.00","$559,511.00"
EWR - SMF,52143768872,EWR-SMF-ONT 1,737-900ER,https://www.airlines-manager.com/network/showline/48619145,https://www.airlines-manager.com/network/showflight/52143768872,https://www.airlines-manager.com/aircraft/show/94889150,0:00,11:44,320,"$717,456.00","$659,009.00"
EWR - SMF,52143768873,EWR-SMF-ONT 2,737-900ER,https://www.airlines-manager.com/network/showline/48619145,https://www.airlines-manager.com/network/showflight/52143768873,https://www.airlines-manager.com/aircraft/show/94889151,1:30,13:14,320,"$717,456.00","$659,009.00"
EWR - SMF,52143768874,EWR-SMF-ONT 3,737-900ER,https://www.airlines-manager.com/network/showline/48619145,https://www.airlines-manager.com/network/showflight/52143768874,https://www.airlines-manager.com/aircraft/show/94889152,3:00,14:44,320,"$717,456.00","$659,009.00"
EWR - SMF,52167946286,EWR-SMF-ONT 4,737-900ER,https://www.airlines-manager.com/network/showline/48619145,https://www.airlines-manager.com/network/showflight/52167946286,https://www.airlines-manager.com/aircraft/show/94889153,11:30,23:14,320,"$717,456.00","$659,009.00"
EWR - SMF,52172581951,EWR-SMF-ONT 5,737-900ER,https://www.airlines-manager.com/network/showline/48619145,https://www.airlines-manager.com/network/showflight/52172581951,https://www.airlines-manager.com/aircraft/show/94889154,13:30,1:14,320,"$717,456.00","$659,009.00"
EWR - SNN,52167946180,EWR 56B-6 B1,777-300,https://www.airlines-manager.com/network/showline/46604244,https://www.airlines-manager.com/network/showflight/52167946180,https://www.airlines-manager.com/aircraft/show/94521248,10:45,23:59,748,"$2,079,042.00","$1,895,781.00"
EWR - SNN,52181070789,EWR 56B-5 B1,777-300,https://www.airlines-manager.com/network/showline/46604244,https://www.airlines-manager.com/network/showflight/52181070789,https://www.airlines-manager.com/aircraft/show/94521253,18:45,7:59,748,"$1,989,528.00","$1,833,398.00"
EWR - STL,52143769008,EWR-STL-PIT 3,A321neo,https://www.airlines-manager.com/network/showline/44784449,https://www.airlines-manager.com/network/showflight/52143769008,https://www.airlines-manager.com/aircraft/show/115400546,1:00,6:29,338,"$372,943.00","$341,948.00"
EWR - STL,52143769009,EWR-STL-PIT 2,A321neo,https://www.airlines-manager.com/network/showline/44784449,https://www.airlines-manager.com/network/showflight/52143769009,https://www.airlines-manager.com/aircraft/show/115400547,4:15,9:44,338,"$372,943.00","$341,948.00"
EWR - STL,52163458707,EWR-STL-PIT 1,A321neo,https://www.airlines-manager.com/network/showline/44784449,https://www.airlines-manager.com/network/showflight/52163458707,https://www.airlines-manager.com/aircraft/show/115400548,10:00,15:29,338,"$372,943.00","$341,948.00"
EWR - STL,52172581960,EWR-STL-PIT 5,ERJ-175,https://www.airlines-manager.com/network/showline/44784449,https://www.airlines-manager.com/network/showflight/52172581960,https://www.airlines-manager.com/aircraft/show/98887257,14:00,19:29,112,"$163,268.00","$142,501.00"
EWR - STL,52176667151,EWR-STL-PIT 4,A321neo,https://www.airlines-manager.com/network/showline/44784449,https://www.airlines-manager.com/network/showflight/52176667151,https://www.airlines-manager.com/aircraft/show/115400545,16:15,21:44,338,"$372,943.00","$341,948.00"
EWR - STL,52188655740,EWR-STL-PIT 5,ERJ-175,https://www.airlines-manager.com/network/showline/44784449,https://www.airlines-manager.com/network/showflight/52188655740,https://www.airlines-manager.com/aircraft/show/98887257,22:45,4:14,112,"$163,268.00","$142,501.00"
EWR - TLS,52143768857,Charter 2,747-300,https://www.airlines-manager.com/network/showline/48907589,https://www.airlines-manager.com/network/showflight/52143768857,https://www.airlines-manager.com/aircraft/show/112787252,0:00,15:14,828,"$2,631,372.00","$2,452,727.00"
EWR - TLS,52167946303,Charter 1,747-300,https://www.airlines-manager.com/network/showline/48907589,https://www.airlines-manager.com/network/showflight/52167946303,https://www.airlines-manager.com/aircraft/show/110577510,12:00,3:14,828,"$2,631,372.00","$2,452,727.00"
EWR - TLV,52143769206,EWR-TLV 2 S,777-300,https://www.airlines-manager.com/network/showline/39655245,https://www.airlines-manager.com/network/showflight/52143769206,https://www.airlines-manager.com/aircraft/show/89124073,3:00,1:29,884,"$3,652,424.00","$3,333,075.00"
EWR - TLV,52188655540,EWR-TLV 1 S,777-300,https://www.airlines-manager.com/network/showline/39655245,https://www.airlines-manager.com/network/showflight/52188655540,https://www.airlines-manager.com/aircraft/show/93429385,21:00,19:29,884,"$3,652,424.00","$3,333,075.00"
EWR - TPA,52157350075,EWR-TUS-TPA 3,A321-200,https://www.airlines-manager.com/network/showline/44584397,https://www.airlines-manager.com/network/showflight/52157350075,https://www.airlines-manager.com/aircraft/show/98379317,5:45,11:44,310,"$376,282.00","$341,101.00"
EWR - TPA,52167946183,EWR-TUS-TPA 4,A321-200,https://www.airlines-manager.com/network/showline/44584397,https://www.airlines-manager.com/network/showflight/52167946183,https://www.airlines-manager.com/aircraft/show/98379316,10:45,16:44,310,"$376,282.00","$341,101.00"
EWR - TPA,52172581916,EWR-TUS-TPA 2,A321-200,https://www.airlines-manager.com/network/showline/44584397,https://www.airlines-manager.com/network/showflight/52172581916,https://www.airlines-manager.com/aircraft/show/98379318,13:00,18:59,310,"$376,282.00","$341,101.00"
EWR - TPA,52176666998,EWR-TUS-TPA 5,A321-200,https://www.airlines-manager.com/network/showline/44584397,https://www.airlines-manager.com/network/showflight/52176666998,https://www.airlines-manager.com/aircraft/show/98379315,15:00,20:59,310,"$376,282.00","$341,101.00"
EWR - TPA,52191270943,EWR-TUS-TPA 1,A321-200,https://www.airlines-manager.com/network/showline/44584397,https://www.airlines-manager.com/network/showflight/52191270943,https://www.airlines-manager.com/aircraft/show/98379319,23:15,5:14,310,"$376,282.00","$341,101.00"
EWR - TUL,52143769085,EWR-TUL-DSM 3,A321-200,https://www.airlines-manager.com/network/showline/47540564,https://www.airlines-manager.com/network/showflight/52143769085,https://www.airlines-manager.com/aircraft/show/110044465,1:45,8:29,310,"$426,427.00","$392,326.00"
EWR - TUL,52143769086,EWR-TUL-DSM 2,A321-200,https://www.airlines-manager.com/network/showline/47540564,https://www.airlines-manager.com/network/showflight/52143769086,https://www.airlines-manager.com/aircraft/show/110044464,3:30,10:14,310,"$426,427.00","$392,326.00"
EWR - TUL,52172581865,EWR-TUL-DSM 1,A321-200,https://www.airlines-manager.com/network/showline/47540564,https://www.airlines-manager.com/network/showflight/52172581865,https://www.airlines-manager.com/aircraft/show/110044463,13:00,19:44,310,"$426,427.00","$392,326.00"
EWR - TUL,52176667164,EWR-TUL-DSM 5,ERJ-175,https://www.airlines-manager.com/network/showline/47540564,https://www.airlines-manager.com/network/showflight/52176667164,https://www.airlines-manager.com/aircraft/show/110113039,16:30,23:14,112,"$200,700.00","$178,123.00"
EWR - TUL,52181070779,EWR-TUL-DSM 4,A321-200,https://www.airlines-manager.com/network/showline/47540564,https://www.airlines-manager.com/network/showflight/52181070779,https://www.airlines-manager.com/aircraft/show/110044466,18:45,1:29,310,"$426,427.00","$392,326.00"
EWR - TUS,52143768935,EWR-TUS-TPA 4,A321-200,https://www.airlines-manager.com/network/showline/44592944,https://www.airlines-manager.com/network/showflight/52143768935,https://www.airlines-manager.com/aircraft/show/98379316,0:30,10:44,310,"$638,660.00","$590,566.00"
EWR - TUS,52143768936,EWR-TUS-TPA 2,A321-200,https://www.airlines-manager.com/network/showline/44592944,https://www.airlines-manager.com/network/showflight/52143768936,https://www.airlines-manager.com/aircraft/show/98379318,1:30,11:44,310,"$638,660.00","$590,566.00"
EWR - TUS,52143768937,EWR-TUS-TPA 5,A321-200,https://www.airlines-manager.com/network/showline/44592944,https://www.airlines-manager.com/network/showflight/52143768937,https://www.airlines-manager.com/aircraft/show/98379315,3:30,13:44,310,"$638,660.00","$590,566.00"
EWR - TUS,52172581917,EWR-TUS-TPA 1,A321-200,https://www.airlines-manager.com/network/showline/44592944,https://www.airlines-manager.com/network/showflight/52172581917,https://www.airlines-manager.com/aircraft/show/98379319,13:00,23:14,310,"$638,660.00","$590,566.00"
EWR - TUS,52185045355,EWR-TUS-TPA 3,A321-200,https://www.airlines-manager.com/network/showline/44592944,https://www.airlines-manager.com/network/showflight/52185045355,https://www.airlines-manager.com/aircraft/show/98379317,19:30,5:44,310,"$638,660.00","$590,566.00"
EWR - YEG,52143768884,EWR-YEG-BFF 2,737-900ER,https://www.airlines-manager.com/network/showline/49208033,https://www.airlines-manager.com/network/showflight/52143768884,https://www.airlines-manager.com/aircraft/show/98936170,0:15,10:14,320,"$633,755.00","$581,361.00"
EWR - YEG,52143768885,EWR-YEG-BFF 4,737-900ER,https://www.airlines-manager.com/network/showline/49208033,https://www.airlines-manager.com/network/showflight/52143768885,https://www.airlines-manager.com/aircraft/show/98936171,2:15,12:14,320,"$633,755.00","$581,361.00"
EWR - YEG,52167946191,EWR-YEG-BFF 1,737-900ER,https://www.airlines-manager.com/network/showline/49208033,https://www.airlines-manager.com/network/showflight/52167946191,https://www.airlines-manager.com/aircraft/show/98936168,11:00,20:59,320,"$633,755.00","$581,361.00"
EWR - YEG,52172581831,EWR-YEG-BFF 3,737-900ER,https://www.airlines-manager.com/network/showline/49208033,https://www.airlines-manager.com/network/showflight/52172581831,https://www.airlines-manager.com/aircraft/show/98936169,12:30,22:29,320,"$633,755.00","$581,361.00"
EWR - YEG,52188655683,EWR-YEG-BFF 5 B,A319-100,https://www.airlines-manager.com/network/showline/49208033,https://www.airlines-manager.com/network/showflight/52188655683,https://www.airlines-manager.com/aircraft/show/115493369,22:00,7:59,198,"$473,509.00","$435,351.00"
EWR - YOW,52163458695,EWR-CUN-SJU 1,737-900ER,https://www.airlines-manager.com/network/showline/46524768,https://www.airlines-manager.com/network/showflight/52163458695,https://www.airlines-manager.com/aircraft/show/106581304,9:30,12:59,320,"$170,547.00","$145,216.00"
EWR - YOW,52167946224,EWR-CUN-SJU 4,737-900ER,https://www.airlines-manager.com/network/showline/46524768,https://www.airlines-manager.com/network/showflight/52167946224,https://www.airlines-manager.com/aircraft/show/106581307,11:00,14:29,320,"$170,547.00","$145,216.00"
EWR - YOW,52181070787,EWR-CUN-SJU 5,737-900ER,https://www.airlines-manager.com/network/showline/46524768,https://www.airlines-manager.com/network/showflight/52181070787,https://www.airlines-manager.com/aircraft/show/86238754,18:45,22:14,320,"$170,547.00","$145,216.00"
EWR - YOW,52188655598,EWR-CUN-SJU 3,737-900ER,https://www.airlines-manager.com/network/showline/46524768,https://www.airlines-manager.com/network/showflight/52188655598,https://www.airlines-manager.com/aircraft/show/106581306,21:15,0:44,320,"$170,547.00","$145,216.00"
EWR - YOW,52188655600,EWR-CUN-SJU 2,737-900ER,https://www.airlines-manager.com/network/showline/46524768,https://www.airlines-manager.com/network/showflight/52188655600,https://www.airlines-manager.com/aircraft/show/106581305,22:45,2:14,289,"$160,487.00","$135,430.00"
EWR - YUL,52163458696,EWR-CUN-SJU 3,737-900ER,https://www.airlines-manager.com/network/showline/46524780,https://www.airlines-manager.com/network/showflight/52163458696,https://www.airlines-manager.com/aircraft/show/106581306,9:30,12:59,320,"$173,962.00","$145,804.00"
EWR - YUL,52167946223,EWR-CUN-SJU 2,737-900ER,https://www.airlines-manager.com/network/showline/46524780,https://www.airlines-manager.com/network/showflight/52167946223,https://www.airlines-manager.com/aircraft/show/106581305,11:00,14:29,320,"$173,962.00","$145,804.00"
EWR - YUL,52176667067,EWR-CUN-SJU 5,737-900ER,https://www.airlines-manager.com/network/showline/46524780,https://www.airlines-manager.com/network/showflight/52176667067,https://www.airlines-manager.com/aircraft/show/86238754,15:15,18:44,320,"$173,962.00","$145,804.00"
EWR - YUL,52188655546,EWR-CUN-SJU 1,737-900ER,https://www.airlines-manager.com/network/showline/46524780,https://www.airlines-manager.com/network/showflight/52188655546,https://www.airlines-manager.com/aircraft/show/106581304,21:00,0:29,320,"$173,962.00","$145,804.00"
EWR - YUL,52188655553,EWR-CUN-SJU 4,737-900ER,https://www.airlines-manager.com/network/showline/46524780,https://www.airlines-manager.com/network/showflight/52188655553,https://www.airlines-manager.com/aircraft/show/106581307,22:30,1:59,320,"$173,962.00","$145,804.00"
EWR - YVR,52143768858,EWR-YVR-YYC 1,757-300,https://www.airlines-manager.com/network/showline/39297576,https://www.airlines-manager.com/network/showflight/52143768858,https://www.airlines-manager.com/aircraft/show/113681636,0:00,11:14,400,"$908,383.00","$836,005.00"
EWR - YVR,52143768859,EWR-YVR-YYC 2,757-300,https://www.airlines-manager.com/network/showline/39297576,https://www.airlines-manager.com/network/showflight/52143768859,https://www.airlines-manager.com/aircraft/show/113681637,1:30,12:44,400,"$908,383.00","$836,005.00"
EWR - YVR,52143768860,EWR-YVR-YYC 3,757-300,https://www.airlines-manager.com/network/showline/39297576,https://www.airlines-manager.com/network/showflight/52143768860,https://www.airlines-manager.com/aircraft/show/113681638,3:00,14:14,400,"$908,383.00","$836,005.00"
EWR - YVR,52167946279,EWR-YVR-YYC 4,757-300,https://www.airlines-manager.com/network/showline/39297576,https://www.airlines-manager.com/network/showflight/52167946279,https://www.airlines-manager.com/aircraft/show/113681639,11:15,22:29,400,"$908,383.00","$836,005.00"
EWR - YVR,52172581837,EWR-YVR-YYC 5,757-300,https://www.airlines-manager.com/network/showline/39297576,https://www.airlines-manager.com/network/showflight/52172581837,https://www.airlines-manager.com/aircraft/show/113681640,12:45,23:59,400,"$908,383.00","$836,005.00"
EWR - YYC,52143769067,EWR-YVR-YYC 4,757-300,https://www.airlines-manager.com/network/showline/48643425,https://www.airlines-manager.com/network/showflight/52143769067,https://www.airlines-manager.com/aircraft/show/113681639,1:30,11:14,400,"$787,576.00","$724,023.00"
EWR - YYC,52143769068,EWR-YVR-YYC 5,757-300,https://www.airlines-manager.com/network/showline/48643425,https://www.airlines-manager.com/network/showflight/52143769068,https://www.airlines-manager.com/aircraft/show/113681640,3:00,12:44,400,"$787,576.00","$724,023.00"
EWR - YYC,52167946277,EWR-YVR-YYC 1,757-300,https://www.airlines-manager.com/network/showline/48643425,https://www.airlines-manager.com/network/showflight/52167946277,https://www.airlines-manager.com/aircraft/show/113681636,11:15,20:59,400,"$787,576.00","$724,023.00"
EWR - YYC,52172581838,EWR-YVR-YYC 2,757-300,https://www.airlines-manager.com/network/showline/48643425,https://www.airlines-manager.com/network/showflight/52172581838,https://www.airlines-manager.com/aircraft/show/113681637,12:45,22:29,400,"$787,576.00","$724,023.00"
EWR - YYC,52172581839,EWR-YVR-YYC 3,757-300,https://www.airlines-manager.com/network/showline/48643425,https://www.airlines-manager.com/network/showflight/52172581839,https://www.airlines-manager.com/aircraft/show/113681638,14:15,23:59,400,"$787,576.00","$724,023.00"
EWR - YYZ,52143769131,EWR-DTW-YYZ 4,737-900ER,https://www.airlines-manager.com/network/showline/42503817,https://www.airlines-manager.com/network/showflight/52143769131,https://www.airlines-manager.com/aircraft/show/92003922,2:15,5:44,320,"$178,703.00","$144,365.00"
EWR - YYZ,52157350202,EWR-DTW-YYZ 5,737-900ER,https://www.airlines-manager.com/network/showline/42503817,https://www.airlines-manager.com/network/showflight/52157350202,https://www.airlines-manager.com/aircraft/show/92003921,7:30,10:59,320,"$178,703.00","$144,365.00"
EWR - YYZ,52163458758,EWR-DTW-YYZ 2,737-900ER,https://www.airlines-manager.com/network/showline/42503817,https://www.airlines-manager.com/network/showflight/52163458758,https://www.airlines-manager.com/aircraft/show/92003924,10:00,13:29,320,"$178,703.00","$144,365.00"
EWR - YYZ,52172582024,EWR-DTW-YYZ 1,737-900ER,https://www.airlines-manager.com/network/showline/42503817,https://www.airlines-manager.com/network/showflight/52172582024,https://www.airlines-manager.com/aircraft/show/92003925,14:00,17:29,320,"$178,703.00","$144,365.00"
EWR - YYZ,52181070761,EWR-DTW-YYZ 3,737-900ER,https://www.airlines-manager.com/network/showline/42503817,https://www.airlines-manager.com/network/showflight/52181070761,https://www.airlines-manager.com/aircraft/show/92003923,18:15,21:44,320,"$178,703.00","$144,365.00"
EWR - YYZ,52185045334,EWR CARGO 1,A321neo-LR,https://www.airlines-manager.com/network/showline/42503817,https://www.airlines-manager.com/network/showflight/52185045334,https://www.airlines-manager.com/aircraft/show/103406580,19:15,22:44,0,"$63,901.00","$35,124.00"
EWR - ZRH,52157350211,EWR 84A-6 B2,777-300,https://www.airlines-manager.com/network/showline/42022972,https://www.airlines-manager.com/network/showflight/52157350211,https://www.airlines-manager.com/aircraft/show/90656552,7:45,23:59,852,"$2,628,452.00","$2,385,763.00"
EWR - ZRH,52185045404,EWR 84A-7 B2,777-300,https://www.airlines-manager.com/network/showline/42022972,https://www.airlines-manager.com/network/showflight/52185045404,https://www.airlines-manager.com/aircraft/show/94521249,20:00,12:14,852,"$2,628,452.00","$2,385,763.00"
HNL - AKL,52176667135,HNL 84B-2 F,777-300,https://www.airlines-manager.com/network/showline/44044097,https://www.airlines-manager.com/network/showflight/52176667135,https://www.airlines-manager.com/aircraft/show/96807092,16:00,9:59,832,"$2,903,891.00","$2,653,215.00"
HNL - AKL,52191270911,HNL 84B-6 F,777-300,https://www.airlines-manager.com/network/showline/44044097,https://www.airlines-manager.com/network/showflight/52191270911,https://www.airlines-manager.com/aircraft/show/96807088,23:00,16:59,832,"$2,864,810.00","$2,627,535.00"
HNL - ATL,52157349970,HNL 56B-2 B,787-10,https://www.airlines-manager.com/network/showline/47262358,https://www.airlines-manager.com/network/showflight/52157349970,https://www.airlines-manager.com/aircraft/show/109187499,4:45,22:44,592,"$2,190,918.00","$2,005,063.00"
HNL - ATL,52176667120,HNL 56B-4 B,787-10,https://www.airlines-manager.com/network/showline/47262358,https://www.airlines-manager.com/network/showflight/52176667120,https://www.airlines-manager.com/aircraft/show/109187501,16:00,9:59,592,"$2,190,918.00","$2,005,063.00"
HNL - ATL,52188655751,HNL 56B-2 B,787-10,https://www.airlines-manager.com/network/showline/47262358,https://www.airlines-manager.com/network/showflight/52188655751,https://www.airlines-manager.com/aircraft/show/109187499,22:45,16:44,592,"$2,190,918.00","$2,005,063.00"
HNL - BNE,52143769249,HNL 84B-6 F,777-300,https://www.airlines-manager.com/network/showline/45391394,https://www.airlines-manager.com/network/showflight/52143769249,https://www.airlines-manager.com/aircraft/show/96807088,4:00,22:59,832,"$3,046,351.00","$2,777,502.00"
HNL - BNE,52163458706,HNL 84B-3 F,777-300,https://www.airlines-manager.com/network/showline/45391394,https://www.airlines-manager.com/network/showflight/52163458706,https://www.airlines-manager.com/aircraft/show/96807091,10:00,4:59,832,"$3,027,934.00","$2,765,431.00"
HNL - CLT,52143769278,HNL 56D-3 B,787-10,https://www.airlines-manager.com/network/showline/48149169,https://www.airlines-manager.com/network/showflight/52143769278,https://www.airlines-manager.com/aircraft/show/112066134,4:30,23:14,592,"$2,251,100.00","$2,095,401.00"
HNL - CLT,52157350042,HNL 56D-5 B,787-10,https://www.airlines-manager.com/network/showline/48149169,https://www.airlines-manager.com/network/showflight/52157350042,https://www.airlines-manager.com/aircraft/show/112066136,5:30,0:14,592,"$2,251,100.00","$2,095,401.00"
HNL - CLT,52191270936,HNL 56D-3 B,787-10,https://www.airlines-manager.com/network/showline/48149169,https://www.airlines-manager.com/network/showflight/52191270936,https://www.airlines-manager.com/aircraft/show/112066134,23:15,17:59,592,"$2,251,100.00","$2,095,401.00"
HNL - CXI,52143769240,HNL CARGO 2,737-700,https://www.airlines-manager.com/network/showline/43541576,https://www.airlines-manager.com/network/showflight/52143769240,https://www.airlines-manager.com/aircraft/show/107563068,3:45,10:59,0,"$121,156.00","$97,490.00"
HNL - CXI,52157350054,HNL-CXI S,A321-200,https://www.airlines-manager.com/network/showline/43541576,https://www.airlines-manager.com/network/showflight/52157350054,https://www.airlines-manager.com/aircraft/show/90717080,5:30,12:44,388,"$489,801.00","$459,293.00"
HNL - CXI,52176667066,HNL-CXI S,A321-200,https://www.airlines-manager.com/network/showline/43541576,https://www.airlines-manager.com/network/showflight/52176667066,https://www.airlines-manager.com/aircraft/show/90717080,15:00,22:14,388,"$489,801.00","$459,293.00"
HNL - CXI,52188655696,HNL-CXI S,A321-200,https://www.airlines-manager.com/network/showline/43541576,https://www.airlines-manager.com/network/showflight/52188655696,https://www.airlines-manager.com/aircraft/show/90717080,22:15,5:29,388,"$489,801.00","$459,293.00"
HNL - EWR,52143769267,HNL 56A-7 B,787-10,https://www.airlines-manager.com/network/showline/43560815,https://www.airlines-manager.com/network/showflight/52143769267,https://www.airlines-manager.com/aircraft/show/95351586,4:15,23:59,592,"$2,361,352.00","$2,199,437.00"
HNL - EWR,52157350082,HNL 56A-6 B,787-10,https://www.airlines-manager.com/network/showline/43560815,https://www.airlines-manager.com/network/showflight/52157350082,https://www.airlines-manager.com/aircraft/show/95351587,6:00,1:44,592,"$2,361,352.00","$2,199,437.00"
HNL - EWR,52185045376,HNL 56A-3 B,787-10,https://www.airlines-manager.com/network/showline/43560815,https://www.airlines-manager.com/network/showflight/52185045376,https://www.airlines-manager.com/aircraft/show/95351590,19:45,15:29,592,"$2,361,352.00","$2,199,437.00"
HNL - GUM,52143768869,SFO-ICN B,787-10,https://www.airlines-manager.com/network/showline/43718411,https://www.airlines-manager.com/network/showflight/52143768869,https://www.airlines-manager.com/aircraft/show/110213648,0:00,15:29,592,"$1,870,084.00","$1,755,712.00"
HNL - GUM,52157349971,HNL 84A-3 F,777-300,https://www.airlines-manager.com/network/showline/43718411,https://www.airlines-manager.com/network/showflight/52157349971,https://www.airlines-manager.com/aircraft/show/95818924,4:45,20:29,806,"$2,401,480.00","$2,204,389.00"
HNL - IAD,52143769220,HNL 56C-3 B,787-10,https://www.airlines-manager.com/network/showline/48011873,https://www.airlines-manager.com/network/showflight/52143769220,https://www.airlines-manager.com/aircraft/show/111639415,3:15,22:14,592,"$2,267,144.00","$2,114,417.00"
HNL - IAD,52163458686,HNL 56C-5 B,787-10,https://www.airlines-manager.com/network/showline/48011873,https://www.airlines-manager.com/network/showflight/52163458686,https://www.airlines-manager.com/aircraft/show/111639417,9:15,4:14,592,"$2,267,144.00","$2,114,417.00"
HNL - IAD,52185045390,HNL 56C-7 B,787-10,https://www.airlines-manager.com/network/showline/48011873,https://www.airlines-manager.com/network/showflight/52185045390,https://www.airlines-manager.com/aircraft/show/111639419,20:00,14:59,590,"$2,257,172.00","$2,104,776.00"
HNL - IAH,52143768845,HNL 56A-1 B,787-10,https://www.airlines-manager.com/network/showline/43568404,https://www.airlines-manager.com/network/showflight/52143768845,https://www.airlines-manager.com/aircraft/show/95351592,0:00,15:59,592,"$1,926,257.00","$1,785,946.00"
HNL - IAH,52143768846,HNL 56A-3 B,787-10,https://www.airlines-manager.com/network/showline/43568404,https://www.airlines-manager.com/network/showflight/52143768846,https://www.airlines-manager.com/aircraft/show/95351590,3:45,19:44,592,"$1,926,257.00","$1,785,946.00"
HNL - IAH,52176667132,HNL 56A-1 B,787-10,https://www.airlines-manager.com/network/showline/43568404,https://www.airlines-manager.com/network/showflight/52176667132,https://www.airlines-manager.com/aircraft/show/95351592,16:00,7:59,591,"$1,920,718.00","$1,780,553.00"
HNL - ITO,52143769091,HNL Interisland 4,717-200,https://www.airlines-manager.com/network/showline/43516658,https://www.airlines-manager.com/network/showflight/52143769091,https://www.airlines-manager.com/aircraft/show/94803593,1:45,4:44,170,"$76,990.00","$66,463.00"
HNL - ITO,52143769092,HNL Interisland 1,717-200,https://www.airlines-manager.com/network/showline/43516658,https://www.airlines-manager.com/network/showflight/52143769092,https://www.airlines-manager.com/aircraft/show/94803596,3:15,6:14,170,"$76,990.00","$66,463.00"
HNL - ITO,52157350077,HNL Interisland 2,717-200,https://www.airlines-manager.com/network/showline/43516658,https://www.airlines-manager.com/network/showflight/52157350077,https://www.airlines-manager.com/aircraft/show/94803595,6:00,8:59,170,"$76,990.00","$66,463.00"
HNL - ITO,52163458692,HNL Interisland 3,717-200,https://www.airlines-manager.com/network/showline/43516658,https://www.airlines-manager.com/network/showflight/52163458692,https://www.airlines-manager.com/aircraft/show/94803594,9:30,12:29,170,"$76,990.00","$66,463.00"
HNL - ITO,52176667013,HNL Interisland 4,717-200,https://www.airlines-manager.com/network/showline/43516658,https://www.airlines-manager.com/network/showflight/52176667013,https://www.airlines-manager.com/aircraft/show/94803593,15:00,17:59,170,"$76,990.00","$66,463.00"
HNL - ITO,52176667014,HNL Interisland 1,717-200,https://www.airlines-manager.com/network/showline/43516658,https://www.airlines-manager.com/network/showflight/52176667014,https://www.airlines-manager.com/aircraft/show/94803596,16:30,19:29,170,"$76,990.00","$66,463.00"
HNL - ITO,52185045344,HNL Interisland 2,717-200,https://www.airlines-manager.com/network/showline/43516658,https://www.airlines-manager.com/network/showflight/52185045344,https://www.airlines-manager.com/aircraft/show/94803595,19:15,22:14,170,"$76,990.00","$66,463.00"
HNL - ITO,52188655738,HNL Interisland 3,717-200,https://www.airlines-manager.com/network/showline/43516658,https://www.airlines-manager.com/network/showflight/52188655738,https://www.airlines-manager.com/aircraft/show/94803594,22:45,1:44,125,"$65,154.00","$55,106.00"
HNL - JFK,52143769193,HNL 56B-6 B,787-10,https://www.airlines-manager.com/network/showline/47262348,https://www.airlines-manager.com/network/showflight/52143769193,https://www.airlines-manager.com/aircraft/show/109187503,3:00,22:44,592,"$2,393,855.00","$2,211,415.00"
HNL - JFK,52163458666,HNL 56B-1 B,787-10,https://www.airlines-manager.com/network/showline/47262348,https://www.airlines-manager.com/network/showflight/52163458666,https://www.airlines-manager.com/aircraft/show/109187498,9:00,4:44,592,"$2,393,855.00","$2,211,415.00"
HNL - JFK,52181070663,HNL 56B-3 B,787-10,https://www.airlines-manager.com/network/showline/47262348,https://www.airlines-manager.com/network/showflight/52181070663,https://www.airlines-manager.com/aircraft/show/109187500,17:00,12:44,592,"$2,393,855.00","$2,211,415.00"
HNL - KOA,52143768963,HNL Interisland 2,717-200,https://www.airlines-manager.com/network/showline/43516655,https://www.airlines-manager.com/network/showflight/52143768963,https://www.airlines-manager.com/aircraft/show/94803595,0:45,3:29,170,"$58,664.00","$48,286.00"
HNL - KOA,52143768964,HNL Interisland 3,717-200,https://www.airlines-manager.com/network/showline/43516655,https://www.airlines-manager.com/network/showflight/52143768964,https://www.airlines-manager.com/aircraft/show/94803594,4:15,6:59,170,"$58,664.00","$48,286.00"
HNL - KOA,52157350198,HNL Interisland 4,717-200,https://www.airlines-manager.com/network/showline/43516655,https://www.airlines-manager.com/network/showflight/52157350198,https://www.airlines-manager.com/aircraft/show/94803593,7:15,9:59,170,"$58,664.00","$48,286.00"
HNL - KOA,52163458659,HNL Interisland 1,717-200,https://www.airlines-manager.com/network/showline/43516655,https://www.airlines-manager.com/network/showflight/52163458659,https://www.airlines-manager.com/aircraft/show/94803596,8:45,11:29,170,"$58,664.00","$48,286.00"
HNL - KOA,52172581969,HNL Interisland 2,717-200,https://www.airlines-manager.com/network/showline/43516655,https://www.airlines-manager.com/network/showflight/52172581969,https://www.airlines-manager.com/aircraft/show/94803595,14:00,16:44,170,"$58,664.00","$48,286.00"
HNL - KOA,52181070697,HNL Interisland 3,717-200,https://www.airlines-manager.com/network/showline/43516655,https://www.airlines-manager.com/network/showflight/52181070697,https://www.airlines-manager.com/aircraft/show/94803594,17:30,20:14,170,"$58,664.00","$48,286.00"
HNL - KOA,52185045446,HNL Interisland 4,717-200,https://www.airlines-manager.com/network/showline/43516655,https://www.airlines-manager.com/network/showflight/52185045446,https://www.airlines-manager.com/aircraft/show/94803593,20:30,23:14,170,"$58,664.00","$48,286.00"
HNL - KOA,52188655687,HNL Interisland 1,717-200,https://www.airlines-manager.com/network/showline/43516655,https://www.airlines-manager.com/network/showflight/52188655687,https://www.airlines-manager.com/aircraft/show/94803596,22:00,0:44,170,"$58,664.00","$48,286.00"
HNL - LAS,52157350118,HNL 84A-5 F,777-300,https://www.airlines-manager.com/network/showline/45390240,https://www.airlines-manager.com/network/showflight/52157350118,https://www.airlines-manager.com/aircraft/show/95818922,6:30,18:29,832,"$1,928,670.00","$1,742,042.00"
HNL - LAS,52185045447,HNL 84A-3 F,777-300,https://www.airlines-manager.com/network/showline/45390240,https://www.airlines-manager.com/network/showflight/52185045447,https://www.airlines-manager.com/aircraft/show/95818924,20:30,8:29,800,"$1,879,596.00","$1,695,976.00"
HNL - LAX,52157350190,HNL-SFO-LAX 3,A321neo,https://www.airlines-manager.com/network/showline/43538953,https://www.airlines-manager.com/network/showflight/52157350190,https://www.airlines-manager.com/aircraft/show/110044460,7:00,18:59,338,"$786,302.00","$718,030.00"
HNL - LAX,52163458674,HNL-SFO-LAX 4,A321neo,https://www.airlines-manager.com/network/showline/43538953,https://www.airlines-manager.com/network/showflight/52163458674,https://www.airlines-manager.com/aircraft/show/110044461,9:00,20:59,338,"$786,302.00","$718,030.00"
HNL - LAX,52163458675,HNL-SFO-LAX 6 B,A319-100,https://www.airlines-manager.com/network/showline/43538953,https://www.airlines-manager.com/network/showflight/52163458675,https://www.airlines-manager.com/aircraft/show/106106389,10:00,21:59,198,"$544,259.00","$486,979.00"
HNL - LAX,52181070754,HNL-SFO-LAX 1,A321neo,https://www.airlines-manager.com/network/showline/43538953,https://www.airlines-manager.com/network/showflight/52181070754,https://www.airlines-manager.com/aircraft/show/110044458,18:15,6:14,338,"$786,302.00","$718,030.00"
HNL - LAX,52185045419,HNL-SFO-LAX 2,A321neo,https://www.airlines-manager.com/network/showline/43538953,https://www.airlines-manager.com/network/showflight/52185045419,https://www.airlines-manager.com/aircraft/show/110044459,20:15,8:14,338,"$786,302.00","$718,030.00"
HNL - LAX,52188655662,HNL-SFO-LAX 5,A321neo,https://www.airlines-manager.com/network/showline/43538953,https://www.airlines-manager.com/network/showflight/52188655662,https://www.airlines-manager.com/aircraft/show/110044462,21:45,9:44,338,"$786,302.00","$718,030.00"
HNL - LIH,52143768955,HNL Interisland 1,717-200,https://www.airlines-manager.com/network/showline/43516646,https://www.airlines-manager.com/network/showflight/52143768955,https://www.airlines-manager.com/aircraft/show/94803596,0:45,3:14,170,"$50,924.00","$42,504.00"
HNL - LIH,52143768956,HNL Interisland 2,717-200,https://www.airlines-manager.com/network/showline/43516646,https://www.airlines-manager.com/network/showflight/52143768956,https://www.airlines-manager.com/aircraft/show/94803595,3:30,5:59,170,"$50,924.00","$42,504.00"
HNL - LIH,52157350182,HNL Interisland 3,717-200,https://www.airlines-manager.com/network/showline/43516646,https://www.airlines-manager.com/network/showflight/52157350182,https://www.airlines-manager.com/aircraft/show/94803594,7:00,9:29,170,"$50,924.00","$42,504.00"
HNL - LIH,52163458730,HNL Interisland 4,717-200,https://www.airlines-manager.com/network/showline/43516646,https://www.airlines-manager.com/network/showflight/52163458730,https://www.airlines-manager.com/aircraft/show/94803593,10:00,12:29,170,"$50,924.00","$42,504.00"
HNL - LIH,52172581970,HNL Interisland 1,717-200,https://www.airlines-manager.com/network/showline/43516646,https://www.airlines-manager.com/network/showflight/52172581970,https://www.airlines-manager.com/aircraft/show/94803596,14:00,16:29,170,"$50,924.00","$42,504.00"
HNL - LIH,52181070604,HNL Interisland 2,717-200,https://www.airlines-manager.com/network/showline/43516646,https://www.airlines-manager.com/network/showflight/52181070604,https://www.airlines-manager.com/aircraft/show/94803595,16:45,19:14,170,"$50,924.00","$42,504.00"
HNL - LIH,52185045422,HNL Interisland 3,717-200,https://www.airlines-manager.com/network/showline/43516646,https://www.airlines-manager.com/network/showflight/52185045422,https://www.airlines-manager.com/aircraft/show/94803594,20:15,22:44,170,"$50,924.00","$42,504.00"
HNL - LIH,52191270947,HNL Interisland 4,717-200,https://www.airlines-manager.com/network/showline/43516646,https://www.airlines-manager.com/network/showflight/52191270947,https://www.airlines-manager.com/aircraft/show/94803593,23:15,1:44,170,"$50,924.00","$42,504.00"
HNL - LNY,52143769021,HNL-LNY,Q-400,https://www.airlines-manager.com/network/showline/43516637,https://www.airlines-manager.com/network/showflight/52143769021,https://www.airlines-manager.com/aircraft/show/106107514,1:00,3:29,116,"$30,288.00","$25,281.00"
HNL - LNY,52143769022,HNL-LNY,Q-400,https://www.airlines-manager.com/network/showline/43516637,https://www.airlines-manager.com/network/showflight/52143769022,https://www.airlines-manager.com/aircraft/show/106107514,3:30,5:59,116,"$30,288.00","$25,281.00"
HNL - LNY,52157350098,HNL-LNY,Q-400,https://www.airlines-manager.com/network/showline/43516637,https://www.airlines-manager.com/network/showflight/52157350098,https://www.airlines-manager.com/aircraft/show/106107514,6:00,8:29,116,"$30,288.00","$25,281.00"
HNL - LNY,52163458624,HNL-LNY,Q-400,https://www.airlines-manager.com/network/showline/43516637,https://www.airlines-manager.com/network/showflight/52163458624,https://www.airlines-manager.com/aircraft/show/106107514,8:30,10:59,116,"$30,288.00","$25,281.00"
HNL - LNY,52176667052,HNL-LNY,Q-400,https://www.airlines-manager.com/network/showline/43516637,https://www.airlines-manager.com/network/showflight/52176667052,https://www.airlines-manager.com/aircraft/show/106107514,15:00,17:29,116,"$30,288.00","$25,281.00"
HNL - LNY,52181070677,HNL-LNY,Q-400,https://www.airlines-manager.com/network/showline/43516637,https://www.airlines-manager.com/network/showflight/52181070677,https://www.airlines-manager.com/aircraft/show/106107514,17:30,19:59,116,"$30,288.00","$25,281.00"
HNL - LNY,52185045403,HNL-LNY,Q-400,https://www.airlines-manager.com/network/showline/43516637,https://www.airlines-manager.com/network/showflight/52185045403,https://www.airlines-manager.com/aircraft/show/106107514,20:00,22:29,116,"$30,288.00","$25,281.00"
HNL - LNY,52188655732,HNL-LNY,Q-400,https://www.airlines-manager.com/network/showline/43516637,https://www.airlines-manager.com/network/showflight/52188655732,https://www.airlines-manager.com/aircraft/show/106107514,22:30,0:59,116,"$30,288.00","$25,281.00"
HNL - MCO,52143768985,HNL 56C-7 B,787-10,https://www.airlines-manager.com/network/showline/48011877,https://www.airlines-manager.com/network/showflight/52143768985,https://www.airlines-manager.com/aircraft/show/111639419,1:00,19:59,592,"$2,277,613.00","$2,117,514.00"
HNL - MCO,52143768986,HNL 56C-6 B,787-10,https://www.airlines-manager.com/network/showline/48011877,https://www.airlines-manager.com/network/showflight/52143768986,https://www.airlines-manager.com/aircraft/show/111639418,4:15,23:14,592,"$2,277,613.00","$2,117,514.00"
HNL - MCO,52163458615,HNL 56C-2 B,787-10,https://www.airlines-manager.com/network/showline/48011877,https://www.airlines-manager.com/network/showflight/52163458615,https://www.airlines-manager.com/aircraft/show/111639414,8:15,3:14,592,"$2,277,613.00","$2,117,514.00"
HNL - MEL,52163458628,HNL 84A-4 F,777-300,https://www.airlines-manager.com/network/showline/45395143,https://www.airlines-manager.com/network/showflight/52163458628,https://www.airlines-manager.com/aircraft/show/95818923,8:30,6:29,832,"$3,528,490.00","$3,227,108.00"
HNL - MEL,52185045391,HNL 84A-7 F,777-300,https://www.airlines-manager.com/network/showline/45395143,https://www.airlines-manager.com/network/showflight/52185045391,https://www.airlines-manager.com/aircraft/show/95818920,20:00,17:59,830,"$3,521,289.00","$3,220,326.00"
HNL - MIA,52163458627,HNL 56A-2 B,787-10,https://www.airlines-manager.com/network/showline/43560807,https://www.airlines-manager.com/network/showflight/52163458627,https://www.airlines-manager.com/aircraft/show/95351591,8:30,3:44,592,"$2,322,346.00","$2,156,085.00"
HNL - MIA,52167946179,HNL 56A-5 B,787-10,https://www.airlines-manager.com/network/showline/43560807,https://www.airlines-manager.com/network/showflight/52167946179,https://www.airlines-manager.com/aircraft/show/95351588,10:45,5:59,592,"$2,322,346.00","$2,156,085.00"
HNL - MIA,52176667077,HNL 56A-4 B,787-10,https://www.airlines-manager.com/network/showline/43560807,https://www.airlines-manager.com/network/showflight/52176667077,https://www.airlines-manager.com/aircraft/show/95351589,15:30,10:44,592,"$2,322,346.00","$2,156,085.00"
HNL - MNL,52157350207,HNL 84A-2 F,777-300,https://www.airlines-manager.com/network/showline/43762944,https://www.airlines-manager.com/network/showflight/52157350207,https://www.airlines-manager.com/aircraft/show/95818925,7:30,4:44,832,"$3,449,291.00","$3,159,994.00"
HNL - MNL,52181070768,HNL 84A-5 F,777-300,https://www.airlines-manager.com/network/showline/43762944,https://www.airlines-manager.com/network/showflight/52181070768,https://www.airlines-manager.com/aircraft/show/95818922,18:30,15:44,832,"$3,449,291.00","$3,159,994.00"
HNL - MSP,52176667116,HNL 56C-1 B,787-10,https://www.airlines-manager.com/network/showline/48011881,https://www.airlines-manager.com/network/showflight/52176667116,https://www.airlines-manager.com/aircraft/show/111639413,16:00,8:14,592,"$1,940,305.00","$1,805,932.00"
HNL - MSP,52181070652,HNL 56C-4 B,787-10,https://www.airlines-manager.com/network/showline/48011881,https://www.airlines-manager.com/network/showflight/52181070652,https://www.airlines-manager.com/aircraft/show/111639416,17:00,9:14,592,"$1,940,305.00","$1,805,932.00"
HNL - MSP,52188655698,HNL 56C-3 B,787-10,https://www.airlines-manager.com/network/showline/48011881,https://www.airlines-manager.com/network/showflight/52188655698,https://www.airlines-manager.com/aircraft/show/111639415,22:15,14:29,591,"$1,937,362.00","$1,803,113.00"
HNL - NAN,52143769246,HNL 84A-7 F,777-300,https://www.airlines-manager.com/network/showline/43541571,https://www.airlines-manager.com/network/showflight/52143769246,https://www.airlines-manager.com/aircraft/show/95818920,3:45,17:14,832,"$2,066,762.00","$1,895,556.00"
HNL - NAN,52181070737,HNL 84A-1 F,777-300,https://www.airlines-manager.com/network/showline/43541571,https://www.airlines-manager.com/network/showflight/52181070737,https://www.airlines-manager.com/aircraft/show/95818926,18:00,7:29,832,"$2,037,755.00","$1,876,203.00"
HNL - OGG,52143769087,HNL Interisland 3,717-200,https://www.airlines-manager.com/network/showline/43516648,https://www.airlines-manager.com/network/showflight/52143769087,https://www.airlines-manager.com/aircraft/show/94803594,1:45,4:14,170,"$51,594.00","$42,796.00"
HNL - OGG,52157349988,HNL Interisland 4,717-200,https://www.airlines-manager.com/network/showline/43516648,https://www.airlines-manager.com/network/showflight/52157349988,https://www.airlines-manager.com/aircraft/show/94803593,4:45,7:14,170,"$51,594.00","$42,796.00"
HNL - OGG,52157349989,HNL Interisland 1,717-200,https://www.airlines-manager.com/network/showline/43516648,https://www.airlines-manager.com/network/showflight/52157349989,https://www.airlines-manager.com/aircraft/show/94803596,6:15,8:44,170,"$51,594.00","$42,796.00"
HNL - OGG,52163458662,HNL Interisland 2,717-200,https://www.airlines-manager.com/network/showline/43516648,https://www.airlines-manager.com/network/showflight/52163458662,https://www.airlines-manager.com/aircraft/show/94803595,9:00,11:29,170,"$51,594.00","$42,796.00"
HNL - OGG,52176667012,HNL Interisland 3,717-200,https://www.airlines-manager.com/network/showline/43516648,https://www.airlines-manager.com/network/showflight/52176667012,https://www.airlines-manager.com/aircraft/show/94803594,15:00,17:29,170,"$51,594.00","$42,796.00"
HNL - OGG,52181070726,HNL Interisland 4,717-200,https://www.airlines-manager.com/network/showline/43516648,https://www.airlines-manager.com/network/showflight/52181070726,https://www.airlines-manager.com/aircraft/show/94803593,18:00,20:29,170,"$51,594.00","$42,796.00"
HNL - OGG,52185045354,HNL Interisland 1,717-200,https://www.airlines-manager.com/network/showline/43516648,https://www.airlines-manager.com/network/showflight/52185045354,https://www.airlines-manager.com/aircraft/show/94803596,19:30,21:59,170,"$51,594.00","$42,796.00"
HNL - OGG,52188655712,HNL Interisland 2,717-200,https://www.airlines-manager.com/network/showline/43516648,https://www.airlines-manager.com/network/showflight/52188655712,https://www.airlines-manager.com/aircraft/show/94803595,22:15,0:44,170,"$51,594.00","$42,796.00"
HNL - ORD,52163458722,HNL 56B-5 B,787-10,https://www.airlines-manager.com/network/showline/43560795,https://www.airlines-manager.com/network/showflight/52163458722,https://www.airlines-manager.com/aircraft/show/109187502,10:00,2:59,592,"$2,079,491.00","$1,910,031.00"
HNL - ORD,52176667121,HNL 56B-7 B,787-10,https://www.airlines-manager.com/network/showline/43560795,https://www.airlines-manager.com/network/showflight/52176667121,https://www.airlines-manager.com/aircraft/show/109187504,16:00,8:59,592,"$2,079,491.00","$1,910,031.00"
HNL - ORD,52188655746,HNL 56B-6 B,787-10,https://www.airlines-manager.com/network/showline/43560795,https://www.airlines-manager.com/network/showflight/52188655746,https://www.airlines-manager.com/aircraft/show/109187503,22:45,15:44,592,"$2,079,491.00","$1,910,031.00"
HNL - PHX,52143769231,HNL 56D-7 B,787-10,https://www.airlines-manager.com/network/showline/43718390,https://www.airlines-manager.com/network/showflight/52143769231,https://www.airlines-manager.com/aircraft/show/112066138,3:30,15:59,592,"$1,512,390.00","$1,401,255.00"
HNL - PHX,52176667064,HNL 56D-6 B,787-10,https://www.airlines-manager.com/network/showline/43718390,https://www.airlines-manager.com/network/showflight/52176667064,https://www.airlines-manager.com/aircraft/show/112066137,15:00,3:29,592,"$1,512,390.00","$1,401,255.00"
HNL - PHX,52176667065,HNL 56D-2 B,787-10,https://www.airlines-manager.com/network/showline/43718390,https://www.airlines-manager.com/network/showflight/52176667065,https://www.airlines-manager.com/aircraft/show/112066133,16:00,4:29,592,"$1,512,390.00","$1,401,255.00"
HNL - PPG,52143769148,HNL CARGO 1,737-700,https://www.airlines-manager.com/network/showline/43998032,https://www.airlines-manager.com/network/showflight/52143769148,https://www.airlines-manager.com/aircraft/show/107564830,2:15,14:29,0,"$206,662.00","$166,187.00"
HNL - PPG,52143769149,HNL-TRW-PPG 1 S,A321-200,https://www.airlines-manager.com/network/showline/43998032,https://www.airlines-manager.com/network/showflight/52143769149,https://www.airlines-manager.com/aircraft/show/88725599,3:30,15:44,380,"$785,919.00","$736,317.00"
HNL - PPG,52176667147,HNL-TRW-PPG 2 S,A321-200,https://www.airlines-manager.com/network/showline/43998032,https://www.airlines-manager.com/network/showflight/52176667147,https://www.airlines-manager.com/aircraft/show/88725598,16:00,4:14,380,"$785,919.00","$736,317.00"
HNL - PPG,52181070733,HNL-TRW-PPG 3 S,A321-200,https://www.airlines-manager.com/network/showline/43998032,https://www.airlines-manager.com/network/showflight/52181070733,https://www.airlines-manager.com/aircraft/show/88725597,18:00,6:14,380,"$785,919.00","$736,317.00"
HNL - PPT,52157349966,HNL-PPT,A321-200,https://www.airlines-manager.com/network/showline/43719628,https://www.airlines-manager.com/network/showflight/52157349966,https://www.airlines-manager.com/aircraft/show/88725600,4:45,17:29,310,"$766,311.00","$713,344.00"
HNL - PPT,52176667037,HNL CARGO 2,737-700,https://www.airlines-manager.com/network/showline/43719628,https://www.airlines-manager.com/network/showflight/52176667037,https://www.airlines-manager.com/aircraft/show/107563068,15:00,3:44,0,"$210,884.00","$168,048.00"
HNL - PPT,52176667038,HNL 84A-6 F,777-300,https://www.airlines-manager.com/network/showline/43719628,https://www.airlines-manager.com/network/showflight/52176667038,https://www.airlines-manager.com/aircraft/show/95818921,15:45,3:44,832,"$1,835,751.00","$1,699,507.00"
HNL - PPT,52181070686,HNL-PPT,A321-200,https://www.airlines-manager.com/network/showline/43719628,https://www.airlines-manager.com/network/showflight/52181070686,https://www.airlines-manager.com/aircraft/show/88725600,17:30,6:14,310,"$688,621.00","$643,176.00"
HNL - SEA,52143769245,HNL 56D-1 B,787-10,https://www.airlines-manager.com/network/showline/48149157,https://www.airlines-manager.com/network/showflight/52143769245,https://www.airlines-manager.com/aircraft/show/112066132,3:45,15:14,592,"$1,411,222.00","$1,309,549.00"
HNL - SEA,52176667115,HNL 56D-1 B,787-10,https://www.airlines-manager.com/network/showline/48149157,https://www.airlines-manager.com/network/showflight/52176667115,https://www.airlines-manager.com/aircraft/show/112066132,16:00,3:29,592,"$1,411,222.00","$1,309,549.00"
HNL - SEA,52181070724,HNL 56D-4 B,787-10,https://www.airlines-manager.com/network/showline/48149157,https://www.airlines-manager.com/network/showflight/52181070724,https://www.airlines-manager.com/aircraft/show/112066135,18:00,5:29,592,"$1,411,222.00","$1,309,549.00"
HNL - SFO,52157350188,HNL-SFO-LAX 1,A321neo,https://www.airlines-manager.com/network/showline/43557863,https://www.airlines-manager.com/network/showflight/52157350188,https://www.airlines-manager.com/aircraft/show/110044458,7:00,18:14,338,"$755,403.00","$696,919.00"
HNL - SFO,52163458667,HNL-SFO-LAX 2,A321neo,https://www.airlines-manager.com/network/showline/43557863,https://www.airlines-manager.com/network/showflight/52163458667,https://www.airlines-manager.com/aircraft/show/110044459,9:00,20:14,338,"$755,403.00","$696,919.00"
HNL - SFO,52167946178,HNL-SFO-LAX 5,A321neo,https://www.airlines-manager.com/network/showline/43557863,https://www.airlines-manager.com/network/showflight/52167946178,https://www.airlines-manager.com/aircraft/show/110044462,10:30,21:44,338,"$755,403.00","$696,919.00"
HNL - SFO,52185045310,HNL-SFO-LAX 3,A321neo,https://www.airlines-manager.com/network/showline/43557863,https://www.airlines-manager.com/network/showflight/52185045310,https://www.airlines-manager.com/aircraft/show/110044460,19:00,6:14,338,"$755,403.00","$696,919.00"
HNL - SFO,52188655567,HNL-SFO-LAX 4,A321neo,https://www.airlines-manager.com/network/showline/43557863,https://www.airlines-manager.com/network/showflight/52188655567,https://www.airlines-manager.com/aircraft/show/110044461,21:00,8:14,338,"$755,403.00","$696,919.00"
HNL - SFO,52188655568,HNL-SFO-LAX 6 B,A319-100,https://www.airlines-manager.com/network/showline/43557863,https://www.airlines-manager.com/network/showflight/52188655568,https://www.airlines-manager.com/aircraft/show/106106389,22:00,9:29,198,"$526,083.00","$476,796.00"
HNL - SIN,52157350022,HNL 84B-4 F,777-300,https://www.airlines-manager.com/network/showline/44044115,https://www.airlines-manager.com/network/showflight/52157350022,https://www.airlines-manager.com/aircraft/show/96807090,5:15,7:29,832,"$4,307,774.00","$3,909,552.00"
HNL - SIN,52181070636,HNL 84B-7 F,777-300,https://www.airlines-manager.com/network/showline/44044115,https://www.airlines-manager.com/network/showflight/52181070636,https://www.airlines-manager.com/aircraft/show/96807087,17:00,19:14,831,"$4,304,296.00","$3,906,301.00"
HNL - SYD,52157350206,HNL 84B-5 F,777-300,https://www.airlines-manager.com/network/showline/43719642,https://www.airlines-manager.com/network/showflight/52157350206,https://www.airlines-manager.com/aircraft/show/96807089,7:30,3:59,832,"$3,329,893.00","$3,022,862.00"
HNL - SYD,52185045335,HNL 84B-1 F,777-300,https://www.airlines-manager.com/network/showline/43719642,https://www.airlines-manager.com/network/showflight/52185045335,https://www.airlines-manager.com/aircraft/show/96807093,19:15,15:44,832,"$3,329,893.00","$3,022,862.00"
HNL - TRW,52143769262,HNL-TRW-PPG 2 S,A321-200,https://www.airlines-manager.com/network/showline/43998029,https://www.airlines-manager.com/network/showflight/52143769262,https://www.airlines-manager.com/aircraft/show/88725598,4:15,15:44,380,"$764,351.00","$719,720.00"
HNL - TRW,52157350107,HNL-TRW-PPG 3 S,A321-200,https://www.airlines-manager.com/network/showline/43998029,https://www.airlines-manager.com/network/showflight/52157350107,https://www.airlines-manager.com/aircraft/show/88725597,6:15,17:44,380,"$764,351.00","$719,720.00"
HNL - TRW,52176667035,HNL CARGO 1,737-700,https://www.airlines-manager.com/network/showline/43998029,https://www.airlines-manager.com/network/showflight/52176667035,https://www.airlines-manager.com/aircraft/show/107564830,15:00,2:14,0,"$192,302.00","$155,736.00"
HNL - TRW,52176667036,HNL-TRW-PPG 1 S,A321-200,https://www.airlines-manager.com/network/showline/43998029,https://www.airlines-manager.com/network/showflight/52176667036,https://www.airlines-manager.com/aircraft/show/88725599,16:00,3:29,380,"$764,351.00","$719,720.00"
HNL - YVR,52143768916,HNL 56D-6 B,787-10,https://www.airlines-manager.com/network/showline/48149164,https://www.airlines-manager.com/network/showflight/52143768916,https://www.airlines-manager.com/aircraft/show/112066137,0:15,11:59,592,"$1,414,047.00","$1,318,641.00"
HNL - YVR,52143768917,HNL 56D-2 B,787-10,https://www.airlines-manager.com/network/showline/48149164,https://www.airlines-manager.com/network/showflight/52143768917,https://www.airlines-manager.com/aircraft/show/112066133,3:30,15:14,592,"$1,414,047.00","$1,318,641.00"
HNL - YVR,52176667114,HNL 56D-7 B,787-10,https://www.airlines-manager.com/network/showline/48149164,https://www.airlines-manager.com/network/showflight/52176667114,https://www.airlines-manager.com/aircraft/show/112066138,16:00,3:44,592,"$1,414,047.00","$1,318,641.00"
IAH - ABQ,52143769011,IAH-CLE-STL 1,A321-200,https://www.airlines-manager.com/network/showline/45490320,https://www.airlines-manager.com/network/showflight/52143769011,https://www.airlines-manager.com/aircraft/show/103600700,1:00,5:59,310,"$316,784.00","$283,467.00"
IAH - ABQ,52143769012,IAH-CLE-STL 5 B,A319-100,https://www.airlines-manager.com/network/showline/45490320,https://www.airlines-manager.com/network/showflight/52143769012,https://www.airlines-manager.com/aircraft/show/110582844,2:30,7:29,198,"$240,770.00","$214,084.00"
IAH - ABQ,52157350078,IAH-CLE-STL 4,A321-200,https://www.airlines-manager.com/network/showline/45490320,https://www.airlines-manager.com/network/showflight/52157350078,https://www.airlines-manager.com/aircraft/show/88725601,6:00,10:59,310,"$316,784.00","$283,467.00"
IAH - ABQ,52172581902,IAH-CLE-STL 3,A321-200,https://www.airlines-manager.com/network/showline/45490320,https://www.airlines-manager.com/network/showflight/52172581902,https://www.airlines-manager.com/aircraft/show/103600702,13:00,17:59,310,"$316,784.00","$283,467.00"
IAH - ABQ,52181070781,IAH-CLE-STL 2,A321-200,https://www.airlines-manager.com/network/showline/45490320,https://www.airlines-manager.com/network/showflight/52181070781,https://www.airlines-manager.com/aircraft/show/103600701,18:45,23:44,310,"$316,784.00","$283,467.00"
IAH - ALB,52143768900,IAH-MHT-ALB 2,737-900ER,https://www.airlines-manager.com/network/showline/48841855,https://www.airlines-manager.com/network/showflight/52143768900,https://www.airlines-manager.com/aircraft/show/114266976,0:15,7:59,320,"$495,250.00","$449,796.00"
IAH - ALB,52143768901,IAH-MHT-ALB 5,ERJ-175,https://www.airlines-manager.com/network/showline/48841855,https://www.airlines-manager.com/network/showflight/52143768901,https://www.airlines-manager.com/aircraft/show/92800067,2:00,9:59,112,"$234,401.00","$207,361.00"
IAH - ALB,52167946326,IAH-MHT-ALB 3,737-900ER,https://www.airlines-manager.com/network/showline/48841855,https://www.airlines-manager.com/network/showflight/52167946326,https://www.airlines-manager.com/aircraft/show/114266971,12:00,19:44,320,"$495,250.00","$449,796.00"
IAH - ALB,52176667026,IAH-MHT-ALB 4,737-900ER,https://www.airlines-manager.com/network/showline/48841855,https://www.airlines-manager.com/network/showflight/52176667026,https://www.airlines-manager.com/aircraft/show/114266970,15:00,22:44,320,"$495,250.00","$449,796.00"
IAH - ALB,52185045430,IAH-MHT-ALB 1,737-900ER,https://www.airlines-manager.com/network/showline/48841855,https://www.airlines-manager.com/network/showflight/52185045430,https://www.airlines-manager.com/aircraft/show/114266972,20:15,3:59,320,"$495,250.00","$449,796.00"
IAH - ANC,52167946309,IAH-ANC-ONT 1,A321-200,https://www.airlines-manager.com/network/showline/47054828,https://www.airlines-manager.com/network/showflight/52167946309,https://www.airlines-manager.com/aircraft/show/108258010,12:00,2:44,310,"$897,007.00","$826,783.00"
IAH - ANC,52172581988,IAH-ANC-ONT 2,A321-200,https://www.airlines-manager.com/network/showline/47054828,https://www.airlines-manager.com/network/showflight/52172581988,https://www.airlines-manager.com/aircraft/show/108258011,14:00,4:44,310,"$897,007.00","$826,783.00"
IAH - ANC,52185045331,IAH-ANC-ONT 3,A321-200,https://www.airlines-manager.com/network/showline/47054828,https://www.airlines-manager.com/network/showflight/52185045331,https://www.airlines-manager.com/aircraft/show/108258012,19:15,9:59,310,"$897,007.00","$826,783.00"
IAH - ANC,52188655607,IAH-ANC-ONT 4,A321-200,https://www.airlines-manager.com/network/showline/47054828,https://www.airlines-manager.com/network/showflight/52188655607,https://www.airlines-manager.com/aircraft/show/108089220,21:15,11:59,310,"$897,007.00","$826,783.00"
IAH - ANC,52191270948,IAH-ANC-ONT 5 B,A319-100,https://www.airlines-manager.com/network/showline/47054828,https://www.airlines-manager.com/network/showflight/52191270948,https://www.airlines-manager.com/aircraft/show/108286957,23:15,13:59,196,"$662,603.00","$606,539.00"
IAH - ATL,52143768898,IAH-LAS-ATL 6,ERJ-175,https://www.airlines-manager.com/network/showline/41475893,https://www.airlines-manager.com/network/showflight/52143768898,https://www.airlines-manager.com/aircraft/show/82323704,0:15,4:59,112,"$146,102.00","$112,061.00"
IAH - ATL,52163458712,IAH-LAS-ATL 5,737-900ER,https://www.airlines-manager.com/network/showline/41475893,https://www.airlines-manager.com/network/showflight/52163458712,https://www.airlines-manager.com/aircraft/show/95894466,10:00,14:44,320,"$306,681.00","$242,606.00"
IAH - ATL,52167946184,IAH-LAS-ATL 1,737-900ER,https://www.airlines-manager.com/network/showline/41475893,https://www.airlines-manager.com/network/showflight/52167946184,https://www.airlines-manager.com/aircraft/show/96256511,10:45,15:29,320,"$306,681.00","$242,606.00"
IAH - ATL,52176667146,IAH-LAS-ATL 3,737-900ER,https://www.airlines-manager.com/network/showline/41475893,https://www.airlines-manager.com/network/showflight/52176667146,https://www.airlines-manager.com/aircraft/show/96183549,16:00,20:44,320,"$306,681.00","$242,606.00"
IAH - ATL,52181070711,IAH-LAS-ATL 4,737-900ER,https://www.airlines-manager.com/network/showline/41475893,https://www.airlines-manager.com/network/showflight/52181070711,https://www.airlines-manager.com/aircraft/show/96177955,17:45,22:29,320,"$306,681.00","$242,606.00"
IAH - ATL,52191270964,IAH-LAS-ATL 2,737-900ER,https://www.airlines-manager.com/network/showline/41475893,https://www.airlines-manager.com/network/showflight/52191270964,https://www.airlines-manager.com/aircraft/show/96250652,23:45,4:29,319,"$304,882.00","$240,835.00"
IAH - AUS,52143769273,IAH-BWI-PHL 2,A321neo,https://www.airlines-manager.com/network/showline/44227440,https://www.airlines-manager.com/network/showflight/52143769273,https://www.airlines-manager.com/aircraft/show/106007214,4:15,6:59,338,"$100,421.00","$76,820.00"
IAH - AUS,52167946231,IAH-BWI-PHL 1,A321neo,https://www.airlines-manager.com/network/showline/44227440,https://www.airlines-manager.com/network/showflight/52167946231,https://www.airlines-manager.com/aircraft/show/106007213,11:00,13:44,338,"$100,421.00","$76,820.00"
IAH - AUS,52167946232,IAH-BWI-PHL 5,A321neo,https://www.airlines-manager.com/network/showline/44227440,https://www.airlines-manager.com/network/showflight/52167946232,https://www.airlines-manager.com/aircraft/show/106007217,12:00,14:44,338,"$100,421.00","$76,820.00"
IAH - AUS,52181070750,IAH-BWI-PHL 4,A321neo,https://www.airlines-manager.com/network/showline/44227440,https://www.airlines-manager.com/network/showflight/52181070750,https://www.airlines-manager.com/aircraft/show/106007216,18:15,20:59,338,"$100,421.00","$76,820.00"
IAH - AUS,52188655637,IAH-BWI-PHL 3,A321neo,https://www.airlines-manager.com/network/showline/44227440,https://www.airlines-manager.com/network/showflight/52188655637,https://www.airlines-manager.com/aircraft/show/106007215,21:30,0:14,267,"$88,024.00","$64,649.00"
IAH - BDL,52157350084,IAH-CLE-STL 1,A321-200,https://www.airlines-manager.com/network/showline/45495448,https://www.airlines-manager.com/network/showflight/52157350084,https://www.airlines-manager.com/aircraft/show/103600700,6:00,13:59,310,"$498,318.00","$455,978.00"
IAH - BDL,52157350085,IAH-CLE-STL 5 B,A319-100,https://www.airlines-manager.com/network/showline/45495448,https://www.airlines-manager.com/network/showflight/52157350085,https://www.airlines-manager.com/aircraft/show/110582844,7:30,15:29,198,"$375,540.00","$341,603.00"
IAH - BDL,52167946258,IAH-CLE-STL 4,A321-200,https://www.airlines-manager.com/network/showline/45495448,https://www.airlines-manager.com/network/showflight/52167946258,https://www.airlines-manager.com/aircraft/show/88725601,11:00,18:59,310,"$498,318.00","$455,978.00"
IAH - BDL,52181070743,IAH-CLE-STL 3,A321-200,https://www.airlines-manager.com/network/showline/45495448,https://www.airlines-manager.com/network/showflight/52181070743,https://www.airlines-manager.com/aircraft/show/103600702,18:00,1:59,310,"$498,318.00","$455,978.00"
IAH - BDL,52185045375,IAH-DFW-STL,ERJ-175,https://www.airlines-manager.com/network/showline/45495448,https://www.airlines-manager.com/network/showflight/52185045375,https://www.airlines-manager.com/aircraft/show/96990010,19:45,3:44,112,"$234,490.00","$206,457.00"
IAH - BDL,52191270969,IAH-CLE-STL 2,A321-200,https://www.airlines-manager.com/network/showline/45495448,https://www.airlines-manager.com/network/showflight/52191270969,https://www.airlines-manager.com/aircraft/show/103600701,23:45,7:44,310,"$498,318.00","$455,978.00"
IAH - BFF,52143769251,IAH-MHT-ALB 1,737-900ER,https://www.airlines-manager.com/network/showline/48841858,https://www.airlines-manager.com/network/showflight/52143769251,https://www.airlines-manager.com/aircraft/show/114266972,4:00,9:44,320,"$365,462.00","$327,584.00"
IAH - BFF,52163458775,IAH-MHT-ALB 2,737-900ER,https://www.airlines-manager.com/network/showline/48841858,https://www.airlines-manager.com/network/showflight/52163458775,https://www.airlines-manager.com/aircraft/show/114266976,10:15,15:59,320,"$365,462.00","$327,584.00"
IAH - BFF,52167946329,IAH-MHT-ALB 5,ERJ-175,https://www.airlines-manager.com/network/showline/48841858,https://www.airlines-manager.com/network/showflight/52167946329,https://www.airlines-manager.com/aircraft/show/92800067,12:00,17:44,112,"$173,194.00","$151,513.00"
IAH - BFF,52185045367,IAH-MHT-ALB 3,737-900ER,https://www.airlines-manager.com/network/showline/48841858,https://www.airlines-manager.com/network/showflight/52185045367,https://www.airlines-manager.com/aircraft/show/114266971,19:45,1:29,320,"$365,462.00","$327,584.00"
IAH - BFF,52188655736,IAH-MHT-ALB 4,737-900ER,https://www.airlines-manager.com/network/showline/48841858,https://www.airlines-manager.com/network/showflight/52188655736,https://www.airlines-manager.com/aircraft/show/114266970,22:45,4:29,320,"$365,462.00","$327,584.00"
IAH - BNA,52143769247,IAH-BOI-BNA 4,A321-200,https://www.airlines-manager.com/network/showline/45737509,https://www.airlines-manager.com/network/showflight/52143769247,https://www.airlines-manager.com/aircraft/show/104258214,4:00,8:44,310,"$301,810.00","$270,601.00"
IAH - BNA,52163458681,IAH-BOI-BNA 3,A321-200,https://www.airlines-manager.com/network/showline/45737509,https://www.airlines-manager.com/network/showflight/52163458681,https://www.airlines-manager.com/aircraft/show/104258213,9:15,13:59,310,"$301,810.00","$270,601.00"
IAH - BNA,52176667011,IAH-BOI-BNA 2,A321-200,https://www.airlines-manager.com/network/showline/45737509,https://www.airlines-manager.com/network/showflight/52176667011,https://www.airlines-manager.com/aircraft/show/104258212,15:00,19:44,310,"$301,810.00","$270,601.00"
IAH - BNA,52188655694,IAH-BOI-BNA 1,A321-200,https://www.airlines-manager.com/network/showline/45737509,https://www.airlines-manager.com/network/showflight/52188655694,https://www.airlines-manager.com/aircraft/show/104258211,22:00,2:44,310,"$301,810.00","$270,601.00"
IAH - BNA,52191270928,IAH-BOI-BNA 5,ERJ-175,https://www.airlines-manager.com/network/showline/45737509,https://www.airlines-manager.com/network/showflight/52191270928,https://www.airlines-manager.com/aircraft/show/103534664,23:00,3:44,112,"$143,442.00","$123,571.00"
IAH - BOG,52157350097,IAH 56A-4 B,787-10,https://www.airlines-manager.com/network/showline/41798688,https://www.airlines-manager.com/network/showflight/52157350097,https://www.airlines-manager.com/aircraft/show/106676235,6:00,15:59,648,"$1,300,449.00","$1,208,157.00"
IAH - BOG,52172582015,IAH 56A-6 B,787-10,https://www.airlines-manager.com/network/showline/41798688,https://www.airlines-manager.com/network/showflight/52172582015,https://www.airlines-manager.com/aircraft/show/106676237,14:00,23:59,648,"$1,300,449.00","$1,208,157.00"
IAH - BOG,52185045386,IAH 56A-1 B,787-10,https://www.airlines-manager.com/network/showline/41798688,https://www.airlines-manager.com/network/showflight/52185045386,https://www.airlines-manager.com/aircraft/show/106676232,20:00,5:59,648,"$1,300,449.00","$1,208,157.00"
IAH - BOI,52143769049,IAH-BOI-BNA 3,A321-200,https://www.airlines-manager.com/network/showline/45737517,https://www.airlines-manager.com/network/showflight/52143769049,https://www.airlines-manager.com/aircraft/show/104258213,1:15,9:14,310,"$500,447.00","$458,820.00"
IAH - BOI,52157350187,IAH-BOI-BNA 2,A321-200,https://www.airlines-manager.com/network/showline/45737517,https://www.airlines-manager.com/network/showflight/52157350187,https://www.airlines-manager.com/aircraft/show/104258212,7:00,14:59,310,"$500,447.00","$458,820.00"
IAH - BOI,52172581968,IAH-BOI-BNA 1,A321-200,https://www.airlines-manager.com/network/showline/45737517,https://www.airlines-manager.com/network/showflight/52172581968,https://www.airlines-manager.com/aircraft/show/104258211,14:00,21:59,310,"$500,447.00","$458,820.00"
IAH - BOI,52176667010,IAH-BOI-BNA 5,ERJ-175,https://www.airlines-manager.com/network/showline/45737517,https://www.airlines-manager.com/network/showflight/52176667010,https://www.airlines-manager.com/aircraft/show/103534664,15:00,22:59,112,"$235,499.00","$207,937.00"
IAH - BOI,52185045415,IAH-BOI-BNA 4,A321-200,https://www.airlines-manager.com/network/showline/45737517,https://www.airlines-manager.com/network/showflight/52185045415,https://www.airlines-manager.com/aircraft/show/104258214,20:00,3:59,310,"$500,447.00","$458,820.00"
IAH - BOS,52143769095,IAH-JFK-LAX 3,757-300,https://www.airlines-manager.com/network/showline/41429011,https://www.airlines-manager.com/network/showflight/52143769095,https://www.airlines-manager.com/aircraft/show/88400800,1:45,9:59,400,"$665,843.00","$604,039.00"
IAH - BOS,52167946274,IAH-JFK-LAX 2,757-300,https://www.airlines-manager.com/network/showline/41429011,https://www.airlines-manager.com/network/showflight/52167946274,https://www.airlines-manager.com/aircraft/show/88400799,11:00,19:14,400,"$665,843.00","$604,039.00"
IAH - BOS,52167946275,IAH-JFK-LAX 4,757-300,https://www.airlines-manager.com/network/showline/41429011,https://www.airlines-manager.com/network/showflight/52167946275,https://www.airlines-manager.com/aircraft/show/88400801,12:00,20:14,400,"$665,843.00","$604,039.00"
IAH - BOS,52181070715,IAH-JFK-LAX 5,757-300,https://www.airlines-manager.com/network/showline/41429011,https://www.airlines-manager.com/network/showflight/52181070715,https://www.airlines-manager.com/aircraft/show/89233038,17:45,1:59,400,"$665,843.00","$604,039.00"
IAH - BOS,52181070716,IAH-JFK-LAX 1,757-300,https://www.airlines-manager.com/network/showline/41429011,https://www.airlines-manager.com/network/showflight/52181070716,https://www.airlines-manager.com/aircraft/show/88400798,18:30,2:44,377,"$643,011.00","$582,160.00"
IAH - BSB,52167946280,IAH 84A-3 E1,777-300,https://www.airlines-manager.com/network/showline/41559619,https://www.airlines-manager.com/network/showflight/52167946280,https://www.airlines-manager.com/aircraft/show/89124076,11:15,5:29,932,"$3,054,380.00","$2,786,446.00"
IAH - BSB,52185045428,IAH 84A-7 E1,777-300,https://www.airlines-manager.com/network/showline/41559619,https://www.airlines-manager.com/network/showflight/52185045428,https://www.airlines-manager.com/aircraft/show/88905140,20:15,14:29,932,"$3,054,380.00","$2,786,446.00"
IAH - BTV,52143768823,IAH-BTV-CAK 3,A321-200,https://www.airlines-manager.com/network/showline/48841709,https://www.airlines-manager.com/network/showflight/52143768823,https://www.airlines-manager.com/aircraft/show/86385103,0:00,8:14,310,"$515,356.00","$473,629.00"
IAH - BTV,52143768824,IAH-BTV-CAK 5,ERJ-175,https://www.airlines-manager.com/network/showline/48841709,https://www.airlines-manager.com/network/showflight/52143768824,https://www.airlines-manager.com/aircraft/show/82543907,4:15,12:29,112,"$242,840.00","$215,065.00"
IAH - BTV,52157350197,IAH-BTV-CAK 2,A321-200,https://www.airlines-manager.com/network/showline/48841709,https://www.airlines-manager.com/network/showflight/52157350197,https://www.airlines-manager.com/aircraft/show/114373409,7:15,15:29,310,"$515,356.00","$473,629.00"
IAH - BTV,52172582013,IAH-BTV-CAK 1,A321-200,https://www.airlines-manager.com/network/showline/48841709,https://www.airlines-manager.com/network/showflight/52172582013,https://www.airlines-manager.com/aircraft/show/114373410,14:00,22:14,310,"$515,356.00","$473,629.00"
IAH - BTV,52181070790,IAH-BTV-CAK 4,A321-200,https://www.airlines-manager.com/network/showline/48841709,https://www.airlines-manager.com/network/showflight/52181070790,https://www.airlines-manager.com/aircraft/show/113994196,18:45,2:59,310,"$515,356.00","$473,629.00"
IAH - BUF,52143769041,IAH-PVD-BUF 4,A321-200,https://www.airlines-manager.com/network/showline/46824184,https://www.airlines-manager.com/network/showflight/52143769041,https://www.airlines-manager.com/aircraft/show/107467127,1:15,8:14,310,"$452,077.00","$413,410.00"
IAH - BUF,52143769042,IAH-PVD-BUF 3,A321-200,https://www.airlines-manager.com/network/showline/46824184,https://www.airlines-manager.com/network/showflight/52143769042,https://www.airlines-manager.com/aircraft/show/107467128,4:00,10:59,310,"$452,077.00","$413,410.00"
IAH - BUF,52172581874,IAH-PVD-BUF 2,A321-200,https://www.airlines-manager.com/network/showline/46824184,https://www.airlines-manager.com/network/showflight/52172581874,https://www.airlines-manager.com/aircraft/show/107467129,13:00,19:59,310,"$452,077.00","$413,410.00"
IAH - BUF,52181070656,IAH-PVD-BUF 5 B,A319-100,https://www.airlines-manager.com/network/showline/46824184,https://www.airlines-manager.com/network/showflight/52181070656,https://www.airlines-manager.com/aircraft/show/110582843,17:00,23:59,198,"$341,249.00","$310,261.00"
IAH - BUF,52188655597,IAH-PVD-BUF 1,A321-200,https://www.airlines-manager.com/network/showline/46824184,https://www.airlines-manager.com/network/showflight/52188655597,https://www.airlines-manager.com/aircraft/show/107467130,21:15,4:14,310,"$452,077.00","$413,410.00"
IAH - BWI,52143768888,IAH-BWI-PHL 3,A321neo,https://www.airlines-manager.com/network/showline/44225049,https://www.airlines-manager.com/network/showflight/52143768888,https://www.airlines-manager.com/aircraft/show/106007215,0:15,6:59,338,"$466,195.00","$424,824.00"
IAH - BWI,52157349990,IAH CARGO 1,737-700,https://www.airlines-manager.com/network/showline/44225049,https://www.airlines-manager.com/network/showflight/52157349990,https://www.airlines-manager.com/aircraft/show/107543798,4:45,11:44,0,"$114,842.00","$84,124.00"
IAH - BWI,52167946230,IAH-BWI-PHL 2,A321neo,https://www.airlines-manager.com/network/showline/44225049,https://www.airlines-manager.com/network/showflight/52167946230,https://www.airlines-manager.com/aircraft/show/106007214,11:00,17:44,338,"$466,195.00","$424,824.00"
IAH - BWI,52172581956,IAH-BWI-PHL 1,A321neo,https://www.airlines-manager.com/network/showline/44225049,https://www.airlines-manager.com/network/showflight/52172581956,https://www.airlines-manager.com/aircraft/show/106007213,13:45,20:29,338,"$466,195.00","$424,824.00"
IAH - BWI,52176666989,IAH-BWI-PHL 5,A321neo,https://www.airlines-manager.com/network/showline/44225049,https://www.airlines-manager.com/network/showflight/52176666989,https://www.airlines-manager.com/aircraft/show/106007217,14:45,21:29,338,"$466,195.00","$424,824.00"
IAH - BWI,52188655571,IAH-BWI-PHL 4,A321neo,https://www.airlines-manager.com/network/showline/44225049,https://www.airlines-manager.com/network/showflight/52188655571,https://www.airlines-manager.com/aircraft/show/106007216,21:00,3:44,338,"$466,195.00","$424,824.00"
IAH - CAK,52143769189,IAH-BTV-CAK 4,A321-200,https://www.airlines-manager.com/network/showline/48841720,https://www.airlines-manager.com/network/showflight/52143769189,https://www.airlines-manager.com/aircraft/show/113994196,3:00,9:14,310,"$391,689.00","$357,254.00"
IAH - CAK,52163458611,IAH-BTV-CAK 3,A321-200,https://www.airlines-manager.com/network/showline/48841720,https://www.airlines-manager.com/network/showflight/52163458611,https://www.airlines-manager.com/aircraft/show/86385103,8:15,14:29,310,"$391,689.00","$357,254.00"
IAH - CAK,52172581851,IAH-BTV-CAK 5,ERJ-175,https://www.airlines-manager.com/network/showline/48841720,https://www.airlines-manager.com/network/showflight/52172581851,https://www.airlines-manager.com/aircraft/show/82543907,13:00,19:14,112,"$185,112.00","$162,558.00"
IAH - CAK,52176667108,IAH-BTV-CAK 2,A321-200,https://www.airlines-manager.com/network/showline/48841720,https://www.airlines-manager.com/network/showflight/52176667108,https://www.airlines-manager.com/aircraft/show/114373409,16:00,22:14,310,"$391,689.00","$357,254.00"
IAH - CAK,52188655700,IAH-BTV-CAK 1,A321-200,https://www.airlines-manager.com/network/showline/48841720,https://www.airlines-manager.com/network/showflight/52188655700,https://www.airlines-manager.com/aircraft/show/114373410,22:15,4:29,290,"$376,280.00","$342,447.00"
IAH - CHS,52143769082,IAH-RIC-SDF 5,ERJ-175,https://www.airlines-manager.com/network/showline/46824157,https://www.airlines-manager.com/network/showflight/52143769082,https://www.airlines-manager.com/aircraft/show/107467211,1:30,7:14,112,"$169,633.00","$148,476.00"
IAH - CHS,52143769083,IAH-RIC-SDF 4,A321-200,https://www.airlines-manager.com/network/showline/46824157,https://www.airlines-manager.com/network/showflight/52143769083,https://www.airlines-manager.com/aircraft/show/107467131,3:30,9:14,310,"$357,666.00","$325,090.00"
IAH - CHS,52167946322,IAH-RIC-SDF 3,A321-200,https://www.airlines-manager.com/network/showline/46824157,https://www.airlines-manager.com/network/showflight/52167946322,https://www.airlines-manager.com/aircraft/show/107467132,12:00,17:44,310,"$357,666.00","$325,090.00"
IAH - CHS,52181070671,IAH-RIC-SDF 2,A321-200,https://www.airlines-manager.com/network/showline/46824157,https://www.airlines-manager.com/network/showflight/52181070671,https://www.airlines-manager.com/aircraft/show/107467133,17:15,22:59,310,"$357,666.00","$325,090.00"
IAH - CHS,52191270970,IAH-RIC-SDF 1,A321-200,https://www.airlines-manager.com/network/showline/46824157,https://www.airlines-manager.com/network/showflight/52191270970,https://www.airlines-manager.com/aircraft/show/107467134,23:45,5:29,310,"$357,666.00","$325,090.00"
IAH - CLE,52143769124,IAH-CLE-STL 3,A321-200,https://www.airlines-manager.com/network/showline/45495444,https://www.airlines-manager.com/network/showflight/52143769124,https://www.airlines-manager.com/aircraft/show/103600702,2:00,8:14,310,"$399,356.00","$362,645.00"
IAH - CLE,52157350214,IAH-CLE-STL 2,A321-200,https://www.airlines-manager.com/network/showline/45495444,https://www.airlines-manager.com/network/showflight/52157350214,https://www.airlines-manager.com/aircraft/show/103600701,7:45,13:59,310,"$399,356.00","$362,645.00"
IAH - CLE,52172582017,IAH-CLE-STL 1,A321-200,https://www.airlines-manager.com/network/showline/45495444,https://www.airlines-manager.com/network/showflight/52172582017,https://www.airlines-manager.com/aircraft/show/103600700,14:00,20:14,310,"$399,356.00","$362,645.00"
IAH - CLE,52176667086,IAH-CLE-STL 5 B,A319-100,https://www.airlines-manager.com/network/showline/45495444,https://www.airlines-manager.com/network/showflight/52176667086,https://www.airlines-manager.com/aircraft/show/110582844,15:30,21:44,198,"$301,641.00","$272,225.00"
IAH - CLE,52185045304,IAH-CLE-STL 4,A321-200,https://www.airlines-manager.com/network/showline/45495444,https://www.airlines-manager.com/network/showflight/52185045304,https://www.airlines-manager.com/aircraft/show/88725601,19:00,1:14,310,"$399,356.00","$362,645.00"
IAH - CLT,52143769239,IAH-SLC-CLT 3,A321-200,https://www.airlines-manager.com/network/showline/42897996,https://www.airlines-manager.com/network/showflight/52143769239,https://www.airlines-manager.com/aircraft/show/93094697,3:45,9:29,310,"$360,219.00","$317,919.00"
IAH - CLT,52163458716,IAH-SLC-CLT 2,A321-200,https://www.airlines-manager.com/network/showline/42897996,https://www.airlines-manager.com/network/showflight/52163458716,https://www.airlines-manager.com/aircraft/show/93094698,10:00,15:44,310,"$360,219.00","$317,919.00"
IAH - CLT,52167946342,IAH-SLC-CLT 6,ERJ-175,https://www.airlines-manager.com/network/showline/42897996,https://www.airlines-manager.com/network/showflight/52167946342,https://www.airlines-manager.com/aircraft/show/93100455,12:00,17:44,112,"$170,471.00","$143,500.00"
IAH - CLT,52181070609,IAH-SLC-CLT 1,A321-200,https://www.airlines-manager.com/network/showline/42897996,https://www.airlines-manager.com/network/showflight/52181070609,https://www.airlines-manager.com/aircraft/show/93094699,16:45,22:29,310,"$360,219.00","$317,919.00"
IAH - CLT,52181070610,IAH-SLC-CLT 5,A321-200,https://www.airlines-manager.com/network/showline/42897996,https://www.airlines-manager.com/network/showflight/52181070610,https://www.airlines-manager.com/aircraft/show/93094695,18:45,0:29,310,"$360,219.00","$317,919.00"
IAH - CLT,52188655695,IAH-SLC-CLT 4,A321-200,https://www.airlines-manager.com/network/showline/42897996,https://www.airlines-manager.com/network/showflight/52188655695,https://www.airlines-manager.com/aircraft/show/93094696,22:00,3:44,310,"$360,219.00","$317,919.00"
IAH - CMH,52157350185,IAH-RNO-MCI 1,A321-200,https://www.airlines-manager.com/network/showline/45594509,https://www.airlines-manager.com/network/showflight/52157350185,https://www.airlines-manager.com/aircraft/show/103882355,7:00,12:59,310,"$377,713.00","$342,446.00"
IAH - CMH,52167946256,IAH-RNO-MCI 4,A321-200,https://www.airlines-manager.com/network/showline/45594509,https://www.airlines-manager.com/network/showflight/52167946256,https://www.airlines-manager.com/aircraft/show/103882358,11:00,16:59,310,"$377,713.00","$342,446.00"
IAH - CMH,52167946257,IAH-RNO-MCI 5,ERJ-175,https://www.airlines-manager.com/network/showline/45594509,https://www.airlines-manager.com/network/showflight/52167946257,https://www.airlines-manager.com/aircraft/show/105099861,12:00,17:59,112,"$178,483.00","$155,603.00"
IAH - CMH,52185045338,IAH-RNO-MCI 3,A321-200,https://www.airlines-manager.com/network/showline/45594509,https://www.airlines-manager.com/network/showflight/52185045338,https://www.airlines-manager.com/aircraft/show/103882357,19:15,1:14,310,"$377,713.00","$342,446.00"
IAH - CMH,52191270925,IAH-RNO-MCI 2,A321-200,https://www.airlines-manager.com/network/showline/45594509,https://www.airlines-manager.com/network/showflight/52191270925,https://www.airlines-manager.com/aircraft/show/103882356,23:00,4:59,310,"$377,713.00","$342,446.00"
IAH - COS,52143769094,IAH-RNO-MCI 1,A321-200,https://www.airlines-manager.com/network/showline/45594506,https://www.airlines-manager.com/network/showflight/52143769094,https://www.airlines-manager.com/aircraft/show/103882355,1:45,6:59,310,"$330,515.00","$297,600.00"
IAH - COS,52157350074,IAH-RNO-MCI 4,A321-200,https://www.airlines-manager.com/network/showline/45594506,https://www.airlines-manager.com/network/showflight/52157350074,https://www.airlines-manager.com/aircraft/show/103882358,5:45,10:59,310,"$330,515.00","$297,600.00"
IAH - COS,52172581992,IAH-RNO-MCI 3,A321-200,https://www.airlines-manager.com/network/showline/45594506,https://www.airlines-manager.com/network/showflight/52172581992,https://www.airlines-manager.com/aircraft/show/103882357,14:00,19:14,310,"$330,515.00","$297,600.00"
IAH - COS,52181070708,IAH-RNO-MCI 2,A321-200,https://www.airlines-manager.com/network/showline/45594506,https://www.airlines-manager.com/network/showflight/52181070708,https://www.airlines-manager.com/aircraft/show/103882356,17:45,22:59,310,"$330,515.00","$297,600.00"
IAH - COS,52188655757,IAH-RNO-MCI 5,ERJ-175,https://www.airlines-manager.com/network/showline/45594506,https://www.airlines-manager.com/network/showflight/52188655757,https://www.airlines-manager.com/aircraft/show/105099861,22:45,3:59,111,"$156,553.00","$135,427.00"
IAH - CUN,52143769010,IAH 56A-4 B,787-10,https://www.airlines-manager.com/network/showline/41805427,https://www.airlines-manager.com/network/showflight/52143769010,https://www.airlines-manager.com/aircraft/show/106676235,1:00,5:59,648,"$623,212.00","$570,103.00"
IAH - CUN,52172581833,IAH 56A-5 B,787-10,https://www.airlines-manager.com/network/showline/41805427,https://www.airlines-manager.com/network/showflight/52172581833,https://www.airlines-manager.com/aircraft/show/106676236,12:30,17:29,648,"$623,212.00","$570,103.00"
IAH - CUN,52185045439,IAH 56A-7 B,787-10,https://www.airlines-manager.com/network/showline/41805427,https://www.airlines-manager.com/network/showflight/52185045439,https://www.airlines-manager.com/aircraft/show/106676238,20:30,1:29,648,"$623,212.00","$570,103.00"
IAH - CVG,52143768918,IAH-SMF-CVG 4,737-900ER,https://www.airlines-manager.com/network/showline/44841050,https://www.airlines-manager.com/network/showflight/52143768918,https://www.airlines-manager.com/aircraft/show/99093332,0:15,5:44,320,"$346,528.00","$305,827.00"
IAH - CVG,52143768919,IAH-SMF-CVG 3,737-900ER,https://www.airlines-manager.com/network/showline/44841050,https://www.airlines-manager.com/network/showflight/52143768919,https://www.airlines-manager.com/aircraft/show/99093333,4:00,9:29,320,"$346,528.00","$305,827.00"
IAH - CVG,52163458587,IAH-SMF-CVG 2,737-900ER,https://www.airlines-manager.com/network/showline/44841050,https://www.airlines-manager.com/network/showflight/52163458587,https://www.airlines-manager.com/aircraft/show/99093334,8:00,13:29,320,"$346,528.00","$305,827.00"
IAH - CVG,52172582000,IAH-SMF-CVG 1,737-900ER,https://www.airlines-manager.com/network/showline/44841050,https://www.airlines-manager.com/network/showflight/52172582000,https://www.airlines-manager.com/aircraft/show/99093335,14:00,19:29,320,"$346,528.00","$305,827.00"
IAH - CVG,52176667089,IAH CARGO 2,A320-200,https://www.airlines-manager.com/network/showline/44841050,https://www.airlines-manager.com/network/showflight/52176667089,https://www.airlines-manager.com/aircraft/show/101412921,15:45,21:14,0,"$108,250.00","$74,069.00"
IAH - CVG,52176667090,IAH-SMF-CVG 5 B,A319-100,https://www.airlines-manager.com/network/showline/44841050,https://www.airlines-manager.com/network/showflight/52176667090,https://www.airlines-manager.com/aircraft/show/106499070,16:00,21:29,198,"$262,899.00","$234,372.00"
IAH - DEN,52167946301,IAH-SEA-DEN 5,A321neo,https://www.airlines-manager.com/network/showline/41444690,https://www.airlines-manager.com/network/showflight/52167946301,https://www.airlines-manager.com/aircraft/show/105562975,12:00,17:29,338,"$377,038.00","$323,804.00"
IAH - DEN,52172581885,IAH-SEA-DEN 1,A321neo,https://www.airlines-manager.com/network/showline/41444690,https://www.airlines-manager.com/network/showflight/52172581885,https://www.airlines-manager.com/aircraft/show/105562971,13:00,18:29,338,"$377,038.00","$323,804.00"
IAH - DEN,52188655718,IAH-SEA-DEN 2,A321neo,https://www.airlines-manager.com/network/showline/41444690,https://www.airlines-manager.com/network/showflight/52188655718,https://www.airlines-manager.com/aircraft/show/105562972,22:30,3:59,338,"$377,038.00","$323,804.00"
IAH - DEN,52191270914,IAH-SEA-DEN 3,A321neo,https://www.airlines-manager.com/network/showline/41444690,https://www.airlines-manager.com/network/showflight/52191270914,https://www.airlines-manager.com/aircraft/show/105562973,23:00,4:29,338,"$377,038.00","$323,804.00"
IAH - DEN,52191270915,IAH CARGO 1,737-700,https://www.airlines-manager.com/network/showline/41444690,https://www.airlines-manager.com/network/showflight/52191270915,https://www.airlines-manager.com/aircraft/show/107543798,23:15,4:44,0,"$93,314.00","$57,257.00"
IAH - DEN,52191270916,IAH-SEA-DEN 4,A321neo,https://www.airlines-manager.com/network/showline/41444690,https://www.airlines-manager.com/network/showflight/52191270916,https://www.airlines-manager.com/aircraft/show/105562974,23:30,4:59,338,"$377,038.00","$323,804.00"
IAH - DFW,52143768987,IAH-SMF-CVG 3,737-900ER,https://www.airlines-manager.com/network/showline/41920952,https://www.airlines-manager.com/network/showflight/52143768987,https://www.airlines-manager.com/aircraft/show/99093333,1:00,3:59,320,"$130,454.00","$82,860.00"
IAH - DFW,52157350000,IAH-SMF-CVG 2,737-900ER,https://www.airlines-manager.com/network/showline/41920952,https://www.airlines-manager.com/network/showflight/52157350000,https://www.airlines-manager.com/aircraft/show/99093334,5:00,7:59,320,"$130,454.00","$82,860.00"
IAH - DFW,52167946260,IAH-SMF-CVG 1,737-900ER,https://www.airlines-manager.com/network/showline/41920952,https://www.airlines-manager.com/network/showflight/52167946260,https://www.airlines-manager.com/aircraft/show/99093335,11:00,13:59,320,"$130,454.00","$82,860.00"
IAH - DFW,52167946261,IAH-DFW-STL,ERJ-175,https://www.airlines-manager.com/network/showline/41920952,https://www.airlines-manager.com/network/showflight/52167946261,https://www.airlines-manager.com/aircraft/show/96990010,12:00,14:59,112,"$58,275.00","$33,825.00"
IAH - DFW,52172581871,IAH CARGO 1,737-700,https://www.airlines-manager.com/network/showline/41920952,https://www.airlines-manager.com/network/showflight/52172581871,https://www.airlines-manager.com/aircraft/show/107543798,13:00,15:59,0,"$39,216.00","$14,254.00"
IAH - DFW,52172581872,IAH-SMF-CVG 5 B,A319-100,https://www.airlines-manager.com/network/showline/41920952,https://www.airlines-manager.com/network/showflight/52172581872,https://www.airlines-manager.com/aircraft/show/106499070,13:00,15:59,198,"$98,071.00","$65,983.00"
IAH - DFW,52188655601,IAH-SMF-CVG 4,737-900ER,https://www.airlines-manager.com/network/showline/41920952,https://www.airlines-manager.com/network/showflight/52188655601,https://www.airlines-manager.com/aircraft/show/99093332,21:15,0:14,320,"$130,454.00","$82,860.00"
IAH - DSM,52143769218,IAH-FAT-SAV 1,737-900ER,https://www.airlines-manager.com/network/showline/47654556,https://www.airlines-manager.com/network/showflight/52143769218,https://www.airlines-manager.com/aircraft/show/110424761,3:15,8:29,320,"$331,896.00","$296,966.00"
IAH - DSM,52163458647,IAH-FAT-SAV 4,737-900ER,https://www.airlines-manager.com/network/showline/47654556,https://www.airlines-manager.com/network/showflight/52163458647,https://www.airlines-manager.com/aircraft/show/110424758,8:45,13:59,320,"$331,896.00","$296,966.00"
IAH - DSM,52172581975,IAH-FAT-SAV 3,737-900ER,https://www.airlines-manager.com/network/showline/47654556,https://www.airlines-manager.com/network/showflight/52172581975,https://www.airlines-manager.com/aircraft/show/110424759,14:00,19:14,320,"$331,896.00","$296,966.00"
IAH - DSM,52181070775,IAH-FAT-SAV 2,737-900ER,https://www.airlines-manager.com/network/showline/47654556,https://www.airlines-manager.com/network/showflight/52181070775,https://www.airlines-manager.com/aircraft/show/110424760,18:30,23:44,320,"$331,896.00","$296,966.00"
IAH - DTW,52143768924,IAH-MIA-ORD 1,A321-200,https://www.airlines-manager.com/network/showline/41960920,https://www.airlines-manager.com/network/showflight/52143768924,https://www.airlines-manager.com/aircraft/show/90183184,0:30,6:44,310,"$394,162.00","$349,405.00"
IAH - DTW,52143768925,IAH-MIA-ORD 5,A321-200,https://www.airlines-manager.com/network/showline/41960920,https://www.airlines-manager.com/network/showflight/52143768925,https://www.airlines-manager.com/aircraft/show/90183180,2:30,8:44,310,"$394,162.00","$349,405.00"
IAH - DTW,52157350081,IAH-MIA-ORD 4,A321-200,https://www.airlines-manager.com/network/showline/41960920,https://www.airlines-manager.com/network/showflight/52157350081,https://www.airlines-manager.com/aircraft/show/90183181,6:00,12:14,310,"$394,162.00","$349,405.00"
IAH - DTW,52172581929,IAH-MIA-ORD 3,A321-200,https://www.airlines-manager.com/network/showline/41960920,https://www.airlines-manager.com/network/showflight/52172581929,https://www.airlines-manager.com/aircraft/show/90183182,13:00,19:14,310,"$394,162.00","$349,405.00"
IAH - DTW,52181070785,IAH-MIA-ORD 2,A321-200,https://www.airlines-manager.com/network/showline/41960920,https://www.airlines-manager.com/network/showflight/52181070785,https://www.airlines-manager.com/aircraft/show/90183183,18:45,0:59,310,"$394,162.00","$349,405.00"
IAH - DTW,52185045452,IAH-MIA-ORD 6 S,ERJ-175,https://www.airlines-manager.com/network/showline/41960920,https://www.airlines-manager.com/network/showflight/52185045452,https://www.airlines-manager.com/aircraft/show/90140936,20:45,2:59,135,"$185,150.00","$156,673.00"
IAH - ELP,52143769235,IAH-PBI-RSW 3,A321-200,https://www.airlines-manager.com/network/showline/45920394,https://www.airlines-manager.com/network/showflight/52143769235,https://www.airlines-manager.com/aircraft/show/104717245,3:30,8:14,310,"$299,531.00","$269,174.00"
IAH - ELP,52167946252,IAH-PBI-RSW 2,A321-200,https://www.airlines-manager.com/network/showline/45920394,https://www.airlines-manager.com/network/showflight/52167946252,https://www.airlines-manager.com/aircraft/show/104717246,11:00,15:44,310,"$299,531.00","$269,174.00"
IAH - ELP,52181070605,IAH-PBI-RSW 1,A321-200,https://www.airlines-manager.com/network/showline/45920394,https://www.airlines-manager.com/network/showflight/52181070605,https://www.airlines-manager.com/aircraft/show/104717247,16:45,21:29,310,"$299,531.00","$269,174.00"
IAH - ELP,52185045315,IAH-PBI-RSW 5,ERJ-175,https://www.airlines-manager.com/network/showline/45920394,https://www.airlines-manager.com/network/showflight/52185045315,https://www.airlines-manager.com/aircraft/show/104743902,19:00,23:44,112,"$142,750.00","$123,373.00"
IAH - ELP,52188655692,IAH-PBI-RSW 4,A321-200,https://www.airlines-manager.com/network/showline/45920394,https://www.airlines-manager.com/network/showflight/52188655692,https://www.airlines-manager.com/aircraft/show/104717244,22:00,2:44,310,"$299,531.00","$269,174.00"
IAH - EZE,52143769254,IAH 84A-2 E1,777-300,https://www.airlines-manager.com/network/showline/41556672,https://www.airlines-manager.com/network/showflight/52143769254,https://www.airlines-manager.com/aircraft/show/89439130,4:00,0:29,932,"$3,363,756.00","$3,066,494.00"
IAH - EZE,52157350058,IAH 84A-4 E1,777-300,https://www.airlines-manager.com/network/showline/41556672,https://www.airlines-manager.com/network/showflight/52157350058,https://www.airlines-manager.com/aircraft/show/89124075,5:30,1:59,932,"$3,363,756.00","$3,066,494.00"
IAH - FAR,52143769051,IAH-MSO-FAR 4,737-900ER,https://www.airlines-manager.com/network/showline/47654615,https://www.airlines-manager.com/network/showflight/52143769051,https://www.airlines-manager.com/aircraft/show/110424754,1:30,8:14,320,"$417,281.00","$376,834.00"
IAH - FAR,52143769052,IAH-MSO-FAR 3,737-900ER,https://www.airlines-manager.com/network/showline/47654615,https://www.airlines-manager.com/network/showflight/52143769052,https://www.airlines-manager.com/aircraft/show/110424755,4:15,10:59,320,"$417,281.00","$376,834.00"
IAH - FAR,52167946345,IAH-MSO-FAR 2,737-900ER,https://www.airlines-manager.com/network/showline/47654615,https://www.airlines-manager.com/network/showflight/52167946345,https://www.airlines-manager.com/aircraft/show/110424756,12:00,18:44,320,"$417,281.00","$376,834.00"
IAH - FAR,52188655675,IAH-MSO-FAR 1,737-900ER,https://www.airlines-manager.com/network/showline/47654615,https://www.airlines-manager.com/network/showflight/52188655675,https://www.airlines-manager.com/aircraft/show/110424757,22:00,4:44,320,"$417,281.00","$376,834.00"
IAH - FAT,52143769253,IAH-FAT-SAV 2,737-900ER,https://www.airlines-manager.com/network/showline/47654561,https://www.airlines-manager.com/network/showflight/52143769253,https://www.airlines-manager.com/aircraft/show/110424760,4:00,11:44,320,"$496,975.00","$451,522.00"
IAH - FAT,52172581976,IAH-FAT-SAV 1,737-900ER,https://www.airlines-manager.com/network/showline/47654561,https://www.airlines-manager.com/network/showflight/52172581976,https://www.airlines-manager.com/aircraft/show/110424761,14:00,21:44,320,"$496,975.00","$451,522.00"
IAH - FAT,52181070756,IAH-FAT-SAV 4,737-900ER,https://www.airlines-manager.com/network/showline/47654561,https://www.airlines-manager.com/network/showflight/52181070756,https://www.airlines-manager.com/aircraft/show/110424758,18:15,1:59,320,"$496,975.00","$451,522.00"
IAH - FAT,52191270953,IAH-FAT-SAV 3,737-900ER,https://www.airlines-manager.com/network/showline/47654561,https://www.airlines-manager.com/network/showflight/52191270953,https://www.airlines-manager.com/aircraft/show/110424759,23:30,7:14,319,"$494,123.00","$448,730.00"
IAH - FLL,52143768942,IAH-SLC-CLT 5,A321-200,https://www.airlines-manager.com/network/showline/42890581,https://www.airlines-manager.com/network/showflight/52143768942,https://www.airlines-manager.com/aircraft/show/93094695,0:30,6:14,310,"$366,885.00","$329,657.00"
IAH - FLL,52143768943,IAH-SLC-CLT 4,A321-200,https://www.airlines-manager.com/network/showline/42890581,https://www.airlines-manager.com/network/showflight/52143768943,https://www.airlines-manager.com/aircraft/show/93094696,3:45,9:29,310,"$366,885.00","$329,657.00"
IAH - FLL,52163458715,IAH-SLC-CLT 3,A321-200,https://www.airlines-manager.com/network/showline/42890581,https://www.airlines-manager.com/network/showflight/52163458715,https://www.airlines-manager.com/aircraft/show/93094697,10:00,15:44,310,"$366,885.00","$329,657.00"
IAH - FLL,52176667099,IAH-SLC-CLT 2,A321-200,https://www.airlines-manager.com/network/showline/42890581,https://www.airlines-manager.com/network/showflight/52176667099,https://www.airlines-manager.com/aircraft/show/93094698,15:45,21:29,310,"$366,885.00","$329,657.00"
IAH - FLL,52181070713,IAH-SLC-CLT 6,ERJ-175,https://www.airlines-manager.com/network/showline/42890581,https://www.airlines-manager.com/network/showflight/52181070713,https://www.airlines-manager.com/aircraft/show/93100455,17:45,23:29,112,"$174,049.00","$150,029.00"
IAH - FLL,52188655719,IAH-SLC-CLT 1,A321-200,https://www.airlines-manager.com/network/showline/42890581,https://www.airlines-manager.com/network/showflight/52188655719,https://www.airlines-manager.com/aircraft/show/93094699,22:30,4:14,310,"$366,885.00","$329,657.00"
IAH - FSD,52157349981,IAH-MSO-FAR 1,737-900ER,https://www.airlines-manager.com/network/showline/47654619,https://www.airlines-manager.com/network/showflight/52157349981,https://www.airlines-manager.com/aircraft/show/110424757,4:45,10:29,320,"$361,755.00","$324,920.00"
IAH - FSD,52163458607,IAH-MSO-FAR 4,737-900ER,https://www.airlines-manager.com/network/showline/47654619,https://www.airlines-manager.com/network/showflight/52163458607,https://www.airlines-manager.com/aircraft/show/110424754,8:15,13:59,320,"$361,755.00","$324,920.00"
IAH - FSD,52167946204,IAH-MSO-FAR 3,737-900ER,https://www.airlines-manager.com/network/showline/47654619,https://www.airlines-manager.com/network/showflight/52167946204,https://www.airlines-manager.com/aircraft/show/110424755,11:00,16:44,320,"$361,755.00","$324,920.00"
IAH - FSD,52181070778,IAH-MSO-FAR 2,737-900ER,https://www.airlines-manager.com/network/showline/47654619,https://www.airlines-manager.com/network/showflight/52181070778,https://www.airlines-manager.com/aircraft/show/110424756,18:45,0:29,279,"$333,633.00","$297,838.00"
IAH - GDL,52157349987,IAH-YYC-YUL 1,757-300,https://www.airlines-manager.com/network/showline/48842057,https://www.airlines-manager.com/network/showflight/52157349987,https://www.airlines-manager.com/aircraft/show/114266977,4:45,9:59,400,"$437,939.00","$395,426.00"
IAH - GDL,52167946181,IAH-YYC-YUL 4,757-300,https://www.airlines-manager.com/network/showline/48842057,https://www.airlines-manager.com/network/showflight/52167946181,https://www.airlines-manager.com/aircraft/show/114266980,10:45,15:59,400,"$437,939.00","$395,426.00"
IAH - GDL,52167946182,IAH-YYC-YUL 3,757-300,https://www.airlines-manager.com/network/showline/48842057,https://www.airlines-manager.com/network/showflight/52167946182,https://www.airlines-manager.com/aircraft/show/114266979,12:00,17:14,400,"$437,939.00","$395,426.00"
IAH - GDL,52185045397,IAH-YYC-YUL 2,757-300,https://www.airlines-manager.com/network/showline/48842057,https://www.airlines-manager.com/network/showflight/52185045397,https://www.airlines-manager.com/aircraft/show/114266978,20:00,1:14,354,"$394,146.00","$352,857.00"
IAH - GIG,52143768866,IAH 84A-7 E1,777-300,https://www.airlines-manager.com/network/showline/41556659,https://www.airlines-manager.com/network/showflight/52143768866,https://www.airlines-manager.com/aircraft/show/88905140,0:00,20:14,932,"$3,374,644.00","$3,071,999.00"
IAH - GIG,52143768867,IAH 84A-5 E1,777-300,https://www.airlines-manager.com/network/showline/41556659,https://www.airlines-manager.com/network/showflight/52143768867,https://www.airlines-manager.com/aircraft/show/89124074,2:00,22:14,932,"$3,374,644.00","$3,071,999.00"
IAH - GRU,52143769007,IAH 56A-7 B,787-10,https://www.airlines-manager.com/network/showline/41769042,https://www.airlines-manager.com/network/showflight/52143769007,https://www.airlines-manager.com/aircraft/show/106676238,1:00,20:29,648,"$2,475,542.00","$2,305,900.00"
IAH - GRU,52167946221,IAH 56A-2 B,787-10,https://www.airlines-manager.com/network/showline/41769042,https://www.airlines-manager.com/network/showflight/52167946221,https://www.airlines-manager.com/aircraft/show/106676233,11:00,6:29,648,"$2,475,542.00","$2,305,900.00"
IAH - GRU,52181070625,IAH 56A-4 B,787-10,https://www.airlines-manager.com/network/showline/41769042,https://www.airlines-manager.com/network/showflight/52181070625,https://www.airlines-manager.com/aircraft/show/106676235,17:00,12:29,648,"$2,475,542.00","$2,305,900.00"
IAH - IAD,52143769223,IAH-IAD-SAN 6,ERJ-175,https://www.airlines-manager.com/network/showline/44653691,https://www.airlines-manager.com/network/showflight/52143769223,https://www.airlines-manager.com/aircraft/show/105400635,3:30,10:14,112,"$198,826.00","$170,572.00"
IAH - IAD,52157350177,IAH-IAD-SAN 2,737-900ER,https://www.airlines-manager.com/network/showline/44653691,https://www.airlines-manager.com/network/showflight/52157350177,https://www.airlines-manager.com/aircraft/show/98578923,6:45,13:29,320,"$421,738.00","$372,154.00"
IAH - IAD,52163458699,IAH-IAD-SAN 5,737-900ER,https://www.airlines-manager.com/network/showline/44653691,https://www.airlines-manager.com/network/showflight/52163458699,https://www.airlines-manager.com/aircraft/show/98578920,9:45,16:29,320,"$421,738.00","$372,154.00"
IAH - IAD,52172581914,IAH-IAD-SAN 1,737-900ER,https://www.airlines-manager.com/network/showline/44653691,https://www.airlines-manager.com/network/showflight/52172581914,https://www.airlines-manager.com/aircraft/show/98578924,13:00,19:44,320,"$421,738.00","$372,154.00"
IAH - IAD,52181070742,IAH-IAD-SAN 4,737-900ER,https://www.airlines-manager.com/network/showline/44653691,https://www.airlines-manager.com/network/showflight/52181070742,https://www.airlines-manager.com/aircraft/show/98578921,18:00,0:44,320,"$421,738.00","$372,154.00"
IAH - IAD,52188655636,IAH-IAD-SAN 3,737-900ER,https://www.airlines-manager.com/network/showline/44653691,https://www.airlines-manager.com/network/showflight/52188655636,https://www.airlines-manager.com/aircraft/show/98578922,21:30,4:14,320,"$421,738.00","$372,154.00"
IAH - ICT,52163458698,IAH-FAT-SAV 1,737-900ER,https://www.airlines-manager.com/network/showline/47654551,https://www.airlines-manager.com/network/showflight/52163458698,https://www.airlines-manager.com/aircraft/show/110424761,9:45,13:59,320,"$249,865.00","$218,281.00"
IAH - ICT,52172581974,IAH-FAT-SAV 4,737-900ER,https://www.airlines-manager.com/network/showline/47654551,https://www.airlines-manager.com/network/showflight/52172581974,https://www.airlines-manager.com/aircraft/show/110424758,14:00,18:14,320,"$249,865.00","$218,281.00"
IAH - ICT,52185045336,IAH-FAT-SAV 3,737-900ER,https://www.airlines-manager.com/network/showline/47654551,https://www.airlines-manager.com/network/showflight/52185045336,https://www.airlines-manager.com/aircraft/show/110424759,19:15,23:29,320,"$249,865.00","$218,281.00"
IAH - ICT,52191270982,IAH-FAT-SAV 2,737-900ER,https://www.airlines-manager.com/network/showline/47654551,https://www.airlines-manager.com/network/showflight/52191270982,https://www.airlines-manager.com/aircraft/show/110424760,23:45,3:59,314,"$247,045.00","$215,549.00"
IAH - IND,52143768839,IAH-PIT-RDU 1,A321-200,https://www.airlines-manager.com/network/showline/45170732,https://www.airlines-manager.com/network/showflight/52143768839,https://www.airlines-manager.com/aircraft/show/100684074,0:00,5:29,310,"$343,007.00","$309,141.00"
IAH - IND,52157349983,IAH-PIT-RDU 5 B,A319-100,https://www.airlines-manager.com/network/showline/45170732,https://www.airlines-manager.com/network/showflight/52157349983,https://www.airlines-manager.com/aircraft/show/110582845,4:45,10:14,198,"$260,075.00","$232,946.00"
IAH - IND,52157349984,IAH-PIT-RDU 4,A321-200,https://www.airlines-manager.com/network/showline/45170732,https://www.airlines-manager.com/network/showflight/52157349984,https://www.airlines-manager.com/aircraft/show/100684071,6:00,11:29,310,"$343,007.00","$309,141.00"
IAH - IND,52167946284,IAH-PIT-RDU 3,A321-200,https://www.airlines-manager.com/network/showline/45170732,https://www.airlines-manager.com/network/showflight/52167946284,https://www.airlines-manager.com/aircraft/show/100684072,11:30,16:59,310,"$343,007.00","$309,141.00"
IAH - IND,52181070710,IAH-PIT-RDU 2,A321-200,https://www.airlines-manager.com/network/showline/45170732,https://www.airlines-manager.com/network/showflight/52181070710,https://www.airlines-manager.com/aircraft/show/100684073,17:45,23:14,309,"$342,000.00","$308,163.00"
IAH - JAN,52143768923,IAH-MSO-FAR 2,737-900ER,https://www.airlines-manager.com/network/showline/47654614,https://www.airlines-manager.com/network/showflight/52143768923,https://www.airlines-manager.com/aircraft/show/110424756,0:30,3:59,320,"$176,845.00","$149,394.00"
IAH - JAN,52167946173,IAH-MSO-FAR 1,737-900ER,https://www.airlines-manager.com/network/showline/47654614,https://www.airlines-manager.com/network/showflight/52167946173,https://www.airlines-manager.com/aircraft/show/110424757,10:30,13:59,320,"$176,845.00","$149,394.00"
IAH - JAN,52172581979,IAH-MSO-FAR 4,737-900ER,https://www.airlines-manager.com/network/showline/47654614,https://www.airlines-manager.com/network/showflight/52172581979,https://www.airlines-manager.com/aircraft/show/110424754,14:00,17:29,320,"$176,845.00","$149,394.00"
IAH - JAN,52181070602,IAH-MSO-FAR 3,737-900ER,https://www.airlines-manager.com/network/showline/47654614,https://www.airlines-manager.com/network/showflight/52181070602,https://www.airlines-manager.com/aircraft/show/110424755,16:45,20:14,305,"$171,827.00","$144,517.00"
IAH - JAX,52143769190,IAH-PBI-RSW 1,A321-200,https://www.airlines-manager.com/network/showline/45920385,https://www.airlines-manager.com/network/showflight/52143769190,https://www.airlines-manager.com/aircraft/show/104717247,3:00,8:14,310,"$336,752.00","$304,524.00"
IAH - JAX,52163458583,IAH-PBI-RSW 5,ERJ-175,https://www.airlines-manager.com/network/showline/45920385,https://www.airlines-manager.com/network/showflight/52163458583,https://www.airlines-manager.com/aircraft/show/104743902,8:00,13:14,112,"$159,712.00","$138,952.00"
IAH - JAX,52167946250,IAH-PBI-RSW 4,A321-200,https://www.airlines-manager.com/network/showline/45920385,https://www.airlines-manager.com/network/showflight/52167946250,https://www.airlines-manager.com/aircraft/show/104717244,11:00,16:14,310,"$336,752.00","$304,524.00"
IAH - JAX,52176667166,IAH-PBI-RSW 3,A321-200,https://www.airlines-manager.com/network/showline/45920385,https://www.airlines-manager.com/network/showflight/52176667166,https://www.airlines-manager.com/aircraft/show/104717245,16:30,21:44,310,"$336,752.00","$304,524.00"
IAH - JAX,52188655587,IAH-PBI-RSW 2,A321-200,https://www.airlines-manager.com/network/showline/45920385,https://www.airlines-manager.com/network/showflight/52188655587,https://www.airlines-manager.com/aircraft/show/104717246,21:15,2:29,310,"$336,752.00","$304,524.00"
IAH - JFK,52143769118,IAH-JFK-LAX 5,757-300,https://www.airlines-manager.com/network/showline/41429004,https://www.airlines-manager.com/network/showflight/52143769118,https://www.airlines-manager.com/aircraft/show/89233038,2:00,9:29,400,"$620,012.00","$546,703.00"
IAH - JFK,52167946276,IAH-JFK-LAX 1,757-300,https://www.airlines-manager.com/network/showline/41429004,https://www.airlines-manager.com/network/showflight/52167946276,https://www.airlines-manager.com/aircraft/show/88400798,11:00,18:29,400,"$620,012.00","$546,703.00"
IAH - JFK,52181070758,IAH-JFK-LAX 3,757-300,https://www.airlines-manager.com/network/showline/41429004,https://www.airlines-manager.com/network/showflight/52181070758,https://www.airlines-manager.com/aircraft/show/88400800,18:15,1:44,400,"$620,012.00","$546,703.00"
IAH - JFK,52185045325,IAH-JFK-LAX 2,757-300,https://www.airlines-manager.com/network/showline/41429004,https://www.airlines-manager.com/network/showflight/52185045325,https://www.airlines-manager.com/aircraft/show/88400799,19:15,2:44,400,"$620,012.00","$546,703.00"
IAH - JFK,52188655581,IAH-JFK-LAX 4,757-300,https://www.airlines-manager.com/network/showline/41429004,https://www.airlines-manager.com/network/showflight/52188655581,https://www.airlines-manager.com/aircraft/show/88400801,21:15,4:44,400,"$620,012.00","$546,703.00"
IAH - LAS,52143769258,IAH-LAS-ATL 1,737-900ER,https://www.airlines-manager.com/network/showline/41475884,https://www.airlines-manager.com/network/showflight/52143769258,https://www.airlines-manager.com/aircraft/show/96256511,4:00,10:44,320,"$428,307.00","$366,826.00"
IAH - LAS,52157350018,IAH-LAS-ATL 2,737-900ER,https://www.airlines-manager.com/network/showline/41475884,https://www.airlines-manager.com/network/showflight/52157350018,https://www.airlines-manager.com/aircraft/show/96250652,5:00,11:44,320,"$428,307.00","$366,826.00"
IAH - LAS,52157350019,IAH-DFW-STL,ERJ-175,https://www.airlines-manager.com/network/showline/41475884,https://www.airlines-manager.com/network/showflight/52157350019,https://www.airlines-manager.com/aircraft/show/96990010,5:15,11:59,112,"$201,562.00","$167,268.00"
IAH - LAS,52167946262,IAH-LAS-ATL 4,737-900ER,https://www.airlines-manager.com/network/showline/41475884,https://www.airlines-manager.com/network/showflight/52167946262,https://www.airlines-manager.com/aircraft/show/96177955,11:00,17:44,320,"$428,307.00","$366,826.00"
IAH - LAS,52176666983,IAH-LAS-ATL 5,737-900ER,https://www.airlines-manager.com/network/showline/41475884,https://www.airlines-manager.com/network/showflight/52176666983,https://www.airlines-manager.com/aircraft/show/95894466,14:45,21:29,320,"$428,307.00","$366,826.00"
IAH - LAS,52181070688,IAH-LAS-ATL 6,ERJ-175,https://www.airlines-manager.com/network/showline/41475884,https://www.airlines-manager.com/network/showflight/52181070688,https://www.airlines-manager.com/aircraft/show/82323704,17:30,0:14,112,"$201,562.00","$167,268.00"
IAH - LAS,52185045450,IAH-LAS-ATL 3,737-900ER,https://www.airlines-manager.com/network/showline/41475884,https://www.airlines-manager.com/network/showflight/52185045450,https://www.airlines-manager.com/aircraft/show/96183549,20:45,3:29,319,"$425,838.00","$364,406.00"
IAH - LAX,52143769175,IAH-JFK-LAX 2,757-300,https://www.airlines-manager.com/network/showline/41429006,https://www.airlines-manager.com/network/showflight/52143769175,https://www.airlines-manager.com/aircraft/show/88400799,2:45,9:59,400,"$607,892.00","$535,719.00"
IAH - LAX,52143769176,IAH-JFK-LAX 1,757-300,https://www.airlines-manager.com/network/showline/41429006,https://www.airlines-manager.com/network/showflight/52143769176,https://www.airlines-manager.com/aircraft/show/88400798,3:45,10:59,400,"$607,892.00","$535,719.00"
IAH - LAX,52157349975,IAH-JFK-LAX 4,757-300,https://www.airlines-manager.com/network/showline/41429006,https://www.airlines-manager.com/network/showflight/52157349975,https://www.airlines-manager.com/aircraft/show/88400801,4:45,11:59,400,"$607,892.00","$535,719.00"
IAH - LAX,52167946171,IAH-JFK-LAX 5,757-300,https://www.airlines-manager.com/network/showline/41429006,https://www.airlines-manager.com/network/showflight/52167946171,https://www.airlines-manager.com/aircraft/show/89233038,10:30,17:44,400,"$607,892.00","$535,719.00"
IAH - LAX,52167946172,IAH-JFK-LAX 3,757-300,https://www.airlines-manager.com/network/showline/41429006,https://www.airlines-manager.com/network/showflight/52167946172,https://www.airlines-manager.com/aircraft/show/88400800,11:00,18:14,400,"$607,892.00","$535,719.00"
IAH - LEX,52143769276,IAH-BTV-CAK 1,A321-200,https://www.airlines-manager.com/network/showline/48841727,https://www.airlines-manager.com/network/showflight/52143769276,https://www.airlines-manager.com/aircraft/show/114373410,4:30,9:44,310,"$333,424.00","$303,446.00"
IAH - LEX,52163458690,IAH-BTV-CAK 4,A321-200,https://www.airlines-manager.com/network/showline/48841727,https://www.airlines-manager.com/network/showflight/52163458690,https://www.airlines-manager.com/aircraft/show/113994196,9:15,14:29,310,"$333,424.00","$303,446.00"
IAH - LEX,52176667025,IAH-BTV-CAK 3,A321-200,https://www.airlines-manager.com/network/showline/48841727,https://www.airlines-manager.com/network/showflight/52176667025,https://www.airlines-manager.com/aircraft/show/86385103,15:00,20:14,310,"$333,424.00","$303,446.00"
IAH - LEX,52185045337,IAH-BTV-CAK 5,ERJ-175,https://www.airlines-manager.com/network/showline/48841727,https://www.airlines-manager.com/network/showflight/52185045337,https://www.airlines-manager.com/aircraft/show/82543907,19:15,0:29,112,"$158,427.00","$138,994.00"
IAH - LEX,52188655703,IAH-BTV-CAK 2,A321-200,https://www.airlines-manager.com/network/showline/48841727,https://www.airlines-manager.com/network/showflight/52188655703,https://www.airlines-manager.com/aircraft/show/114373409,22:15,3:29,262,"$302,986.00","$274,097.00"
IAH - LIM,52176666978,IAH 84A-1 E1,777-300,https://www.airlines-manager.com/network/showline/41559632,https://www.airlines-manager.com/network/showflight/52176666978,https://www.airlines-manager.com/aircraft/show/89439131,14:30,3:59,932,"$2,248,651.00","$2,048,806.00"
IAH - LIM,52191270977,IAH 84A-5 E1,777-300,https://www.airlines-manager.com/network/showline/41559632,https://www.airlines-manager.com/network/showflight/52191270977,https://www.airlines-manager.com/aircraft/show/89124074,23:45,13:14,932,"$2,248,651.00","$2,048,806.00"
IAH - LIT,52143769243,IAH-SJC-PWM 1,A321-200,https://www.airlines-manager.com/network/showline/46351097,https://www.airlines-manager.com/network/showflight/52143769243,https://www.airlines-manager.com/aircraft/show/96692491,3:45,7:14,310,"$188,236.00","$164,230.00"
IAH - LIT,52167946226,IAH-SJC-PWM 3,A321-200,https://www.airlines-manager.com/network/showline/46351097,https://www.airlines-manager.com/network/showflight/52167946226,https://www.airlines-manager.com/aircraft/show/96692343,11:00,14:29,310,"$188,236.00","$164,230.00"
IAH - LIT,52185045358,IAH-SJC-PWM 2,A321-200,https://www.airlines-manager.com/network/showline/46351097,https://www.airlines-manager.com/network/showflight/52185045358,https://www.airlines-manager.com/aircraft/show/96691558,19:30,22:59,310,"$188,236.00","$164,230.00"
IAH - LIT,52185045359,IAH-SJC-PWM 5 B,A319-100,https://www.airlines-manager.com/network/showline/46351097,https://www.airlines-manager.com/network/showflight/52185045359,https://www.airlines-manager.com/aircraft/show/106014350,20:00,23:29,198,"$142,058.00","$122,837.00"
IAH - LIT,52191270951,IAH-SJC-PWM 4,A321-200,https://www.airlines-manager.com/network/showline/46351097,https://www.airlines-manager.com/network/showflight/52191270951,https://www.airlines-manager.com/aircraft/show/96694086,23:30,2:59,271,"$174,275.00","$150,669.00"
IAH - MCI,52143769020,IAH-RNO-MCI 4,A321-200,https://www.airlines-manager.com/network/showline/45594512,https://www.airlines-manager.com/network/showflight/52143769020,https://www.airlines-manager.com/aircraft/show/103882358,1:00,5:44,310,"$298,285.00","$267,127.00"
IAH - MCI,52163458685,IAH-RNO-MCI 3,A321-200,https://www.airlines-manager.com/network/showline/45594512,https://www.airlines-manager.com/network/showflight/52163458685,https://www.airlines-manager.com/aircraft/show/103882357,9:15,13:59,310,"$298,285.00","$267,127.00"
IAH - MCI,52172581901,IAH-RNO-MCI 2,A321-200,https://www.airlines-manager.com/network/showline/45594512,https://www.airlines-manager.com/network/showflight/52172581901,https://www.airlines-manager.com/aircraft/show/103882356,13:00,17:44,310,"$298,285.00","$267,127.00"
IAH - MCI,52181070735,IAH-RNO-MCI 5,ERJ-175,https://www.airlines-manager.com/network/showline/45594512,https://www.airlines-manager.com/network/showflight/52181070735,https://www.airlines-manager.com/aircraft/show/105099861,18:00,22:44,112,"$141,262.00","$121,442.00"
IAH - MCI,52188655541,IAH-RNO-MCI 1,A321-200,https://www.airlines-manager.com/network/showline/45594512,https://www.airlines-manager.com/network/showflight/52188655541,https://www.airlines-manager.com/aircraft/show/103882355,21:00,1:44,310,"$298,285.00","$267,127.00"
IAH - MCI,52188655542,IAH CARGO 2,A320-200,https://www.airlines-manager.com/network/showline/45594512,https://www.airlines-manager.com/network/showflight/52188655542,https://www.airlines-manager.com/aircraft/show/101412921,21:15,1:59,0,"$90,672.00","$60,573.00"
IAH - MCO,52143769005,IAH-MIA-ORD 2,A321-200,https://www.airlines-manager.com/network/showline/41856116,https://www.airlines-manager.com/network/showflight/52143769005,https://www.airlines-manager.com/aircraft/show/90183183,1:00,6:29,310,"$345,262.00","$302,868.00"
IAH - MCO,52143769006,IAH-MIA-ORD 6 S,ERJ-175,https://www.airlines-manager.com/network/showline/41856116,https://www.airlines-manager.com/network/showflight/52143769006,https://www.airlines-manager.com/aircraft/show/90140936,3:00,8:29,136,"$164,393.00","$137,615.00"
IAH - MCO,52157350178,IAH-MIA-ORD 1,A321-200,https://www.airlines-manager.com/network/showline/41856116,https://www.airlines-manager.com/network/showflight/52157350178,https://www.airlines-manager.com/aircraft/show/90183184,6:45,12:14,310,"$345,262.00","$302,868.00"
IAH - MCO,52163458660,IAH-MIA-ORD 5,A321-200,https://www.airlines-manager.com/network/showline/41856116,https://www.airlines-manager.com/network/showflight/52163458660,https://www.airlines-manager.com/aircraft/show/90183180,8:45,14:14,310,"$345,262.00","$302,868.00"
IAH - MCO,52172581928,IAH-MIA-ORD 4,A321-200,https://www.airlines-manager.com/network/showline/41856116,https://www.airlines-manager.com/network/showflight/52172581928,https://www.airlines-manager.com/aircraft/show/90183181,13:00,18:29,310,"$345,262.00","$302,868.00"
IAH - MCO,52185045324,IAH-MIA-ORD 3,A321-200,https://www.airlines-manager.com/network/showline/41856116,https://www.airlines-manager.com/network/showflight/52185045324,https://www.airlines-manager.com/aircraft/show/90183182,19:15,0:44,310,"$345,262.00","$302,868.00"
IAH - MEM,52143769129,IAH CARGO 2,A320-200,https://www.airlines-manager.com/network/showline/44833769,https://www.airlines-manager.com/network/showflight/52143769129,https://www.airlines-manager.com/aircraft/show/101412921,2:00,5:59,0,"$71,891.00","$43,948.00"
IAH - MEM,52157350066,IAH-SMF-CVG 4,737-900ER,https://www.airlines-manager.com/network/showline/44833769,https://www.airlines-manager.com/network/showflight/52157350066,https://www.airlines-manager.com/aircraft/show/99093332,5:45,9:44,320,"$221,673.00","$188,311.00"
IAH - MEM,52163458691,IAH-SMF-CVG 3,737-900ER,https://www.airlines-manager.com/network/showline/44833769,https://www.airlines-manager.com/network/showflight/52163458691,https://www.airlines-manager.com/aircraft/show/99093333,9:30,13:29,320,"$221,673.00","$188,311.00"
IAH - MEM,52172581962,IAH-SMF-CVG 2,737-900ER,https://www.airlines-manager.com/network/showline/44833769,https://www.airlines-manager.com/network/showflight/52172581962,https://www.airlines-manager.com/aircraft/show/99093334,14:00,17:59,320,"$221,673.00","$188,311.00"
IAH - MEM,52185045349,IAH-SMF-CVG 1,737-900ER,https://www.airlines-manager.com/network/showline/44833769,https://www.airlines-manager.com/network/showflight/52185045349,https://www.airlines-manager.com/aircraft/show/99093335,19:30,23:29,320,"$221,673.00","$188,311.00"
IAH - MEM,52188655648,IAH-SMF-CVG 5 B,A319-100,https://www.airlines-manager.com/network/showline/44833769,https://www.airlines-manager.com/network/showflight/52188655648,https://www.airlines-manager.com/aircraft/show/106499070,21:30,1:29,198,"$168,278.00","$145,288.00"
IAH - MEX,52143769107,IAH-MEX-YYZ 6 S,ERJ-175,https://www.airlines-manager.com/network/showline/41979990,https://www.airlines-manager.com/network/showflight/52143769107,https://www.airlines-manager.com/aircraft/show/97026605,1:45,6:44,136,"$153,398.00","$128,497.00"
IAH - MEX,52157350038,IAH-MEX-YYZ 2,757-300,https://www.airlines-manager.com/network/showline/41979990,https://www.airlines-manager.com/network/showflight/52157350038,https://www.airlines-manager.com/aircraft/show/97076945,5:30,10:29,400,"$414,005.00","$365,662.00"
IAH - MEX,52163458637,IAH-MEX-YYZ 5,757-300,https://www.airlines-manager.com/network/showline/41979990,https://www.airlines-manager.com/network/showflight/52163458637,https://www.airlines-manager.com/aircraft/show/97076942,8:30,13:29,400,"$414,005.00","$365,662.00"
IAH - MEX,52172581927,IAH-MEX-YYZ 1,757-300,https://www.airlines-manager.com/network/showline/41979990,https://www.airlines-manager.com/network/showflight/52172581927,https://www.airlines-manager.com/aircraft/show/97076946,13:00,17:59,400,"$414,005.00","$365,662.00"
IAH - MEX,52176667145,IAH-MEX-YYZ 4,757-300,https://www.airlines-manager.com/network/showline/41979990,https://www.airlines-manager.com/network/showflight/52176667145,https://www.airlines-manager.com/aircraft/show/97076943,16:00,20:59,391,"$405,740.00","$357,621.00"
IAH - MEX,52188655729,IAH-MEX-YYZ 3,757-300,https://www.airlines-manager.com/network/showline/41979990,https://www.airlines-manager.com/network/showflight/52188655729,https://www.airlines-manager.com/aircraft/show/97076944,22:30,3:29,284,"$307,485.00","$262,023.00"
IAH - MHT,52143769053,IAH-MHT-ALB 3,737-900ER,https://www.airlines-manager.com/network/showline/48841849,https://www.airlines-manager.com/network/showflight/52143769053,https://www.airlines-manager.com/aircraft/show/114266971,1:30,9:44,320,"$523,320.00","$475,464.00"
IAH - MHT,52157350123,IAH-MHT-ALB 4,737-900ER,https://www.airlines-manager.com/network/showline/48841849,https://www.airlines-manager.com/network/showflight/52157350123,https://www.airlines-manager.com/aircraft/show/114266970,6:45,14:59,320,"$523,320.00","$475,464.00"
IAH - MHT,52167946325,IAH-MHT-ALB 1,737-900ER,https://www.airlines-manager.com/network/showline/48841849,https://www.airlines-manager.com/network/showflight/52167946325,https://www.airlines-manager.com/aircraft/show/114266972,12:00,20:14,320,"$523,320.00","$475,464.00"
IAH - MHT,52176667107,IAH-MHT-ALB 2,737-900ER,https://www.airlines-manager.com/network/showline/48841849,https://www.airlines-manager.com/network/showflight/52176667107,https://www.airlines-manager.com/aircraft/show/114266976,16:00,0:14,320,"$523,320.00","$475,464.00"
IAH - MHT,52181070700,IAH-MHT-ALB 5,ERJ-175,https://www.airlines-manager.com/network/showline/48841849,https://www.airlines-manager.com/network/showflight/52181070700,https://www.airlines-manager.com/aircraft/show/92800067,17:45,1:59,112,"$246,686.00","$218,119.00"
IAH - MIA,52143768973,IAH-MIA-ORD 3,A321-200,https://www.airlines-manager.com/network/showline/41856105,https://www.airlines-manager.com/network/showflight/52143768973,https://www.airlines-manager.com/aircraft/show/90183182,0:45,6:29,310,"$370,058.00","$324,301.00"
IAH - MIA,52157350114,IAH-MIA-ORD 2,A321-200,https://www.airlines-manager.com/network/showline/41856105,https://www.airlines-manager.com/network/showflight/52157350114,https://www.airlines-manager.com/aircraft/show/90183183,6:30,12:14,310,"$370,058.00","$324,301.00"
IAH - MIA,52163458620,IAH-MIA-ORD 6 S,ERJ-175,https://www.airlines-manager.com/network/showline/41856105,https://www.airlines-manager.com/network/showflight/52163458620,https://www.airlines-manager.com/aircraft/show/90140936,8:30,14:14,136,"$176,224.00","$147,256.00"
IAH - MIA,52172581931,IAH-MIA-ORD 1,A321-200,https://www.airlines-manager.com/network/showline/41856105,https://www.airlines-manager.com/network/showflight/52172581931,https://www.airlines-manager.com/aircraft/show/90183184,13:00,18:44,310,"$370,058.00","$324,301.00"
IAH - MIA,52176667015,IAH-MIA-ORD 5,A321-200,https://www.airlines-manager.com/network/showline/41856105,https://www.airlines-manager.com/network/showflight/52176667015,https://www.airlines-manager.com/aircraft/show/90183180,15:00,20:44,310,"$370,058.00","$324,301.00"
IAH - MIA,52181070767,IAH-MIA-ORD 4,A321-200,https://www.airlines-manager.com/network/showline/41856105,https://www.airlines-manager.com/network/showflight/52181070767,https://www.airlines-manager.com/aircraft/show/90183181,18:30,0:14,309,"$369,356.00","$323,626.00"
IAH - MKE,52143768997,IAH-BOI-BNA 2,A321-200,https://www.airlines-manager.com/network/showline/45748027,https://www.airlines-manager.com/network/showflight/52143768997,https://www.airlines-manager.com/aircraft/show/104258212,1:00,6:59,310,"$379,007.00","$343,873.00"
IAH - MKE,52163458597,IAH-BOI-BNA 1,A321-200,https://www.airlines-manager.com/network/showline/45748027,https://www.airlines-manager.com/network/showflight/52163458597,https://www.airlines-manager.com/aircraft/show/104258211,8:00,13:59,310,"$379,007.00","$343,873.00"
IAH - MKE,52163458598,IAH-BOI-BNA 5,ERJ-175,https://www.airlines-manager.com/network/showline/45748027,https://www.airlines-manager.com/network/showflight/52163458598,https://www.airlines-manager.com/aircraft/show/103534664,9:00,14:59,112,"$178,979.00","$156,179.00"
IAH - MKE,52172582011,IAH-BOI-BNA 4,A321-200,https://www.airlines-manager.com/network/showline/45748027,https://www.airlines-manager.com/network/showflight/52172582011,https://www.airlines-manager.com/aircraft/show/104258214,14:00,19:59,310,"$379,007.00","$343,873.00"
IAH - MKE,52185045326,IAH-BOI-BNA 3,A321-200,https://www.airlines-manager.com/network/showline/45748027,https://www.airlines-manager.com/network/showflight/52185045326,https://www.airlines-manager.com/aircraft/show/104258213,19:15,1:14,310,"$379,007.00","$343,873.00"
IAH - MSO,52143769248,IAH-MSO-FAR 2,737-900ER,https://www.airlines-manager.com/network/showline/47654624,https://www.airlines-manager.com/network/showflight/52143769248,https://www.airlines-manager.com/aircraft/show/110424756,4:00,11:59,320,"$507,030.00","$460,597.00"
IAH - MSO,52172581973,IAH-MSO-FAR 1,737-900ER,https://www.airlines-manager.com/network/showline/47654624,https://www.airlines-manager.com/network/showflight/52172581973,https://www.airlines-manager.com/aircraft/show/110424757,14:00,21:59,320,"$507,030.00","$460,597.00"
IAH - MSO,52181070687,IAH-MSO-FAR 4,737-900ER,https://www.airlines-manager.com/network/showline/47654624,https://www.airlines-manager.com/network/showflight/52181070687,https://www.airlines-manager.com/aircraft/show/110424754,17:30,1:29,320,"$507,030.00","$460,597.00"
IAH - MSO,52185045424,IAH-MSO-FAR 3,737-900ER,https://www.airlines-manager.com/network/showline/47654624,https://www.airlines-manager.com/network/showflight/52185045424,https://www.airlines-manager.com/aircraft/show/110424755,20:15,4:14,320,"$507,030.00","$460,597.00"
IAH - MSP,52143769256,IAH-LAS-ATL 5,737-900ER,https://www.airlines-manager.com/network/showline/41475907,https://www.airlines-manager.com/network/showflight/52143769256,https://www.airlines-manager.com/aircraft/show/95894466,4:00,9:59,320,"$383,111.00","$333,815.00"
IAH - MSP,52157350004,IAH-LAS-ATL 6,ERJ-175,https://www.airlines-manager.com/network/showline/41475907,https://www.airlines-manager.com/network/showflight/52157350004,https://www.airlines-manager.com/aircraft/show/82323704,5:00,11:14,112,"$181,949.00","$154,284.00"
IAH - MSP,52163458713,IAH-LAS-ATL 3,737-900ER,https://www.airlines-manager.com/network/showline/41475907,https://www.airlines-manager.com/network/showflight/52163458713,https://www.airlines-manager.com/aircraft/show/96183549,10:00,15:59,320,"$383,111.00","$333,815.00"
IAH - MSP,52181070712,IAH-LAS-ATL 2,737-900ER,https://www.airlines-manager.com/network/showline/41475907,https://www.airlines-manager.com/network/showflight/52181070712,https://www.airlines-manager.com/aircraft/show/96250652,17:45,23:44,320,"$383,111.00","$333,815.00"
IAH - MSP,52188655642,IAH-LAS-ATL 1,737-900ER,https://www.airlines-manager.com/network/showline/41475907,https://www.airlines-manager.com/network/showflight/52188655642,https://www.airlines-manager.com/aircraft/show/96256511,21:30,3:29,320,"$383,111.00","$333,815.00"
IAH - MSP,52188655643,IAH-LAS-ATL 4,737-900ER,https://www.airlines-manager.com/network/showline/41475907,https://www.airlines-manager.com/network/showflight/52188655643,https://www.airlines-manager.com/aircraft/show/96177955,22:30,4:29,320,"$383,111.00","$333,815.00"
IAH - MSY,52143769242,IAH-BWI-PHL 4,A321neo,https://www.airlines-manager.com/network/showline/44236349,https://www.airlines-manager.com/network/showflight/52143769242,https://www.airlines-manager.com/aircraft/show/106007216,3:45,6:59,338,"$170,319.00","$145,672.00"
IAH - MSY,52157349985,IAH-BWI-PHL 5,A321neo,https://www.airlines-manager.com/network/showline/44236349,https://www.airlines-manager.com/network/showflight/52157349985,https://www.airlines-manager.com/aircraft/show/106007217,4:45,7:59,338,"$170,319.00","$145,672.00"
IAH - MSY,52167946239,IAH-BWI-PHL 3,A321neo,https://www.airlines-manager.com/network/showline/44236349,https://www.airlines-manager.com/network/showflight/52167946239,https://www.airlines-manager.com/aircraft/show/106007215,11:00,14:14,338,"$170,319.00","$145,672.00"
IAH - MSY,52181070707,IAH-BWI-PHL 2,A321neo,https://www.airlines-manager.com/network/showline/44236349,https://www.airlines-manager.com/network/showflight/52181070707,https://www.airlines-manager.com/aircraft/show/106007214,17:45,20:59,338,"$170,319.00","$145,672.00"
IAH - MSY,52185045441,IAH-BWI-PHL 1,A321neo,https://www.airlines-manager.com/network/showline/44236349,https://www.airlines-manager.com/network/showflight/52185045441,https://www.airlines-manager.com/aircraft/show/106007213,20:30,23:44,264,"$148,170.00","$124,036.00"
IAH - MTY,52143769234,IAH-YOW-SJD 1,737-900ER,https://www.airlines-manager.com/network/showline/48842088,https://www.airlines-manager.com/network/showflight/52143769234,https://www.airlines-manager.com/aircraft/show/114266974,3:30,7:14,320,"$202,445.00","$171,928.00"
IAH - MTY,52163458689,IAH-YOW-SJD 5,ERJ-175,https://www.airlines-manager.com/network/showline/48842088,https://www.airlines-manager.com/network/showflight/52163458689,https://www.airlines-manager.com/aircraft/show/105099862,9:15,12:59,112,"$92,515.00","$76,060.00"
IAH - MTY,52172582012,IAH-YOW-SJD 4,737-900ER,https://www.airlines-manager.com/network/showline/48842088,https://www.airlines-manager.com/network/showflight/52172582012,https://www.airlines-manager.com/aircraft/show/114266975,14:00,17:44,320,"$202,445.00","$171,928.00"
IAH - MTY,52181070684,IAH-YOW-SJD 3,737-900ER,https://www.airlines-manager.com/network/showline/48842088,https://www.airlines-manager.com/network/showflight/52181070684,https://www.airlines-manager.com/aircraft/show/113250059,17:30,21:14,320,"$202,445.00","$171,928.00"
IAH - MTY,52191270950,IAH-YOW-SJD 2,737-900ER,https://www.airlines-manager.com/network/showline/48842088,https://www.airlines-manager.com/network/showflight/52191270950,https://www.airlines-manager.com/aircraft/show/113114108,23:30,3:14,320,"$202,445.00","$171,928.00"
IAH - OAK,52143769028,IAH-IAD-SAN 5,737-900ER,https://www.airlines-manager.com/network/showline/44653700,https://www.airlines-manager.com/network/showflight/52143769028,https://www.airlines-manager.com/aircraft/show/98578920,1:15,9:44,320,"$528,557.00","$477,734.00"
IAH - OAK,52143769029,IAH-IAD-SAN 1,737-900ER,https://www.airlines-manager.com/network/showline/44653700,https://www.airlines-manager.com/network/showflight/52143769029,https://www.airlines-manager.com/aircraft/show/98578924,3:00,11:29,320,"$528,557.00","$477,734.00"
IAH - OAK,52163458592,IAH-IAD-SAN 4,737-900ER,https://www.airlines-manager.com/network/showline/44653700,https://www.airlines-manager.com/network/showflight/52163458592,https://www.airlines-manager.com/aircraft/show/98578921,8:00,16:29,320,"$528,557.00","$477,734.00"
IAH - OAK,52172581922,IAH-IAD-SAN 3,737-900ER,https://www.airlines-manager.com/network/showline/44653700,https://www.airlines-manager.com/network/showflight/52172581922,https://www.airlines-manager.com/aircraft/show/98578922,13:00,21:29,320,"$528,557.00","$477,734.00"
IAH - OAK,52185045322,IAH-IAD-SAN 6,ERJ-175,https://www.airlines-manager.com/network/showline/44653700,https://www.airlines-manager.com/network/showflight/52185045322,https://www.airlines-manager.com/aircraft/show/105400635,19:00,3:29,112,"$249,254.00","$219,107.00"
IAH - OAK,52188655697,IAH-IAD-SAN 2,737-900ER,https://www.airlines-manager.com/network/showline/44653700,https://www.airlines-manager.com/network/showflight/52188655697,https://www.airlines-manager.com/aircraft/show/98578923,22:15,6:44,320,"$528,557.00","$477,734.00"
IAH - OKC,52157350061,IAH-RIC-SDF 1,A321-200,https://www.airlines-manager.com/network/showline/46824165,https://www.airlines-manager.com/network/showflight/52157350061,https://www.airlines-manager.com/aircraft/show/107467134,5:30,9:14,310,"$196,426.00","$171,165.00"
IAH - OKC,52163458721,IAH-RIC-SDF 5,ERJ-175,https://www.airlines-manager.com/network/showline/46824165,https://www.airlines-manager.com/network/showflight/52163458721,https://www.airlines-manager.com/aircraft/show/107467211,10:00,13:44,112,"$90,681.00","$74,834.00"
IAH - OKC,52167946316,IAH-RIC-SDF 4,A321-200,https://www.airlines-manager.com/network/showline/46824165,https://www.airlines-manager.com/network/showflight/52167946316,https://www.airlines-manager.com/aircraft/show/107467131,12:00,15:44,310,"$196,426.00","$171,165.00"
IAH - OKC,52181070706,IAH-RIC-SDF 3,A321-200,https://www.airlines-manager.com/network/showline/46824165,https://www.airlines-manager.com/network/showflight/52181070706,https://www.airlines-manager.com/aircraft/show/107467132,17:45,21:29,310,"$196,426.00","$171,165.00"
IAH - OKC,52191270927,IAH-RIC-SDF 2,A321-200,https://www.airlines-manager.com/network/showline/46824165,https://www.airlines-manager.com/network/showflight/52191270927,https://www.airlines-manager.com/aircraft/show/107467133,23:00,2:44,310,"$196,426.00","$171,165.00"
IAH - OMA,52143769183,IAH-BOI-BNA 1,A321-200,https://www.airlines-manager.com/network/showline/45737497,https://www.airlines-manager.com/network/showflight/52143769183,https://www.airlines-manager.com/aircraft/show/104258211,2:45,7:59,310,"$328,699.00","$297,556.00"
IAH - OMA,52143769184,IAH-BOI-BNA 5,ERJ-175,https://www.airlines-manager.com/network/showline/45737497,https://www.airlines-manager.com/network/showflight/52143769184,https://www.airlines-manager.com/aircraft/show/103534664,3:45,8:59,112,"$156,004.00","$135,953.00"
IAH - OMA,52163458646,IAH-BOI-BNA 4,A321-200,https://www.airlines-manager.com/network/showline/45737497,https://www.airlines-manager.com/network/showflight/52163458646,https://www.airlines-manager.com/aircraft/show/104258214,8:45,13:59,310,"$328,699.00","$297,556.00"
IAH - OMA,52172581959,IAH-BOI-BNA 3,A321-200,https://www.airlines-manager.com/network/showline/45737497,https://www.airlines-manager.com/network/showflight/52172581959,https://www.airlines-manager.com/aircraft/show/104258213,14:00,19:14,310,"$328,699.00","$297,556.00"
IAH - OMA,52185045383,IAH-BOI-BNA 2,A321-200,https://www.airlines-manager.com/network/showline/45737497,https://www.airlines-manager.com/network/showflight/52185045383,https://www.airlines-manager.com/aircraft/show/104258212,19:45,0:59,310,"$328,699.00","$297,556.00"
IAH - ONT,52143769178,IAH-ANC-ONT 1,A321-200,https://www.airlines-manager.com/network/showline/47054836,https://www.airlines-manager.com/network/showflight/52143769178,https://www.airlines-manager.com/aircraft/show/108258010,2:45,9:59,310,"$463,569.00","$422,403.00"
IAH - ONT,52157349991,IAH-ANC-ONT 2,A321-200,https://www.airlines-manager.com/network/showline/47054836,https://www.airlines-manager.com/network/showflight/52157349991,https://www.airlines-manager.com/aircraft/show/108258011,4:45,11:59,310,"$463,569.00","$422,403.00"
IAH - ONT,52167946308,IAH-ANC-ONT 3,A321-200,https://www.airlines-manager.com/network/showline/47054836,https://www.airlines-manager.com/network/showflight/52167946308,https://www.airlines-manager.com/aircraft/show/108258012,12:00,19:14,310,"$463,569.00","$422,403.00"
IAH - ONT,52172581987,IAH-ANC-ONT 4,A321-200,https://www.airlines-manager.com/network/showline/47054836,https://www.airlines-manager.com/network/showflight/52172581987,https://www.airlines-manager.com/aircraft/show/108089220,14:00,21:14,310,"$463,569.00","$422,403.00"
IAH - ONT,52176667124,IAH-ANC-ONT 5 B,A319-100,https://www.airlines-manager.com/network/showline/47054836,https://www.airlines-manager.com/network/showflight/52176667124,https://www.airlines-manager.com/aircraft/show/108286957,16:00,23:14,197,"$348,956.00","$316,007.00"
IAH - ORD,52143768922,IAH-MIA-ORD 4,A321-200,https://www.airlines-manager.com/network/showline/41856090,https://www.airlines-manager.com/network/showflight/52143768922,https://www.airlines-manager.com/aircraft/show/90183181,0:15,5:59,310,"$362,970.00","$308,004.00"
IAH - ORD,52157350115,IAH-MIA-ORD 3,A321-200,https://www.airlines-manager.com/network/showline/41856090,https://www.airlines-manager.com/network/showflight/52157350115,https://www.airlines-manager.com/aircraft/show/90183182,6:30,12:14,310,"$362,970.00","$308,004.00"
IAH - ORD,52163458743,IAH CARGO 2,A320-200,https://www.airlines-manager.com/network/showline/41856090,https://www.airlines-manager.com/network/showflight/52163458743,https://www.airlines-manager.com/aircraft/show/101412921,10:00,15:44,0,"$114,221.00","$60,777.00"
IAH - ORD,52172581930,IAH-MIA-ORD 2,A321-200,https://www.airlines-manager.com/network/showline/41856090,https://www.airlines-manager.com/network/showflight/52172581930,https://www.airlines-manager.com/aircraft/show/90183183,13:00,18:44,310,"$362,970.00","$308,004.00"
IAH - ORD,52176667016,IAH-MIA-ORD 6 S,ERJ-175,https://www.airlines-manager.com/network/showline/41856090,https://www.airlines-manager.com/network/showflight/52176667016,https://www.airlines-manager.com/aircraft/show/90140936,15:00,20:44,136,"$172,495.00","$138,059.00"
IAH - ORD,52181070786,IAH-MIA-ORD 1,A321-200,https://www.airlines-manager.com/network/showline/41856090,https://www.airlines-manager.com/network/showflight/52181070786,https://www.airlines-manager.com/aircraft/show/90183184,18:45,0:29,310,"$362,970.00","$308,004.00"
IAH - ORD,52185045451,IAH-MIA-ORD 5,A321-200,https://www.airlines-manager.com/network/showline/41856090,https://www.airlines-manager.com/network/showflight/52185045451,https://www.airlines-manager.com/aircraft/show/90183180,20:45,2:29,310,"$362,970.00","$308,004.00"
IAH - ORF,52143768852,IAH-PVD-BUF 5 B,A319-100,https://www.airlines-manager.com/network/showline/46824197,https://www.airlines-manager.com/network/showflight/52143768852,https://www.airlines-manager.com/aircraft/show/110582843,0:00,6:44,198,"$319,444.00","$289,791.00"
IAH - ORF,52143768853,IAH-PVD-BUF 1,A321-200,https://www.airlines-manager.com/network/showline/46824197,https://www.airlines-manager.com/network/showflight/52143768853,https://www.airlines-manager.com/aircraft/show/107467130,4:15,10:59,310,"$423,177.00","$386,175.00"
IAH - ORF,52163458600,IAH-PVD-BUF 4,A321-200,https://www.airlines-manager.com/network/showline/46824197,https://www.airlines-manager.com/network/showflight/52163458600,https://www.airlines-manager.com/aircraft/show/107467127,8:15,14:59,310,"$423,177.00","$386,175.00"
IAH - ORF,52172581873,IAH-PVD-BUF 3,A321-200,https://www.airlines-manager.com/network/showline/46824197,https://www.airlines-manager.com/network/showflight/52172581873,https://www.airlines-manager.com/aircraft/show/107467128,13:00,19:44,310,"$423,177.00","$386,175.00"
IAH - ORF,52185045408,IAH-PVD-BUF 2,A321-200,https://www.airlines-manager.com/network/showline/46824197,https://www.airlines-manager.com/network/showflight/52185045408,https://www.airlines-manager.com/aircraft/show/107467129,20:00,2:44,310,"$423,177.00","$386,175.00"
IAH - PBI,52143769157,IAH-PBI-RSW 2,A321-200,https://www.airlines-manager.com/network/showline/45920408,https://www.airlines-manager.com/network/showflight/52143769157,https://www.airlines-manager.com/aircraft/show/104717246,2:30,8:14,310,"$369,178.00","$334,442.00"
IAH - PBI,52167946253,IAH-PBI-RSW 1,A321-200,https://www.airlines-manager.com/network/showline/45920408,https://www.airlines-manager.com/network/showflight/52167946253,https://www.airlines-manager.com/aircraft/show/104717247,11:00,16:44,310,"$369,178.00","$334,442.00"
IAH - PBI,52172581945,IAH-PBI-RSW 5,ERJ-175,https://www.airlines-manager.com/network/showline/45920408,https://www.airlines-manager.com/network/showflight/52172581945,https://www.airlines-manager.com/aircraft/show/104743902,13:15,18:59,112,"$174,677.00","$152,171.00"
IAH - PBI,52176667156,IAH-PBI-RSW 4,A321-200,https://www.airlines-manager.com/network/showline/45920408,https://www.airlines-manager.com/network/showflight/52176667156,https://www.airlines-manager.com/aircraft/show/104717244,16:15,21:59,310,"$369,178.00","$334,442.00"
IAH - PBI,52188655669,IAH-PBI-RSW 3,A321-200,https://www.airlines-manager.com/network/showline/45920408,https://www.airlines-manager.com/network/showflight/52188655669,https://www.airlines-manager.com/aircraft/show/104717245,21:45,3:29,310,"$369,178.00","$334,442.00"
IAH - PDX,52143769168,IAH-SEA-DEN 5,A321neo,https://www.airlines-manager.com/network/showline/41444686,https://www.airlines-manager.com/network/showflight/52143769168,https://www.airlines-manager.com/aircraft/show/105562975,2:45,11:44,338,"$619,578.00","$571,476.00"
IAH - PDX,52143769169,IAH-SEA-DEN 2,A321neo,https://www.airlines-manager.com/network/showline/41444686,https://www.airlines-manager.com/network/showflight/52143769169,https://www.airlines-manager.com/aircraft/show/105562972,4:00,12:59,338,"$619,578.00","$571,476.00"
IAH - PDX,52157350014,IAH-SEA-DEN 4,A321neo,https://www.airlines-manager.com/network/showline/41444686,https://www.airlines-manager.com/network/showflight/52157350014,https://www.airlines-manager.com/aircraft/show/105562974,5:00,13:59,338,"$619,578.00","$571,476.00"
IAH - PDX,52167946300,IAH-SEA-DEN 6,ERJ-175,https://www.airlines-manager.com/network/showline/41444686,https://www.airlines-manager.com/network/showflight/52167946300,https://www.airlines-manager.com/aircraft/show/105601215,12:00,21:14,112,"$269,817.00","$236,406.00"
IAH - PDX,52172581999,IAH-SEA-DEN 3,A321neo,https://www.airlines-manager.com/network/showline/41444686,https://www.airlines-manager.com/network/showflight/52172581999,https://www.airlines-manager.com/aircraft/show/105562973,14:00,22:59,338,"$619,578.00","$571,476.00"
IAH - PDX,52181070772,IAH-SEA-DEN 1,A321neo,https://www.airlines-manager.com/network/showline/41444686,https://www.airlines-manager.com/network/showflight/52181070772,https://www.airlines-manager.com/aircraft/show/105562971,18:30,3:29,337,"$617,900.00","$569,850.00"
IAH - PHL,52167946229,IAH-BWI-PHL 4,A321neo,https://www.airlines-manager.com/network/showline/44225058,https://www.airlines-manager.com/network/showflight/52167946229,https://www.airlines-manager.com/aircraft/show/106007216,11:00,18:14,338,"$501,151.00","$455,969.00"
IAH - PHL,52172582032,IAH-BWI-PHL 3,A321neo,https://www.airlines-manager.com/network/showline/44225058,https://www.airlines-manager.com/network/showflight/52172582032,https://www.airlines-manager.com/aircraft/show/106007215,14:15,21:29,338,"$501,151.00","$455,969.00"
IAH - PHL,52176667126,IAH CARGO 1,737-700,https://www.airlines-manager.com/network/showline/44225058,https://www.airlines-manager.com/network/showflight/52176667126,https://www.airlines-manager.com/aircraft/show/107543798,16:00,23:14,0,"$122,429.00","$88,998.00"
IAH - PHL,52188655572,IAH-BWI-PHL 2,A321neo,https://www.airlines-manager.com/network/showline/44225058,https://www.airlines-manager.com/network/showflight/52188655572,https://www.airlines-manager.com/aircraft/show/106007214,21:00,4:14,338,"$501,151.00","$455,969.00"
IAH - PHL,52188655573,IAH-BWI-PHL 5,A321neo,https://www.airlines-manager.com/network/showline/44225058,https://www.airlines-manager.com/network/showflight/52188655573,https://www.airlines-manager.com/aircraft/show/106007217,21:30,4:44,338,"$501,151.00","$455,969.00"
IAH - PHL,52191270967,IAH-BWI-PHL 1,A321neo,https://www.airlines-manager.com/network/showline/44225058,https://www.airlines-manager.com/network/showflight/52191270967,https://www.airlines-manager.com/aircraft/show/106007213,23:45,6:59,338,"$501,151.00","$455,969.00"
IAH - PHX,52143769257,IAH-LAS-ATL 3,737-900ER,https://www.airlines-manager.com/network/showline/41475904,https://www.airlines-manager.com/network/showflight/52143769257,https://www.airlines-manager.com/aircraft/show/96183549,4:00,9:59,320,"$378,995.00","$326,961.00"
IAH - PHX,52157350021,IAH-LAS-ATL 4,737-900ER,https://www.airlines-manager.com/network/showline/41475904,https://www.airlines-manager.com/network/showflight/52157350021,https://www.airlines-manager.com/aircraft/show/96177955,5:00,10:59,320,"$378,995.00","$326,961.00"
IAH - PHX,52167946288,IAH-LAS-ATL 6,ERJ-175,https://www.airlines-manager.com/network/showline/41475904,https://www.airlines-manager.com/network/showflight/52167946288,https://www.airlines-manager.com/aircraft/show/82323704,11:30,17:29,112,"$179,298.00","$150,347.00"
IAH - PHX,52167946289,IAH-LAS-ATL 2,737-900ER,https://www.airlines-manager.com/network/showline/41475904,https://www.airlines-manager.com/network/showflight/52167946289,https://www.airlines-manager.com/aircraft/show/96250652,11:45,17:44,320,"$378,995.00","$326,961.00"
IAH - PHX,52176667081,IAH-LAS-ATL 1,737-900ER,https://www.airlines-manager.com/network/showline/41475904,https://www.airlines-manager.com/network/showflight/52176667081,https://www.airlines-manager.com/aircraft/show/96256511,15:30,21:29,320,"$378,995.00","$326,961.00"
IAH - PHX,52188655639,IAH-LAS-ATL 5,737-900ER,https://www.airlines-manager.com/network/showline/41475904,https://www.airlines-manager.com/network/showflight/52188655639,https://www.airlines-manager.com/aircraft/show/95894466,21:30,3:29,319,"$377,869.00","$325,869.00"
IAH - PIT,52157350003,IAH-PIT-RDU 2,A321-200,https://www.airlines-manager.com/network/showline/45172092,https://www.airlines-manager.com/network/showflight/52157350003,https://www.airlines-manager.com/aircraft/show/100684073,5:00,11:29,310,"$405,186.00","$366,822.00"
IAH - PIT,52167946278,IAH-PIT-RDU 1,A321-200,https://www.airlines-manager.com/network/showline/45172092,https://www.airlines-manager.com/network/showflight/52167946278,https://www.airlines-manager.com/aircraft/show/100684074,11:15,17:44,310,"$405,186.00","$366,822.00"
IAH - PIT,52176667119,IAH-PIT-RDU 5 B,A319-100,https://www.airlines-manager.com/network/showline/45172092,https://www.airlines-manager.com/network/showflight/52176667119,https://www.airlines-manager.com/aircraft/show/110582845,16:00,22:29,198,"$306,076.00","$275,337.00"
IAH - PIT,52181070665,IAH-PIT-RDU 4,A321-200,https://www.airlines-manager.com/network/showline/45172092,https://www.airlines-manager.com/network/showflight/52181070665,https://www.airlines-manager.com/aircraft/show/100684071,17:15,23:44,310,"$405,186.00","$366,822.00"
IAH - PIT,52188655739,IAH-PIT-RDU 3,A321-200,https://www.airlines-manager.com/network/showline/45172092,https://www.airlines-manager.com/network/showflight/52188655739,https://www.airlines-manager.com/aircraft/show/100684072,22:45,5:14,310,"$405,186.00","$366,822.00"
IAH - PVD,52143769179,IAH-PVD-BUF 2,A321-200,https://www.airlines-manager.com/network/showline/46824173,https://www.airlines-manager.com/network/showflight/52143769179,https://www.airlines-manager.com/aircraft/show/107467129,2:45,10:59,310,"$516,118.00","$474,608.00"
IAH - PVD,52157350124,IAH-PVD-BUF 5 B,A319-100,https://www.airlines-manager.com/network/showline/46824173,https://www.airlines-manager.com/network/showflight/52157350124,https://www.airlines-manager.com/aircraft/show/110582843,6:45,14:59,198,"$388,968.00","$355,693.00"
IAH - PVD,52172581875,IAH-PVD-BUF 1,A321-200,https://www.airlines-manager.com/network/showline/46824173,https://www.airlines-manager.com/network/showflight/52172581875,https://www.airlines-manager.com/aircraft/show/107467130,13:00,21:14,310,"$516,118.00","$474,608.00"
IAH - PVD,52181070646,IAH-PVD-BUF 4,A321-200,https://www.airlines-manager.com/network/showline/46824173,https://www.airlines-manager.com/network/showflight/52181070646,https://www.airlines-manager.com/aircraft/show/107467127,17:00,1:14,310,"$516,118.00","$474,608.00"
IAH - PVD,52185045374,IAH-PVD-BUF 3,A321-200,https://www.airlines-manager.com/network/showline/46824173,https://www.airlines-manager.com/network/showflight/52185045374,https://www.airlines-manager.com/aircraft/show/107467128,19:45,3:59,310,"$516,118.00","$474,608.00"
IAH - PVR,52143769188,IAH-YOW-SJD 5,ERJ-175,https://www.airlines-manager.com/network/showline/48842082,https://www.airlines-manager.com/network/showflight/52143769188,https://www.airlines-manager.com/aircraft/show/105099862,3:00,8:29,112,"$166,452.00","$145,038.00"
IAH - PVR,52163458617,IAH-YOW-SJD 4,737-900ER,https://www.airlines-manager.com/network/showline/48842082,https://www.airlines-manager.com/network/showflight/52163458617,https://www.airlines-manager.com/aircraft/show/114266975,8:30,13:59,320,"$355,565.00","$317,931.00"
IAH - PVR,52167946318,IAH-YOW-SJD 3,737-900ER,https://www.airlines-manager.com/network/showline/48842082,https://www.airlines-manager.com/network/showflight/52167946318,https://www.airlines-manager.com/aircraft/show/113250059,12:00,17:29,320,"$355,565.00","$317,931.00"
IAH - PVR,52181070725,IAH-YOW-SJD 2,737-900ER,https://www.airlines-manager.com/network/showline/48842082,https://www.airlines-manager.com/network/showflight/52181070725,https://www.airlines-manager.com/aircraft/show/113114108,18:00,23:29,320,"$355,565.00","$317,931.00"
IAH - PVR,52188655674,IAH-YOW-SJD 1,737-900ER,https://www.airlines-manager.com/network/showline/48842082,https://www.airlines-manager.com/network/showflight/52188655674,https://www.airlines-manager.com/aircraft/show/114266974,22:00,3:29,320,"$355,565.00","$317,931.00"
IAH - PWM,52157350212,IAH-SJC-PWM 5 B,A319-100,https://www.airlines-manager.com/network/showline/46335442,https://www.airlines-manager.com/network/showflight/52157350212,https://www.airlines-manager.com/aircraft/show/106014350,7:45,16:14,198,"$406,561.00","$372,377.00"
IAH - PWM,52167946227,IAH-SJC-PWM 2,A321-200,https://www.airlines-manager.com/network/showline/46335442,https://www.airlines-manager.com/network/showflight/52167946227,https://www.airlines-manager.com/aircraft/show/96691558,11:00,19:29,310,"$539,915.00","$497,274.00"
IAH - PWM,52176667053,IAH-SJC-PWM 4,A321-200,https://www.airlines-manager.com/network/showline/46335442,https://www.airlines-manager.com/network/showflight/52176667053,https://www.airlines-manager.com/aircraft/show/96694086,15:00,23:29,310,"$539,915.00","$497,274.00"
IAH - PWM,52185045343,IAH-SJC-PWM 1,A321-200,https://www.airlines-manager.com/network/showline/46335442,https://www.airlines-manager.com/network/showflight/52185045343,https://www.airlines-manager.com/aircraft/show/96692491,19:15,3:44,310,"$539,915.00","$497,274.00"
IAH - PWM,52188655756,IAH-SJC-PWM 3,A321-200,https://www.airlines-manager.com/network/showline/46335442,https://www.airlines-manager.com/network/showflight/52188655756,https://www.airlines-manager.com/aircraft/show/96692343,22:45,7:14,310,"$539,915.00","$497,274.00"
IAH - RDU,52157350029,IAH-PIT-RDU 3,A321-200,https://www.airlines-manager.com/network/showline/45172096,https://www.airlines-manager.com/network/showflight/52157350029,https://www.airlines-manager.com/aircraft/show/100684072,5:15,11:29,310,"$388,617.00","$351,813.00"
IAH - RDU,52167946282,IAH-PIT-RDU 2,A321-200,https://www.airlines-manager.com/network/showline/45172096,https://www.airlines-manager.com/network/showflight/52167946282,https://www.airlines-manager.com/aircraft/show/100684073,11:30,17:44,310,"$388,617.00","$351,813.00"
IAH - RDU,52181070709,IAH-PIT-RDU 1,A321-200,https://www.airlines-manager.com/network/showline/45172096,https://www.airlines-manager.com/network/showflight/52181070709,https://www.airlines-manager.com/aircraft/show/100684074,17:45,23:59,310,"$388,617.00","$351,813.00"
IAH - RDU,52188655716,IAH-PIT-RDU 5 B,A319-100,https://www.airlines-manager.com/network/showline/45172096,https://www.airlines-manager.com/network/showflight/52188655716,https://www.airlines-manager.com/aircraft/show/110582845,22:30,4:44,198,"$293,754.00","$264,265.00"
IAH - RDU,52191270979,IAH-PIT-RDU 4,A321-200,https://www.airlines-manager.com/network/showline/45172096,https://www.airlines-manager.com/network/showflight/52191270979,https://www.airlines-manager.com/aircraft/show/100684071,23:45,5:59,310,"$388,617.00","$351,813.00"
IAH - RIC,52143769167,IAH-RIC-SDF 2,A321-200,https://www.airlines-manager.com/network/showline/46824134,https://www.airlines-manager.com/network/showflight/52143769167,https://www.airlines-manager.com/aircraft/show/107467133,2:45,9:14,310,"$416,466.00","$380,152.00"
IAH - RIC,52167946317,IAH-RIC-SDF 1,A321-200,https://www.airlines-manager.com/network/showline/46824134,https://www.airlines-manager.com/network/showflight/52167946317,https://www.airlines-manager.com/aircraft/show/107467134,12:00,18:29,310,"$416,466.00","$380,152.00"
IAH - RIC,52172581957,IAH-RIC-SDF 5,ERJ-175,https://www.airlines-manager.com/network/showline/46824134,https://www.airlines-manager.com/network/showflight/52172581957,https://www.airlines-manager.com/aircraft/show/107467211,13:45,20:14,112,"$195,922.00","$172,116.00"
IAH - RIC,52176667092,IAH-RIC-SDF 4,A321-200,https://www.airlines-manager.com/network/showline/46824134,https://www.airlines-manager.com/network/showflight/52176667092,https://www.airlines-manager.com/aircraft/show/107467131,15:45,22:14,310,"$416,466.00","$380,152.00"
IAH - RIC,52188655612,IAH-RIC-SDF 3,A321-200,https://www.airlines-manager.com/network/showline/46824134,https://www.airlines-manager.com/network/showflight/52188655612,https://www.airlines-manager.com/aircraft/show/107467132,21:30,3:59,310,"$416,466.00","$380,152.00"
IAH - RNO,52143769030,IAH-RNO-MCI 3,A321-200,https://www.airlines-manager.com/network/showline/45594514,https://www.airlines-manager.com/network/showflight/52143769030,https://www.airlines-manager.com/aircraft/show/103882357,1:15,9:14,310,"$511,897.00","$468,789.00"
IAH - RNO,52143769031,IAH-RNO-MCI 5,ERJ-175,https://www.airlines-manager.com/network/showline/45594514,https://www.airlines-manager.com/network/showflight/52143769031,https://www.airlines-manager.com/aircraft/show/105099861,4:00,11:59,112,"$240,834.00","$212,302.00"
IAH - RNO,52157350006,IAH-RNO-MCI 2,A321-200,https://www.airlines-manager.com/network/showline/45594514,https://www.airlines-manager.com/network/showflight/52157350006,https://www.airlines-manager.com/aircraft/show/103882356,5:00,12:59,310,"$511,897.00","$468,789.00"
IAH - RNO,52172581896,IAH-RNO-MCI 1,A321-200,https://www.airlines-manager.com/network/showline/45594514,https://www.airlines-manager.com/network/showflight/52172581896,https://www.airlines-manager.com/aircraft/show/103882355,13:00,20:59,310,"$511,897.00","$468,789.00"
IAH - RNO,52181070645,IAH-RNO-MCI 4,A321-200,https://www.airlines-manager.com/network/showline/45594514,https://www.airlines-manager.com/network/showflight/52181070645,https://www.airlines-manager.com/aircraft/show/103882358,17:00,0:59,310,"$511,897.00","$468,789.00"
IAH - RSW,52143769173,IAH-PBI-RSW 4,A321-200,https://www.airlines-manager.com/network/showline/45920413,https://www.airlines-manager.com/network/showflight/52143769173,https://www.airlines-manager.com/aircraft/show/104717244,2:45,8:14,310,"$349,426.00","$314,868.00"
IAH - RSW,52167946251,IAH-PBI-RSW 3,A321-200,https://www.airlines-manager.com/network/showline/45920413,https://www.airlines-manager.com/network/showflight/52167946251,https://www.airlines-manager.com/aircraft/show/104717245,11:00,16:29,310,"$349,426.00","$314,868.00"
IAH - RSW,52176667101,IAH-PBI-RSW 2,A321-200,https://www.airlines-manager.com/network/showline/45920413,https://www.airlines-manager.com/network/showflight/52176667101,https://www.airlines-manager.com/aircraft/show/104717246,15:45,21:14,310,"$349,426.00","$314,868.00"
IAH - RSW,52188655650,IAH-PBI-RSW 1,A321-200,https://www.airlines-manager.com/network/showline/45920413,https://www.airlines-manager.com/network/showflight/52188655650,https://www.airlines-manager.com/aircraft/show/104717247,21:30,2:59,310,"$349,426.00","$314,868.00"
IAH - RSW,52191270965,IAH-PBI-RSW 5,ERJ-175,https://www.airlines-manager.com/network/showline/45920413,https://www.airlines-manager.com/network/showflight/52191270965,https://www.airlines-manager.com/aircraft/show/104743902,23:45,5:14,112,"$165,368.00","$143,132.00"
IAH - SAN,52143768980,IAH-IAD-SAN 4,737-900ER,https://www.airlines-manager.com/network/showline/44653695,https://www.airlines-manager.com/network/showflight/52143768980,https://www.airlines-manager.com/aircraft/show/98578921,0:45,7:59,320,"$452,539.00","$405,198.00"
IAH - SAN,52143768981,IAH-IAD-SAN 3,737-900ER,https://www.airlines-manager.com/network/showline/44653695,https://www.airlines-manager.com/network/showflight/52143768981,https://www.airlines-manager.com/aircraft/show/98578922,4:15,11:29,320,"$452,539.00","$405,198.00"
IAH - SAN,52163458777,IAH-IAD-SAN 6,ERJ-175,https://www.airlines-manager.com/network/showline/44653695,https://www.airlines-manager.com/network/showflight/52163458777,https://www.airlines-manager.com/aircraft/show/105400635,10:15,17:29,112,"$214,307.00","$186,848.00"
IAH - SAN,52176667003,IAH-IAD-SAN 2,737-900ER,https://www.airlines-manager.com/network/showline/44653695,https://www.airlines-manager.com/network/showflight/52176667003,https://www.airlines-manager.com/aircraft/show/98578923,15:00,22:14,320,"$452,539.00","$405,198.00"
IAH - SAN,52181070747,IAH-IAD-SAN 5,737-900ER,https://www.airlines-manager.com/network/showline/44653695,https://www.airlines-manager.com/network/showflight/52181070747,https://www.airlines-manager.com/aircraft/show/98578920,18:00,1:14,320,"$452,539.00","$405,198.00"
IAH - SAN,52185045382,IAH-IAD-SAN 1,737-900ER,https://www.airlines-manager.com/network/showline/44653695,https://www.airlines-manager.com/network/showflight/52185045382,https://www.airlines-manager.com/aircraft/show/98578924,19:45,2:59,320,"$452,539.00","$405,198.00"
IAH - SAT,52143769054,IAH-SMF-CVG 5 B,A319-100,https://www.airlines-manager.com/network/showline/44833765,https://www.airlines-manager.com/network/showflight/52143769054,https://www.airlines-manager.com/aircraft/show/106499070,1:30,4:14,198,"$90,213.00","$72,334.00"
IAH - SAT,52157350096,IAH CARGO 2,A320-200,https://www.airlines-manager.com/network/showline/44833765,https://www.airlines-manager.com/network/showflight/52157350096,https://www.airlines-manager.com/aircraft/show/101412921,6:00,8:44,0,"$44,000.00","$21,973.00"
IAH - SAT,52163458701,IAH-SMF-CVG 4,737-900ER,https://www.airlines-manager.com/network/showline/44833765,https://www.airlines-manager.com/network/showflight/52163458701,https://www.airlines-manager.com/aircraft/show/99093332,9:45,12:29,320,"$119,364.00","$93,000.00"
IAH - SAT,52172581961,IAH-SMF-CVG 3,737-900ER,https://www.airlines-manager.com/network/showline/44833765,https://www.airlines-manager.com/network/showflight/52172581961,https://www.airlines-manager.com/aircraft/show/99093333,14:00,16:44,320,"$119,364.00","$93,000.00"
IAH - SAT,52181070719,IAH-SMF-CVG 2,737-900ER,https://www.airlines-manager.com/network/showline/44833765,https://www.airlines-manager.com/network/showflight/52181070719,https://www.airlines-manager.com/aircraft/show/99093334,18:00,20:44,320,"$119,364.00","$93,000.00"
IAH - SAT,52191270961,IAH-SMF-CVG 1,737-900ER,https://www.airlines-manager.com/network/showline/44833765,https://www.airlines-manager.com/network/showflight/52191270961,https://www.airlines-manager.com/aircraft/show/99093335,23:30,2:14,320,"$119,364.00","$93,000.00"
IAH - SAV,52143769114,IAH-FAT-SAV 4,737-900ER,https://www.airlines-manager.com/network/showline/47654558,https://www.airlines-manager.com/network/showflight/52143769114,https://www.airlines-manager.com/aircraft/show/110424758,2:00,7:29,320,"$342,442.00","$306,636.00"
IAH - SAV,52163458630,IAH-FAT-SAV 3,737-900ER,https://www.airlines-manager.com/network/showline/47654558,https://www.airlines-manager.com/network/showflight/52163458630,https://www.airlines-manager.com/aircraft/show/110424759,8:30,13:59,320,"$342,442.00","$306,636.00"
IAH - SAV,52172581863,IAH-FAT-SAV 2,737-900ER,https://www.airlines-manager.com/network/showline/47654558,https://www.airlines-manager.com/network/showflight/52172581863,https://www.airlines-manager.com/aircraft/show/110424760,13:00,18:29,320,"$342,442.00","$306,636.00"
IAH - SAV,52188655672,IAH-FAT-SAV 1,737-900ER,https://www.airlines-manager.com/network/showline/47654558,https://www.airlines-manager.com/network/showflight/52188655672,https://www.airlines-manager.com/aircraft/show/110424761,21:45,3:14,320,"$342,442.00","$306,636.00"
IAH - SCL,52143769050,IAH 56A-1 B,787-10,https://www.airlines-manager.com/network/showline/41776795,https://www.airlines-manager.com/network/showflight/52143769050,https://www.airlines-manager.com/aircraft/show/106676232,1:30,19:59,648,"$2,288,076.00","$2,131,960.00"
IAH - SCL,52157350119,IAH 56A-3 B,787-10,https://www.airlines-manager.com/network/showline/41776795,https://www.airlines-manager.com/network/showflight/52157350119,https://www.airlines-manager.com/aircraft/show/106676234,6:30,0:59,648,"$2,288,076.00","$2,131,960.00"
IAH - SCL,52181070694,IAH 56A-5 B,787-10,https://www.airlines-manager.com/network/showline/41776795,https://www.airlines-manager.com/network/showflight/52181070694,https://www.airlines-manager.com/aircraft/show/106676236,17:30,11:59,647,"$2,284,585.00","$2,128,615.00"
IAH - SDF,52143769259,IAH-RIC-SDF 3,A321-200,https://www.airlines-manager.com/network/showline/46824149,https://www.airlines-manager.com/network/showflight/52143769259,https://www.airlines-manager.com/aircraft/show/107467132,4:00,9:14,310,"$328,829.00","$296,276.00"
IAH - SDF,52167946323,IAH-RIC-SDF 2,A321-200,https://www.airlines-manager.com/network/showline/46824149,https://www.airlines-manager.com/network/showflight/52167946323,https://www.airlines-manager.com/aircraft/show/107467133,12:00,17:14,310,"$328,829.00","$296,276.00"
IAH - SDF,52181070773,IAH-RIC-SDF 1,A321-200,https://www.airlines-manager.com/network/showline/46824149,https://www.airlines-manager.com/network/showflight/52181070773,https://www.airlines-manager.com/aircraft/show/107467134,18:30,23:44,310,"$328,829.00","$296,276.00"
IAH - SDF,52185045423,IAH-RIC-SDF 5,ERJ-175,https://www.airlines-manager.com/network/showline/46824149,https://www.airlines-manager.com/network/showflight/52185045423,https://www.airlines-manager.com/aircraft/show/107467211,20:15,1:29,112,"$156,147.00","$135,240.00"
IAH - SDF,52188655701,IAH-RIC-SDF 4,A321-200,https://www.airlines-manager.com/network/showline/46824149,https://www.airlines-manager.com/network/showflight/52188655701,https://www.airlines-manager.com/aircraft/show/107467131,22:15,3:29,310,"$328,829.00","$296,276.00"
IAH - SEA,52143769224,IAH-SEA-DEN 1,A321neo,https://www.airlines-manager.com/network/showline/41444678,https://www.airlines-manager.com/network/showflight/52143769224,https://www.airlines-manager.com/aircraft/show/105562971,3:30,12:44,338,"$643,740.00","$588,382.00"
IAH - SEA,52143769225,IAH-SEA-DEN 3,A321neo,https://www.airlines-manager.com/network/showline/41444678,https://www.airlines-manager.com/network/showflight/52143769225,https://www.airlines-manager.com/aircraft/show/105562973,4:30,13:44,338,"$643,740.00","$588,382.00"
IAH - SEA,52172581883,IAH-SEA-DEN 2,A321neo,https://www.airlines-manager.com/network/showline/41444678,https://www.airlines-manager.com/network/showflight/52172581883,https://www.airlines-manager.com/aircraft/show/105562972,13:00,22:14,338,"$643,740.00","$588,382.00"
IAH - SEA,52172581884,IAH-SEA-DEN 4,A321neo,https://www.airlines-manager.com/network/showline/41444678,https://www.airlines-manager.com/network/showflight/52172581884,https://www.airlines-manager.com/aircraft/show/105562974,14:00,23:14,338,"$643,740.00","$588,382.00"
IAH - SEA,52181070679,IAH-SEA-DEN 5,A321neo,https://www.airlines-manager.com/network/showline/41444678,https://www.airlines-manager.com/network/showflight/52181070679,https://www.airlines-manager.com/aircraft/show/105562975,17:30,2:44,338,"$643,740.00","$588,382.00"
IAH - SEA,52188655606,IAH-SEA-DEN 6,ERJ-175,https://www.airlines-manager.com/network/showline/41444678,https://www.airlines-manager.com/network/showflight/52188655606,https://www.airlines-manager.com/aircraft/show/105601215,21:15,6:44,111,"$277,610.00","$239,823.00"
IAH - SJC,52143769199,IAH-SJC-PWM 4,A321-200,https://www.airlines-manager.com/network/showline/46335448,https://www.airlines-manager.com/network/showflight/52143769199,https://www.airlines-manager.com/aircraft/show/96694086,3:00,11:14,310,"$531,203.00","$485,574.00"
IAH - SJC,52167946228,IAH-SJC-PWM 1,A321-200,https://www.airlines-manager.com/network/showline/46335448,https://www.airlines-manager.com/network/showflight/52167946228,https://www.airlines-manager.com/aircraft/show/96692491,11:00,19:14,310,"$531,203.00","$485,574.00"
IAH - SJC,52176666981,IAH-SJC-PWM 3,A321-200,https://www.airlines-manager.com/network/showline/46335448,https://www.airlines-manager.com/network/showflight/52176666981,https://www.airlines-manager.com/aircraft/show/96692343,14:30,22:44,310,"$531,203.00","$485,574.00"
IAH - SJC,52191270912,IAH-SJC-PWM 2,A321-200,https://www.airlines-manager.com/network/showline/46335448,https://www.airlines-manager.com/network/showflight/52191270912,https://www.airlines-manager.com/aircraft/show/96691558,23:00,7:14,310,"$531,203.00","$485,574.00"
IAH - SJC,52191270913,IAH-SJC-PWM 5 B,A319-100,https://www.airlines-manager.com/network/showline/46335448,https://www.airlines-manager.com/network/showflight/52191270913,https://www.airlines-manager.com/aircraft/show/106014350,23:30,7:44,198,"$399,697.00","$363,125.00"
IAH - SJD,52143769106,IAH-YOW-SJD 4,737-900ER,https://www.airlines-manager.com/network/showline/48842079,https://www.airlines-manager.com/network/showflight/52143769106,https://www.airlines-manager.com/aircraft/show/114266975,1:45,7:44,320,"$380,891.00","$342,053.00"
IAH - SJD,52157350028,IAH-YOW-SJD 3,737-900ER,https://www.airlines-manager.com/network/showline/48842079,https://www.airlines-manager.com/network/showflight/52157350028,https://www.airlines-manager.com/aircraft/show/113250059,5:15,11:14,320,"$380,891.00","$342,053.00"
IAH - SJD,52167946307,IAH-YOW-SJD 2,737-900ER,https://www.airlines-manager.com/network/showline/48842079,https://www.airlines-manager.com/network/showflight/52167946307,https://www.airlines-manager.com/aircraft/show/113114108,12:00,17:59,320,"$380,891.00","$342,053.00"
IAH - SJD,52176667109,IAH-YOW-SJD 1,737-900ER,https://www.airlines-manager.com/network/showline/48842079,https://www.airlines-manager.com/network/showflight/52176667109,https://www.airlines-manager.com/aircraft/show/114266974,16:00,21:59,320,"$380,891.00","$342,053.00"
IAH - SJD,52188655517,IAH-YOW-SJD 5,ERJ-175,https://www.airlines-manager.com/network/showline/48842079,https://www.airlines-manager.com/network/showflight/52188655517,https://www.airlines-manager.com/aircraft/show/105099862,21:00,2:59,108,"$173,444.00","$151,315.00"
IAH - SLC,52143769186,IAH-SLC-CLT 2,A321-200,https://www.airlines-manager.com/network/showline/42839462,https://www.airlines-manager.com/network/showflight/52143769186,https://www.airlines-manager.com/aircraft/show/93094698,2:45,9:29,310,"$424,184.00","$380,697.00"
IAH - SLC,52157349986,IAH-SLC-CLT 6,ERJ-175,https://www.airlines-manager.com/network/showline/42839462,https://www.airlines-manager.com/network/showflight/52157349986,https://www.airlines-manager.com/aircraft/show/93100455,4:45,11:29,112,"$199,593.00","$171,416.00"
IAH - SLC,52163458717,IAH-SLC-CLT 1,A321-200,https://www.airlines-manager.com/network/showline/42839462,https://www.airlines-manager.com/network/showflight/52163458717,https://www.airlines-manager.com/aircraft/show/93094699,10:00,16:44,310,"$424,184.00","$380,697.00"
IAH - SLC,52167946343,IAH-SLC-CLT 5,A321-200,https://www.airlines-manager.com/network/showline/42839462,https://www.airlines-manager.com/network/showflight/52167946343,https://www.airlines-manager.com/aircraft/show/93094695,12:00,18:44,310,"$424,184.00","$380,697.00"
IAH - SLC,52176667070,IAH-SLC-CLT 4,A321-200,https://www.airlines-manager.com/network/showline/42839462,https://www.airlines-manager.com/network/showflight/52176667070,https://www.airlines-manager.com/aircraft/show/93094696,15:15,21:59,310,"$424,184.00","$380,697.00"
IAH - SLC,52188655537,IAH-SLC-CLT 3,A321-200,https://www.airlines-manager.com/network/showline/42839462,https://www.airlines-manager.com/network/showflight/52188655537,https://www.airlines-manager.com/aircraft/show/93094697,21:00,3:44,310,"$424,184.00","$380,697.00"
IAH - SMF,52143769139,IAH-SMF-CVG 1,737-900ER,https://www.airlines-manager.com/network/showline/44844654,https://www.airlines-manager.com/network/showflight/52143769139,https://www.airlines-manager.com/aircraft/show/99093335,2:15,10:29,320,"$529,858.00","$480,629.00"
IAH - SMF,52143769140,IAH-SMF-CVG 5 B,A319-100,https://www.airlines-manager.com/network/showline/44844654,https://www.airlines-manager.com/network/showflight/52143769140,https://www.airlines-manager.com/aircraft/show/106499070,4:15,12:29,198,"$399,196.00","$363,807.00"
IAH - SMF,52172581909,IAH-SMF-CVG 4,737-900ER,https://www.airlines-manager.com/network/showline/44844654,https://www.airlines-manager.com/network/showflight/52172581909,https://www.airlines-manager.com/aircraft/show/99093332,13:00,21:14,320,"$529,858.00","$480,629.00"
IAH - SMF,52181070617,IAH-SMF-CVG 3,737-900ER,https://www.airlines-manager.com/network/showline/44844654,https://www.airlines-manager.com/network/showflight/52181070617,https://www.airlines-manager.com/aircraft/show/99093333,16:45,0:59,320,"$529,858.00","$480,629.00"
IAH - SMF,52185045454,IAH-SMF-CVG 2,737-900ER,https://www.airlines-manager.com/network/showline/44844654,https://www.airlines-manager.com/network/showflight/52185045454,https://www.airlines-manager.com/aircraft/show/99093334,20:45,4:59,319,"$528,314.00","$479,139.00"
IAH - STL,52143769027,IAH-CLE-STL 4,A321-200,https://www.airlines-manager.com/network/showline/45490332,https://www.airlines-manager.com/network/showflight/52143769027,https://www.airlines-manager.com/aircraft/show/88725601,1:15,5:59,310,"$299,774.00","$267,503.00"
IAH - STL,52163458602,IAH-CLE-STL 3,A321-200,https://www.airlines-manager.com/network/showline/45490332,https://www.airlines-manager.com/network/showflight/52163458602,https://www.airlines-manager.com/aircraft/show/103600702,8:15,12:59,310,"$299,774.00","$267,503.00"
IAH - STL,52172582016,IAH-CLE-STL 2,A321-200,https://www.airlines-manager.com/network/showline/45490332,https://www.airlines-manager.com/network/showflight/52172582016,https://www.airlines-manager.com/aircraft/show/103600701,14:00,18:44,310,"$299,774.00","$267,503.00"
IAH - STL,52176667047,IAH-DFW-STL,ERJ-175,https://www.airlines-manager.com/network/showline/45490332,https://www.airlines-manager.com/network/showflight/52176667047,https://www.airlines-manager.com/aircraft/show/96990010,15:00,19:44,112,"$142,540.00","$122,010.00"
IAH - STL,52185045429,IAH-CLE-STL 1,A321-200,https://www.airlines-manager.com/network/showline/45490332,https://www.airlines-manager.com/network/showflight/52185045429,https://www.airlines-manager.com/aircraft/show/103600700,20:15,0:59,310,"$299,774.00","$267,503.00"
IAH - STL,52188655666,IAH-CLE-STL 5 B,A319-100,https://www.airlines-manager.com/network/showline/45490332,https://www.airlines-manager.com/network/showflight/52188655666,https://www.airlines-manager.com/aircraft/show/110582844,21:45,2:29,198,"$227,799.00","$201,953.00"
IAH - TPA,52143769272,IAH-SLC-CLT 1,A321-200,https://www.airlines-manager.com/network/showline/42874411,https://www.airlines-manager.com/network/showflight/52143769272,https://www.airlines-manager.com/aircraft/show/93094699,4:15,9:29,310,"$326,235.00","$291,013.00"
IAH - TPA,52157350111,IAH-SLC-CLT 5,A321-200,https://www.airlines-manager.com/network/showline/42874411,https://www.airlines-manager.com/network/showflight/52157350111,https://www.airlines-manager.com/aircraft/show/93094695,6:15,11:29,310,"$326,235.00","$291,013.00"
IAH - TPA,52163458768,IAH-SLC-CLT 4,A321-200,https://www.airlines-manager.com/network/showline/42874411,https://www.airlines-manager.com/network/showflight/52163458768,https://www.airlines-manager.com/aircraft/show/93094696,10:00,15:14,310,"$326,235.00","$291,013.00"
IAH - TPA,52176667100,IAH-SLC-CLT 3,A321-200,https://www.airlines-manager.com/network/showline/42874411,https://www.airlines-manager.com/network/showflight/52176667100,https://www.airlines-manager.com/aircraft/show/93094697,15:45,20:59,310,"$326,235.00","$291,013.00"
IAH - TPA,52188655645,IAH-SLC-CLT 2,A321-200,https://www.airlines-manager.com/network/showline/42874411,https://www.airlines-manager.com/network/showflight/52188655645,https://www.airlines-manager.com/aircraft/show/93094698,21:30,2:44,310,"$326,235.00","$291,013.00"
IAH - TPA,52191270954,IAH-SLC-CLT 6,ERJ-175,https://www.airlines-manager.com/network/showline/42874411,https://www.airlines-manager.com/network/showflight/52191270954,https://www.airlines-manager.com/aircraft/show/93100455,23:30,4:44,107,"$152,063.00","$129,727.00"
IAH - TUL,52143768950,IAH-BTV-CAK 5,ERJ-175,https://www.airlines-manager.com/network/showline/48841734,https://www.airlines-manager.com/network/showflight/52143768950,https://www.airlines-manager.com/aircraft/show/82543907,0:30,4:14,112,"$93,634.00","$77,420.00"
IAH - TUL,52143768951,IAH-BTV-CAK 2,A321-200,https://www.airlines-manager.com/network/showline/48841734,https://www.airlines-manager.com/network/showflight/52143768951,https://www.airlines-manager.com/aircraft/show/114373409,3:30,7:14,310,"$202,736.00","$176,965.00"
IAH - TUL,52163458700,IAH-BTV-CAK 1,A321-200,https://www.airlines-manager.com/network/showline/48841734,https://www.airlines-manager.com/network/showflight/52163458700,https://www.airlines-manager.com/aircraft/show/114373410,9:45,13:29,310,"$202,736.00","$176,965.00"
IAH - TUL,52176667000,IAH-BTV-CAK 4,A321-200,https://www.airlines-manager.com/network/showline/48841734,https://www.airlines-manager.com/network/showflight/52176667000,https://www.airlines-manager.com/aircraft/show/113994196,15:00,18:44,310,"$202,736.00","$176,965.00"
IAH - TUL,52185045427,IAH-BTV-CAK 3,A321-200,https://www.airlines-manager.com/network/showline/48841734,https://www.airlines-manager.com/network/showflight/52185045427,https://www.airlines-manager.com/aircraft/show/86385103,20:15,23:59,310,"$202,736.00","$176,965.00"
IAH - TUS,52157350043,IAH-PIT-RDU 1,A321-200,https://www.airlines-manager.com/network/showline/45170727,https://www.airlines-manager.com/network/showflight/52157350043,https://www.airlines-manager.com/aircraft/show/100684074,5:30,11:14,310,"$358,649.00","$324,570.00"
IAH - TUS,52163458772,IAH-PIT-RDU 5 B,A319-100,https://www.airlines-manager.com/network/showline/45170727,https://www.airlines-manager.com/network/showflight/52163458772,https://www.airlines-manager.com/aircraft/show/110582845,10:15,15:59,198,"$271,974.00","$244,671.00"
IAH - TUS,52167946287,IAH-PIT-RDU 4,A321-200,https://www.airlines-manager.com/network/showline/45170727,https://www.airlines-manager.com/network/showflight/52167946287,https://www.airlines-manager.com/aircraft/show/100684071,11:30,17:14,310,"$358,649.00","$324,570.00"
IAH - TUS,52181070662,IAH-PIT-RDU 3,A321-200,https://www.airlines-manager.com/network/showline/45170727,https://www.airlines-manager.com/network/showflight/52181070662,https://www.airlines-manager.com/aircraft/show/100684072,17:00,22:44,310,"$358,649.00","$324,570.00"
IAH - TUS,52191270939,IAH-PIT-RDU 2,A321-200,https://www.airlines-manager.com/network/showline/45170727,https://www.airlines-manager.com/network/showflight/52191270939,https://www.airlines-manager.com/aircraft/show/100684073,23:15,4:59,310,"$358,649.00","$324,570.00"
IAH - UIO,52143768946,IAH 84A-3 E1,777-300,https://www.airlines-manager.com/network/showline/41572544,https://www.airlines-manager.com/network/showflight/52143768946,https://www.airlines-manager.com/aircraft/show/89124076,0:30,11:14,932,"$1,794,530.00","$1,639,136.00"
IAH - UIO,52172581942,IAH 84A-6 E1,777-300,https://www.airlines-manager.com/network/showline/41572544,https://www.airlines-manager.com/network/showflight/52172581942,https://www.airlines-manager.com/aircraft/show/88905141,13:15,23:59,932,"$1,794,530.00","$1,639,136.00"
IAH - YOW,52143769207,IAH-YOW-SJD 2,737-900ER,https://www.airlines-manager.com/network/showline/48842072,https://www.airlines-manager.com/network/showflight/52143769207,https://www.airlines-manager.com/aircraft/show/113114108,3:15,11:14,320,"$508,648.00","$460,991.00"
IAH - YOW,52163458585,IAH-YOW-SJD 1,737-900ER,https://www.airlines-manager.com/network/showline/48842072,https://www.airlines-manager.com/network/showflight/52163458585,https://www.airlines-manager.com/aircraft/show/114266974,8:00,15:59,320,"$508,648.00","$460,991.00"
IAH - YOW,52172581852,IAH-YOW-SJD 5,ERJ-175,https://www.airlines-manager.com/network/showline/48842072,https://www.airlines-manager.com/network/showflight/52172581852,https://www.airlines-manager.com/aircraft/show/105099862,13:00,20:59,112,"$238,472.00","$210,267.00"
IAH - YOW,52181070701,IAH-YOW-SJD 4,737-900ER,https://www.airlines-manager.com/network/showline/48842072,https://www.airlines-manager.com/network/showflight/52181070701,https://www.airlines-manager.com/aircraft/show/114266975,17:45,1:44,320,"$508,648.00","$460,991.00"
IAH - YOW,52188655593,IAH-YOW-SJD 3,737-900ER,https://www.airlines-manager.com/network/showline/48842072,https://www.airlines-manager.com/network/showflight/52188655593,https://www.airlines-manager.com/aircraft/show/113250059,21:15,5:14,320,"$508,648.00","$460,991.00"
IAH - YUL,52143768969,IAH-YYC-YUL 4,757-300,https://www.airlines-manager.com/network/showline/48842047,https://www.airlines-manager.com/network/showflight/52143768969,https://www.airlines-manager.com/aircraft/show/114266980,0:45,8:44,400,"$682,212.00","$624,271.00"
IAH - YUL,52143768970,IAH-YYC-YUL 3,757-300,https://www.airlines-manager.com/network/showline/48842047,https://www.airlines-manager.com/network/showflight/52143768970,https://www.airlines-manager.com/aircraft/show/114266979,2:00,9:59,400,"$682,212.00","$624,271.00"
IAH - YUL,52167946338,IAH-YYC-YUL 2,757-300,https://www.airlines-manager.com/network/showline/48842047,https://www.airlines-manager.com/network/showflight/52167946338,https://www.airlines-manager.com/aircraft/show/114266978,12:00,19:59,400,"$682,212.00","$624,271.00"
IAH - YUL,52185045462,IAH-YYC-YUL 1,757-300,https://www.airlines-manager.com/network/showline/48842047,https://www.airlines-manager.com/network/showflight/52185045462,https://www.airlines-manager.com/aircraft/show/114266977,20:45,4:44,400,"$682,212.00","$624,271.00"
IAH - YVR,52143768983,IAH-MEX-YYZ 1,757-300,https://www.airlines-manager.com/network/showline/41988815,https://www.airlines-manager.com/network/showflight/52143768983,https://www.airlines-manager.com/aircraft/show/97076946,1:00,10:29,400,"$774,148.00","$706,086.00"
IAH - YVR,52143768984,IAH-MEX-YYZ 4,757-300,https://www.airlines-manager.com/network/showline/41988815,https://www.airlines-manager.com/network/showflight/52143768984,https://www.airlines-manager.com/aircraft/show/97076943,4:00,13:29,400,"$774,148.00","$706,086.00"
IAH - YVR,52172581925,IAH-MEX-YYZ 3,757-300,https://www.airlines-manager.com/network/showline/41988815,https://www.airlines-manager.com/network/showflight/52172581925,https://www.airlines-manager.com/aircraft/show/97076944,13:00,22:29,400,"$774,148.00","$706,086.00"
IAH - YVR,52176667139,IAH-MEX-YYZ 6 S,ERJ-175,https://www.airlines-manager.com/network/showline/41988815,https://www.airlines-manager.com/network/showflight/52176667139,https://www.airlines-manager.com/aircraft/show/97026605,16:00,1:44,136,"$285,782.00","$249,874.00"
IAH - YVR,52185045406,IAH-MEX-YYZ 2,757-300,https://www.airlines-manager.com/network/showline/41988815,https://www.airlines-manager.com/network/showflight/52185045406,https://www.airlines-manager.com/aircraft/show/97076945,20:00,5:29,400,"$774,148.00","$706,086.00"
IAH - YVR,52191270924,IAH-MEX-YYZ 5,757-300,https://www.airlines-manager.com/network/showline/41988815,https://www.airlines-manager.com/network/showflight/52191270924,https://www.airlines-manager.com/aircraft/show/97076942,23:00,8:29,399,"$772,458.00","$704,460.00"
IAH - YYC,52143769034,IAH-YYC-YUL 2,757-300,https://www.airlines-manager.com/network/showline/48842030,https://www.airlines-manager.com/network/showflight/52143769034,https://www.airlines-manager.com/aircraft/show/114266978,1:15,9:59,400,"$742,545.00","$679,793.00"
IAH - YYC,52167946339,IAH-YYC-YUL 1,757-300,https://www.airlines-manager.com/network/showline/48842030,https://www.airlines-manager.com/network/showflight/52167946339,https://www.airlines-manager.com/aircraft/show/114266977,12:00,20:44,400,"$742,545.00","$679,793.00"
IAH - YYC,52176667110,IAH-YYC-YUL 4,757-300,https://www.airlines-manager.com/network/showline/48842030,https://www.airlines-manager.com/network/showflight/52176667110,https://www.airlines-manager.com/aircraft/show/114266980,16:00,0:44,400,"$742,545.00","$679,793.00"
IAH - YYC,52181070672,IAH-YYC-YUL 3,757-300,https://www.airlines-manager.com/network/showline/48842030,https://www.airlines-manager.com/network/showflight/52181070672,https://www.airlines-manager.com/aircraft/show/114266979,17:15,1:59,400,"$742,545.00","$679,793.00"
IAH - YYZ,52143769230,IAH-MEX-YYZ 3,757-300,https://www.airlines-manager.com/network/showline/41856128,https://www.airlines-manager.com/network/showflight/52143769230,https://www.airlines-manager.com/aircraft/show/97076944,3:30,10:29,400,"$572,330.00","$513,682.00"
IAH - YYZ,52157350126,IAH-MEX-YYZ 6 S,ERJ-175,https://www.airlines-manager.com/network/showline/41856128,https://www.airlines-manager.com/network/showflight/52157350126,https://www.airlines-manager.com/aircraft/show/97026605,6:45,13:44,136,"$211,389.00","$180,846.00"
IAH - YYZ,52172581926,IAH-MEX-YYZ 2,757-300,https://www.airlines-manager.com/network/showline/41856128,https://www.airlines-manager.com/network/showflight/52172581926,https://www.airlines-manager.com/aircraft/show/97076945,13:00,19:59,400,"$572,330.00","$513,682.00"
IAH - YYZ,52176667144,IAH-MEX-YYZ 5,757-300,https://www.airlines-manager.com/network/showline/41856128,https://www.airlines-manager.com/network/showflight/52176667144,https://www.airlines-manager.com/aircraft/show/97076942,16:00,22:59,400,"$572,330.00","$513,682.00"
IAH - YYZ,52181070734,IAH-MEX-YYZ 1,757-300,https://www.airlines-manager.com/network/showline/41856128,https://www.airlines-manager.com/network/showflight/52181070734,https://www.airlines-manager.com/aircraft/show/97076946,18:00,0:59,400,"$572,330.00","$513,682.00"
IAH - YYZ,52188655578,IAH-MEX-YYZ 4,757-300,https://www.airlines-manager.com/network/showline/41856128,https://www.airlines-manager.com/network/showflight/52188655578,https://www.airlines-manager.com/aircraft/show/97076943,21:00,3:59,400,"$572,330.00","$513,682.00"
MIA - ABQ,52143769043,MIA-IAD-TUS 1,A321-200,https://www.airlines-manager.com/network/showline/44372807,https://www.airlines-manager.com/network/showflight/52143769043,https://www.airlines-manager.com/aircraft/show/97556721,1:15,9:59,310,"$547,351.00","$499,510.00"
MIA - ABQ,52143769044,MIA-IAD-TUS 4,A321-200,https://www.airlines-manager.com/network/showline/44372807,https://www.airlines-manager.com/network/showflight/52143769044,https://www.airlines-manager.com/aircraft/show/97556718,4:15,12:59,310,"$547,351.00","$499,510.00"
MIA - ABQ,52163458709,MIA-IAD-TUS 3,A321-200,https://www.airlines-manager.com/network/showline/44372807,https://www.airlines-manager.com/network/showflight/52163458709,https://www.airlines-manager.com/aircraft/show/97556719,10:00,18:44,310,"$547,351.00","$499,510.00"
MIA - ABQ,52185045348,MIA-IAD-TUS 2,A321-200,https://www.airlines-manager.com/network/showline/44372807,https://www.airlines-manager.com/network/showflight/52185045348,https://www.airlines-manager.com/aircraft/show/97556720,19:30,4:14,310,"$547,351.00","$499,510.00"
MIA - ABQ,52188655717,MIA-IAD-TUS 5,A321-200,https://www.airlines-manager.com/network/showline/44372807,https://www.airlines-manager.com/network/showflight/52188655717,https://www.airlines-manager.com/aircraft/show/97556716,22:30,7:14,310,"$547,351.00","$499,510.00"
MIA - ACC,52172582036,MIA 84B-2 E2,777-300,https://www.airlines-manager.com/network/showline/43186738,https://www.airlines-manager.com/network/showflight/52172582036,https://www.airlines-manager.com/aircraft/show/106676226,14:15,11:59,962,"$3,564,585.00","$3,254,272.00"
MIA - ACC,52188655737,MIA 84B-4 E2,777-300,https://www.airlines-manager.com/network/showline/43186738,https://www.airlines-manager.com/network/showflight/52188655737,https://www.airlines-manager.com/aircraft/show/106676228,22:45,20:29,962,"$3,564,585.00","$3,254,272.00"
MIA - ALB,52143769232,MIA-DSM-ALB 3,737-900ER,https://www.airlines-manager.com/network/showline/48487680,https://www.airlines-manager.com/network/showflight/52143769232,https://www.airlines-manager.com/aircraft/show/113101233,3:30,10:14,320,"$427,571.00","$386,197.00"
MIA - ALB,52172581855,MIA-DSM-ALB 2,737-900ER,https://www.airlines-manager.com/network/showline/48487680,https://www.airlines-manager.com/network/showflight/52172581855,https://www.airlines-manager.com/aircraft/show/113101230,13:00,19:44,320,"$427,571.00","$386,197.00"
MIA - ALB,52176667112,MIA-DSM-ALB 5,ERJ-175,https://www.airlines-manager.com/network/showline/48487680,https://www.airlines-manager.com/network/showflight/52176667112,https://www.airlines-manager.com/aircraft/show/100049776,16:00,22:59,112,"$202,234.00","$177,971.00"
MIA - ALB,52185045432,MIA-DSM-ALB 1,737-900ER,https://www.airlines-manager.com/network/showline/48487680,https://www.airlines-manager.com/network/showflight/52185045432,https://www.airlines-manager.com/aircraft/show/111064081,20:15,2:59,320,"$427,571.00","$386,197.00"
MIA - ALB,52191270937,MIA-DSM-ALB 4,737-900ER,https://www.airlines-manager.com/network/showline/48487680,https://www.airlines-manager.com/network/showflight/52191270937,https://www.airlines-manager.com/aircraft/show/113101228,23:15,5:59,320,"$427,571.00","$386,197.00"
MIA - ALG,52181070624,MIA 84B-7 E2,777-300,https://www.airlines-manager.com/network/showline/46538378,https://www.airlines-manager.com/network/showflight/52181070624,https://www.airlines-manager.com/aircraft/show/106676231,17:00,12:29,962,"$3,237,825.00","$2,952,293.00"
MIA - ALG,52185045437,MIA 84B-5 E2,777-300,https://www.airlines-manager.com/network/showline/46538378,https://www.airlines-manager.com/network/showflight/52185045437,https://www.airlines-manager.com/aircraft/show/106676229,20:30,15:59,962,"$3,237,825.00","$2,952,293.00"
MIA - ANU,52157350112,MIA-ANU-SXM 3 S,A319-100,https://www.airlines-manager.com/network/showline/47559658,https://www.airlines-manager.com/network/showflight/52157350112,https://www.airlines-manager.com/aircraft/show/110114297,6:30,13:44,228,"$355,365.00","$324,682.00"
MIA - ANU,52163458639,MIA-ANU-SXM 4 S,A319-100,https://www.airlines-manager.com/network/showline/47559658,https://www.airlines-manager.com/network/showflight/52163458639,https://www.airlines-manager.com/aircraft/show/110114298,8:30,15:44,228,"$355,365.00","$324,682.00"
MIA - ANU,52167946297,MIA-ANU-SXM 1 S,A319-100,https://www.airlines-manager.com/network/showline/47559658,https://www.airlines-manager.com/network/showflight/52167946297,https://www.airlines-manager.com/aircraft/show/110114295,12:00,19:14,228,"$355,365.00","$324,682.00"
MIA - ANU,52172581864,MIA-ANU-SXM 2 S,A319-100,https://www.airlines-manager.com/network/showline/47559658,https://www.airlines-manager.com/network/showflight/52172581864,https://www.airlines-manager.com/aircraft/show/110114296,13:00,20:14,228,"$355,365.00","$324,682.00"
MIA - ANU,52176667169,MIA-ANU-SXM 6 S,A319-100,https://www.airlines-manager.com/network/showline/47559658,https://www.airlines-manager.com/network/showflight/52176667169,https://www.airlines-manager.com/aircraft/show/110114300,16:30,23:44,228,"$355,365.00","$324,682.00"
MIA - ANU,52191270958,MIA-ANU-SXM 5 S,A319-100,https://www.airlines-manager.com/network/showline/47559658,https://www.airlines-manager.com/network/showflight/52191270958,https://www.airlines-manager.com/aircraft/show/110114299,23:30,6:44,228,"$355,365.00","$324,682.00"
MIA - ATL,52167946346,MIA-LAX-DEN 4,757-300,https://www.airlines-manager.com/network/showline/42257954,https://www.airlines-manager.com/network/showflight/52167946346,https://www.airlines-manager.com/aircraft/show/91126652,12:00,16:29,400,"$365,053.00","$300,808.00"
MIA - ATL,52172581934,MIA-LAX-DEN 2,757-300,https://www.airlines-manager.com/network/showline/42257954,https://www.airlines-manager.com/network/showflight/52172581934,https://www.airlines-manager.com/aircraft/show/91126650,13:00,17:29,400,"$365,053.00","$300,808.00"
MIA - ATL,52185045361,MIA-LAX-DEN 1,757-300,https://www.airlines-manager.com/network/showline/42257954,https://www.airlines-manager.com/network/showflight/52185045361,https://www.airlines-manager.com/aircraft/show/91126649,19:30,23:59,400,"$365,053.00","$300,808.00"
MIA - ATL,52188655515,MIA-LAX-DEN 3,757-300,https://www.airlines-manager.com/network/showline/42257954,https://www.airlines-manager.com/network/showflight/52188655515,https://www.airlines-manager.com/aircraft/show/91126651,21:00,1:29,400,"$365,053.00","$300,808.00"
MIA - AUA,52143769201,MIA-BGI-CUR 1,737-900ER,https://www.airlines-manager.com/network/showline/46704488,https://www.airlines-manager.com/network/showflight/52143769201,https://www.airlines-manager.com/aircraft/show/107121795,3:00,9:29,320,"$403,619.00","$363,799.00"
MIA - AUA,52143769202,MIA-BGI-CUR 4,737-900ER,https://www.airlines-manager.com/network/showline/46704488,https://www.airlines-manager.com/network/showflight/52143769202,https://www.airlines-manager.com/aircraft/show/107121798,4:30,10:59,320,"$403,619.00","$363,799.00"
MIA - AUA,52167946219,MIA-BGI-CUR 3,737-900ER,https://www.airlines-manager.com/network/showline/46704488,https://www.airlines-manager.com/network/showflight/52167946219,https://www.airlines-manager.com/aircraft/show/107121797,11:00,17:29,320,"$403,619.00","$363,799.00"
MIA - AUA,52181070705,MIA-BGI-CUR 2,737-900ER,https://www.airlines-manager.com/network/showline/46704488,https://www.airlines-manager.com/network/showflight/52181070705,https://www.airlines-manager.com/aircraft/show/107121796,17:45,0:14,320,"$403,619.00","$363,799.00"
MIA - AUA,52188655664,MIA-BGI-CUR 5,737-900ER,https://www.airlines-manager.com/network/showline/46704488,https://www.airlines-manager.com/network/showflight/52188655664,https://www.airlines-manager.com/aircraft/show/107121799,21:45,4:14,241,"$313,385.00","$276,584.00"
MIA - AUS,52143769174,MIA-AUS-PIT 2,737-900ER,https://www.airlines-manager.com/network/showline/44971964,https://www.airlines-manager.com/network/showflight/52143769174,https://www.airlines-manager.com/aircraft/show/99920625,2:45,9:14,320,"$402,200.00","$358,501.00"
MIA - AUS,52163458757,MIA-AUS-PIT 1,737-900ER,https://www.airlines-manager.com/network/showline/44971964,https://www.airlines-manager.com/network/showflight/52163458757,https://www.airlines-manager.com/aircraft/show/99920626,10:00,16:29,320,"$402,200.00","$358,501.00"
MIA - AUS,52172582007,MIA-AUS-PIT 5,ERJ-175,https://www.airlines-manager.com/network/showline/44971964,https://www.airlines-manager.com/network/showflight/52172582007,https://www.airlines-manager.com/aircraft/show/82323689,14:00,20:29,112,"$189,839.00","$164,780.00"
MIA - AUS,52176666982,MIA-AUS-PIT 4,737-900ER,https://www.airlines-manager.com/network/showline/44971964,https://www.airlines-manager.com/network/showflight/52176666982,https://www.airlines-manager.com/aircraft/show/99920623,14:45,21:14,320,"$402,200.00","$358,501.00"
MIA - AUS,52185045455,MIA-AUS-PIT 3,737-900ER,https://www.airlines-manager.com/network/showline/44971964,https://www.airlines-manager.com/network/showflight/52185045455,https://www.airlines-manager.com/aircraft/show/99920624,20:45,3:14,320,"$402,200.00","$358,501.00"
MIA - BDA,52143769203,MIA-PUJ-BDA 1 S,A319-100,https://www.airlines-manager.com/network/showline/42193835,https://www.airlines-manager.com/network/showflight/52143769203,https://www.airlines-manager.com/aircraft/show/104034457,3:00,9:14,228,"$294,946.00","$267,420.00"
MIA - BDA,52143769204,MIA-PUJ-BDA 3 S,A319-100,https://www.airlines-manager.com/network/showline/42193835,https://www.airlines-manager.com/network/showflight/52143769204,https://www.airlines-manager.com/aircraft/show/104034459,3:45,9:59,228,"$294,946.00","$267,420.00"
MIA - BDA,52163458734,MIA-PUJ-BDA 4 S,A319-100,https://www.airlines-manager.com/network/showline/42193835,https://www.airlines-manager.com/network/showflight/52163458734,https://www.airlines-manager.com/aircraft/show/104034460,10:00,16:14,228,"$294,946.00","$267,420.00"
MIA - BDA,52167946255,MIA-PUJ-BDA 6 S,A319-100,https://www.airlines-manager.com/network/showline/42193835,https://www.airlines-manager.com/network/showflight/52167946255,https://www.airlines-manager.com/aircraft/show/99326789,11:00,17:14,228,"$294,946.00","$267,420.00"
MIA - BDA,52176667097,MIA-PUJ-BDA 5 S,A319-100,https://www.airlines-manager.com/network/showline/42193835,https://www.airlines-manager.com/network/showflight/52176667097,https://www.airlines-manager.com/aircraft/show/104034461,15:45,21:59,228,"$294,946.00","$267,420.00"
MIA - BDA,52188655595,MIA-PUJ-BDA 2 S,A319-100,https://www.airlines-manager.com/network/showline/42193835,https://www.airlines-manager.com/network/showflight/52188655595,https://www.airlines-manager.com/aircraft/show/104034458,21:15,3:29,228,"$294,946.00","$267,420.00"
MIA - BDL,52143769205,MIA-BDL-SAT 2,737-900ER,https://www.airlines-manager.com/network/showline/46909505,https://www.airlines-manager.com/network/showflight/52143769205,https://www.airlines-manager.com/aircraft/show/107763565,3:00,9:44,320,"$426,144.00","$383,863.00"
MIA - BDL,52163458581,MIA-BDL-SAT 5,ERJ-175,https://www.airlines-manager.com/network/showline/46909505,https://www.airlines-manager.com/network/showflight/52163458581,https://www.airlines-manager.com/aircraft/show/107467213,8:00,14:44,112,"$200,552.00","$175,925.00"
MIA - BDL,52172581954,MIA-BDL-SAT 4,737-900ER,https://www.airlines-manager.com/network/showline/46909505,https://www.airlines-manager.com/network/showflight/52172581954,https://www.airlines-manager.com/aircraft/show/107763561,13:45,20:29,320,"$426,144.00","$383,863.00"
MIA - BDL,52172581955,MIA-BDL-SAT 1,737-900ER,https://www.airlines-manager.com/network/showline/46909505,https://www.airlines-manager.com/network/showflight/52172581955,https://www.airlines-manager.com/aircraft/show/107763566,14:00,20:44,320,"$426,144.00","$383,863.00"
MIA - BDL,52185045434,MIA-BDL-SAT 3,737-900ER,https://www.airlines-manager.com/network/showline/46909505,https://www.airlines-manager.com/network/showflight/52185045434,https://www.airlines-manager.com/aircraft/show/107763562,20:30,3:14,320,"$426,144.00","$383,863.00"
MIA - BGI,52143769180,MIA-BGI-CUR 2,737-900ER,https://www.airlines-manager.com/network/showline/46704471,https://www.airlines-manager.com/network/showflight/52143769180,https://www.airlines-manager.com/aircraft/show/107121796,2:45,10:59,320,"$515,730.00","$466,906.00"
MIA - BGI,52157350130,MIA-BGI-CUR 5,737-900ER,https://www.airlines-manager.com/network/showline/46704471,https://www.airlines-manager.com/network/showflight/52157350130,https://www.airlines-manager.com/aircraft/show/107121799,6:45,14:59,320,"$515,730.00","$466,906.00"
MIA - BGI,52167946324,MIA-BGI-CUR 1,737-900ER,https://www.airlines-manager.com/network/showline/46704471,https://www.airlines-manager.com/network/showflight/52167946324,https://www.airlines-manager.com/aircraft/show/107121795,12:00,20:14,320,"$515,730.00","$466,906.00"
MIA - BGI,52172581949,MIA-BGI-CUR 4,737-900ER,https://www.airlines-manager.com/network/showline/46704471,https://www.airlines-manager.com/network/showflight/52172581949,https://www.airlines-manager.com/aircraft/show/107121798,13:30,21:44,320,"$515,730.00","$466,906.00"
MIA - BGI,52185045407,MIA-BGI-CUR 3,737-900ER,https://www.airlines-manager.com/network/showline/46704471,https://www.airlines-manager.com/network/showflight/52185045407,https://www.airlines-manager.com/aircraft/show/107121797,20:00,4:14,320,"$515,730.00","$466,906.00"
MIA - BNA,52143768953,MIA-BOI-BNA 5,ERJ-175,https://www.airlines-manager.com/network/showline/45701836,https://www.airlines-manager.com/network/showflight/52143768953,https://www.airlines-manager.com/aircraft/show/103534663,0:45,5:59,112,"$157,179.00","$135,701.00"
MIA - BNA,52143768954,MIA-BOI-BNA 4,737-900ER,https://www.airlines-manager.com/network/showline/45701836,https://www.airlines-manager.com/network/showflight/52143768954,https://www.airlines-manager.com/aircraft/show/103775657,1:15,6:29,320,"$330,681.00","$292,430.00"
MIA - BNA,52157349982,MIA-BOI-BNA 3,737-900ER,https://www.airlines-manager.com/network/showline/45701836,https://www.airlines-manager.com/network/showflight/52157349982,https://www.airlines-manager.com/aircraft/show/104020880,4:45,9:59,320,"$330,681.00","$292,430.00"
MIA - BNA,52163458702,MIA-BOI-BNA 2,737-900ER,https://www.airlines-manager.com/network/showline/45701836,https://www.airlines-manager.com/network/showflight/52163458702,https://www.airlines-manager.com/aircraft/show/104022609,10:00,15:14,320,"$330,681.00","$292,430.00"
MIA - BNA,52167946312,MIA-BOI-BNA 5,ERJ-175,https://www.airlines-manager.com/network/showline/45701836,https://www.airlines-manager.com/network/showflight/52167946312,https://www.airlines-manager.com/aircraft/show/103534663,12:00,17:14,112,"$157,179.00","$135,701.00"
MIA - BNA,52188655603,MIA-BOI-BNA 1,737-900ER,https://www.airlines-manager.com/network/showline/45701836,https://www.airlines-manager.com/network/showflight/52188655603,https://www.airlines-manager.com/aircraft/show/104133006,21:15,2:29,320,"$330,681.00","$292,430.00"
MIA - BOI,52143769100,MIA-ORD-BOI-JAX B,A319-100,https://www.airlines-manager.com/network/showline/45701907,https://www.airlines-manager.com/network/showflight/52143769100,https://www.airlines-manager.com/aircraft/show/106339154,1:45,12:59,198,"$523,140.00","$479,271.00"
MIA - BOI,52163458703,MIA-BOI-BNA 1,737-900ER,https://www.airlines-manager.com/network/showline/45701907,https://www.airlines-manager.com/network/showflight/52163458703,https://www.airlines-manager.com/aircraft/show/104133006,10:00,21:14,320,"$695,155.00","$635,003.00"
MIA - BOI,52172581972,MIA-BOI-BNA 4,737-900ER,https://www.airlines-manager.com/network/showline/45701907,https://www.airlines-manager.com/network/showflight/52172581972,https://www.airlines-manager.com/aircraft/show/103775657,14:00,1:14,320,"$695,155.00","$635,003.00"
MIA - BOI,52181070696,MIA-BOI-BNA 3,737-900ER,https://www.airlines-manager.com/network/showline/45701907,https://www.airlines-manager.com/network/showflight/52181070696,https://www.airlines-manager.com/aircraft/show/104020880,17:30,4:44,320,"$695,155.00","$635,003.00"
MIA - BOI,52188655749,MIA-BOI-BNA 2,737-900ER,https://www.airlines-manager.com/network/showline/45701907,https://www.airlines-manager.com/network/showflight/52188655749,https://www.airlines-manager.com/aircraft/show/104022609,22:45,9:59,320,"$695,155.00","$635,003.00"
MIA - BOS,52143769128,MIA-SJU-BOS 5,A321-200,https://www.airlines-manager.com/network/showline/42307221,https://www.airlines-manager.com/network/showflight/52143769128,https://www.airlines-manager.com/aircraft/show/91352059,2:00,8:59,310,"$443,914.00","$399,505.00"
MIA - BOS,52157350015,MIA-SJU-BOS 1,A321-200,https://www.airlines-manager.com/network/showline/42307221,https://www.airlines-manager.com/network/showflight/52157350015,https://www.airlines-manager.com/aircraft/show/91352063,5:00,11:59,310,"$443,914.00","$399,505.00"
MIA - BOS,52167946281,MIA-SJU-BOS 4,A321-200,https://www.airlines-manager.com/network/showline/42307221,https://www.airlines-manager.com/network/showflight/52167946281,https://www.airlines-manager.com/aircraft/show/91352060,11:15,18:14,310,"$443,914.00","$399,505.00"
MIA - BOS,52176667171,MIA-SJU-BOS 2,A321-200,https://www.airlines-manager.com/network/showline/42307221,https://www.airlines-manager.com/network/showflight/52176667171,https://www.airlines-manager.com/aircraft/show/91352062,16:30,23:29,310,"$443,914.00","$399,505.00"
MIA - BOS,52185045295,MIA-SJU-BOS 3,A321-200,https://www.airlines-manager.com/network/showline/42307221,https://www.airlines-manager.com/network/showflight/52185045295,https://www.airlines-manager.com/aircraft/show/91352061,19:00,1:59,310,"$443,914.00","$399,505.00"
MIA - BOS,52185045296,MIA-SJU-BOS 6 B,A319-100,https://www.airlines-manager.com/network/showline/42307221,https://www.airlines-manager.com/network/showflight/52185045296,https://www.airlines-manager.com/aircraft/show/110582841,20:15,3:14,198,"$335,745.00","$300,164.00"
MIA - BTV,52143769192,MIA-DSM-ALB 1,737-900ER,https://www.airlines-manager.com/network/showline/48487638,https://www.airlines-manager.com/network/showflight/52143769192,https://www.airlines-manager.com/aircraft/show/111064081,3:00,10:14,320,"$459,337.00","$416,465.00"
MIA - BTV,52163458651,MIA-DSM-ALB 4,737-900ER,https://www.airlines-manager.com/network/showline/48487638,https://www.airlines-manager.com/network/showflight/52163458651,https://www.airlines-manager.com/aircraft/show/113101228,8:45,15:59,320,"$459,337.00","$416,465.00"
MIA - BTV,52172581854,MIA-DSM-ALB 3,737-900ER,https://www.airlines-manager.com/network/showline/48487638,https://www.airlines-manager.com/network/showflight/52172581854,https://www.airlines-manager.com/aircraft/show/113101233,13:00,20:14,320,"$459,337.00","$416,465.00"
MIA - BTV,52185045368,MIA-DSM-ALB 2,737-900ER,https://www.airlines-manager.com/network/showline/48487638,https://www.airlines-manager.com/network/showflight/52185045368,https://www.airlines-manager.com/aircraft/show/113101230,19:45,2:59,320,"$459,337.00","$416,465.00"
MIA - BTV,52191270917,MIA-DSM-ALB 5,ERJ-175,https://www.airlines-manager.com/network/showline/48487638,https://www.airlines-manager.com/network/showflight/52191270917,https://www.airlines-manager.com/aircraft/show/100049776,23:00,6:29,109,"$215,636.00","$190,440.00"
MIA - BUF,52143769197,MIA-BDL-SAT 4,737-900ER,https://www.airlines-manager.com/network/showline/46909524,https://www.airlines-manager.com/network/showflight/52143769197,https://www.airlines-manager.com/aircraft/show/107763561,3:00,9:44,320,"$424,000.00","$382,185.00"
MIA - BUF,52143769198,MIA-BDL-SAT 1,737-900ER,https://www.airlines-manager.com/network/showline/46909524,https://www.airlines-manager.com/network/showflight/52143769198,https://www.airlines-manager.com/aircraft/show/107763566,3:15,9:59,320,"$424,000.00","$382,185.00"
MIA - BUF,52167946213,MIA-BDL-SAT 3,737-900ER,https://www.airlines-manager.com/network/showline/46909524,https://www.airlines-manager.com/network/showflight/52167946213,https://www.airlines-manager.com/aircraft/show/107763562,11:00,17:44,320,"$424,000.00","$382,185.00"
MIA - BUF,52181070690,MIA-BDL-SAT 2,737-900ER,https://www.airlines-manager.com/network/showline/46909524,https://www.airlines-manager.com/network/showflight/52181070690,https://www.airlines-manager.com/aircraft/show/107763565,17:30,0:14,320,"$424,000.00","$382,185.00"
MIA - BUF,52188655580,MIA-BDL-SAT 5,ERJ-175,https://www.airlines-manager.com/network/showline/46909524,https://www.airlines-manager.com/network/showflight/52188655580,https://www.airlines-manager.com/aircraft/show/107467213,21:15,3:59,112,"$199,563.00","$175,195.00"
MIA - BUR,52143769172,MIA-BUR-PVD 4,A321-200,https://www.airlines-manager.com/network/showline/46909485,https://www.airlines-manager.com/network/showflight/52143769172,https://www.airlines-manager.com/aircraft/show/108834806,2:45,13:59,310,"$700,984.00","$648,079.00"
MIA - BUR,52167946212,MIA-BUR-PVD 1,A321-200,https://www.airlines-manager.com/network/showline/46909485,https://www.airlines-manager.com/network/showflight/52167946212,https://www.airlines-manager.com/aircraft/show/108834803,11:00,22:14,310,"$700,984.00","$648,079.00"
MIA - BUR,52172581986,MIA-BUR-PVD 3,A321-200,https://www.airlines-manager.com/network/showline/46909485,https://www.airlines-manager.com/network/showflight/52172581986,https://www.airlines-manager.com/aircraft/show/108834805,14:00,1:14,310,"$700,984.00","$648,079.00"
MIA - BUR,52185045410,MIA-BUR-PVD 5 B,A319-100,https://www.airlines-manager.com/network/showline/46909485,https://www.airlines-manager.com/network/showflight/52185045410,https://www.airlines-manager.com/aircraft/show/108834807,20:00,7:14,198,"$525,891.00","$483,466.00"
MIA - BUR,52185045411,MIA-BUR-PVD 2,A321-200,https://www.airlines-manager.com/network/showline/46909485,https://www.airlines-manager.com/network/showflight/52185045411,https://www.airlines-manager.com/aircraft/show/108834804,20:45,7:59,310,"$700,984.00","$648,079.00"
MIA - BWI,52143769250,MIA-BWI-YYZ 4,A321-200,https://www.airlines-manager.com/network/showline/42608062,https://www.airlines-manager.com/network/showflight/52143769250,https://www.airlines-manager.com/aircraft/show/92153442,4:00,9:44,310,"$364,180.00","$325,871.00"
MIA - BWI,52157350104,MIA-BWI-YYZ 5,A321-200,https://www.airlines-manager.com/network/showline/42608062,https://www.airlines-manager.com/network/showflight/52157350104,https://www.airlines-manager.com/aircraft/show/92153439,6:00,11:44,310,"$364,180.00","$325,871.00"
MIA - BWI,52163458769,MIA-BWI-YYZ 1,A321-200,https://www.airlines-manager.com/network/showline/42608062,https://www.airlines-manager.com/network/showflight/52163458769,https://www.airlines-manager.com/aircraft/show/92153443,10:00,15:44,310,"$364,180.00","$325,871.00"
MIA - BWI,52172581933,MIA-BWI-YYZ 2,A321-200,https://www.airlines-manager.com/network/showline/42608062,https://www.airlines-manager.com/network/showflight/52172581933,https://www.airlines-manager.com/aircraft/show/92153440,13:00,18:44,310,"$364,180.00","$325,871.00"
MIA - BWI,52188655577,MIA-BWI-YYZ 3,A321-200,https://www.airlines-manager.com/network/showline/42608062,https://www.airlines-manager.com/network/showflight/52188655577,https://www.airlines-manager.com/aircraft/show/92153441,21:00,2:44,310,"$364,180.00","$325,871.00"
MIA - BWI,52191270926,MIA-BWI-YYZ 6 S,ERJ-175,https://www.airlines-manager.com/network/showline/42608062,https://www.airlines-manager.com/network/showflight/52191270926,https://www.airlines-manager.com/aircraft/show/92137503,23:00,4:44,84,"$120,344.00","$99,626.00"
MIA - CAK,52143769119,MIA-MHT-CAK 4,A321-200,https://www.airlines-manager.com/network/showline/49235011,https://www.airlines-manager.com/network/showflight/52143769119,https://www.airlines-manager.com/aircraft/show/115493370,2:00,8:14,310,"$383,460.00","$349,690.00"
MIA - CAK,52163458609,MIA-MHT-CAK 3,A321-200,https://www.airlines-manager.com/network/showline/49235011,https://www.airlines-manager.com/network/showflight/52163458609,https://www.airlines-manager.com/aircraft/show/115493371,8:15,14:29,310,"$383,460.00","$349,690.00"
MIA - CAK,52167946188,MIA-MHT-CAK 2,A321-200,https://www.airlines-manager.com/network/showline/49235011,https://www.airlines-manager.com/network/showflight/52167946188,https://www.airlines-manager.com/aircraft/show/115493372,11:00,17:14,310,"$383,460.00","$349,690.00"
MIA - CAK,52181070721,MIA-MHT-CAK 5,ERJ-175,https://www.airlines-manager.com/network/showline/49235011,https://www.airlines-manager.com/network/showflight/52181070721,https://www.airlines-manager.com/aircraft/show/114912307,18:00,0:14,112,"$181,123.00","$159,033.00"
MIA - CAK,52188655560,MIA-MHT-CAK 1,A321-200,https://www.airlines-manager.com/network/showline/49235011,https://www.airlines-manager.com/network/showflight/52188655560,https://www.airlines-manager.com/aircraft/show/115493373,21:00,3:14,273,"$356,335.00","$323,626.00"
MIA - CHS,52143769210,MIA-SDF-PWM 2,A321-200,https://www.airlines-manager.com/network/showline/46376123,https://www.airlines-manager.com/network/showflight/52143769210,https://www.airlines-manager.com/aircraft/show/94886626,3:15,7:14,310,"$224,993.00","$199,001.00"
MIA - CHS,52143769211,MIA CARGO 1,737-700,https://www.airlines-manager.com/network/showline/46376123,https://www.airlines-manager.com/network/showflight/52143769211,https://www.airlines-manager.com/aircraft/show/107577220,4:15,8:14,0,"$60,643.00","$43,071.00"
MIA - CHS,52163458672,MIA-SDF-PWM 1,A321-200,https://www.airlines-manager.com/network/showline/46376123,https://www.airlines-manager.com/network/showflight/52163458672,https://www.airlines-manager.com/aircraft/show/96692674,9:00,12:59,310,"$224,993.00","$199,001.00"
MIA - CHS,52167946200,MIA-SDF-PWM 5,ERJ-175,https://www.airlines-manager.com/network/showline/46376123,https://www.airlines-manager.com/network/showflight/52167946200,https://www.airlines-manager.com/aircraft/show/105601657,11:00,14:59,112,"$104,581.00","$88,129.00"
MIA - CHS,52172582022,MIA-SDF-PWM 4,A321-200,https://www.airlines-manager.com/network/showline/46376123,https://www.airlines-manager.com/network/showflight/52172582022,https://www.airlines-manager.com/aircraft/show/94886625,14:00,17:59,310,"$224,993.00","$199,001.00"
MIA - CHS,52185045459,MIA-SDF-PWM 3,A321-200,https://www.airlines-manager.com/network/showline/46376123,https://www.airlines-manager.com/network/showflight/52185045459,https://www.airlines-manager.com/aircraft/show/94886629,20:45,0:44,289,"$196,956.00","$172,457.00"
MIA - CLE,52143768947,MIA-COS-CVG 5,ERJ-175,https://www.airlines-manager.com/network/showline/45553091,https://www.airlines-manager.com/network/showflight/52143768947,https://www.airlines-manager.com/aircraft/show/103534665,0:30,6:44,112,"$187,986.00","$164,202.00"
MIA - CLE,52143768948,MIA-COS-CVG 1,737-900ER,https://www.airlines-manager.com/network/showline/45553091,https://www.airlines-manager.com/network/showflight/52143768948,https://www.airlines-manager.com/aircraft/show/103684630,4:15,10:29,320,"$398,409.00","$357,152.00"
MIA - CLE,52157350216,MIA-COS-CVG 4,737-900ER,https://www.airlines-manager.com/network/showline/45553091,https://www.airlines-manager.com/network/showflight/52157350216,https://www.airlines-manager.com/aircraft/show/103365574,7:45,13:59,320,"$398,409.00","$357,152.00"
MIA - CLE,52172581897,MIA-COS-CVG 3,737-900ER,https://www.airlines-manager.com/network/showline/45553091,https://www.airlines-manager.com/network/showflight/52172581897,https://www.airlines-manager.com/aircraft/show/103684632,13:00,19:14,320,"$398,409.00","$357,152.00"
MIA - CLE,52185045456,MIA-COS-CVG 2,737-900ER,https://www.airlines-manager.com/network/showline/45553091,https://www.airlines-manager.com/network/showflight/52185045456,https://www.airlines-manager.com/aircraft/show/103684631,20:45,2:59,319,"$397,641.00","$356,413.00"
MIA - CLT,52143769274,MIA-ORD-DFW 6,ERJ-175,https://www.airlines-manager.com/network/showline/42379428,https://www.airlines-manager.com/network/showflight/52143769274,https://www.airlines-manager.com/aircraft/show/82543123,4:15,8:59,112,"$142,203.00","$118,296.00"
MIA - CLT,52163458737,MIA-ORD-DFW 3,A321-200,https://www.airlines-manager.com/network/showline/42379428,https://www.airlines-manager.com/network/showflight/52163458737,https://www.airlines-manager.com/aircraft/show/91600939,10:00,14:44,310,"$298,639.00","$260,690.00"
MIA - CLT,52176667148,MIA-ORD-DFW 2,A321-200,https://www.airlines-manager.com/network/showline/42379428,https://www.airlines-manager.com/network/showflight/52176667148,https://www.airlines-manager.com/aircraft/show/91600936,16:00,20:44,310,"$298,639.00","$260,690.00"
MIA - CLT,52181070714,MIA-ORD-DFW 5,A321-200,https://www.airlines-manager.com/network/showline/42379428,https://www.airlines-manager.com/network/showflight/52181070714,https://www.airlines-manager.com/aircraft/show/91600937,17:45,22:29,310,"$298,639.00","$260,690.00"
MIA - CLT,52188655727,MIA-ORD-DFW 1,A321-200,https://www.airlines-manager.com/network/showline/42379428,https://www.airlines-manager.com/network/showflight/52188655727,https://www.airlines-manager.com/aircraft/show/91600935,22:30,3:14,310,"$298,639.00","$260,690.00"
MIA - CLT,52191270949,MIA-ORD-DFW 4,A321-200,https://www.airlines-manager.com/network/showline/42379428,https://www.airlines-manager.com/network/showflight/52191270949,https://www.airlines-manager.com/aircraft/show/91600938,23:30,4:14,310,"$298,639.00","$260,690.00"
MIA - CMH,52143769088,MIA-MKE-CMH 4,737-900ER,https://www.airlines-manager.com/network/showline/46163833,https://www.airlines-manager.com/network/showflight/52143769088,https://www.airlines-manager.com/aircraft/show/88494374,1:45,7:44,320,"$372,394.00","$332,373.00"
MIA - CMH,52157350194,MIA-MKE-CMH 3,737-900ER,https://www.airlines-manager.com/network/showline/46163833,https://www.airlines-manager.com/network/showflight/52157350194,https://www.airlines-manager.com/aircraft/show/88494378,7:15,13:14,320,"$372,394.00","$332,373.00"
MIA - CMH,52172581997,MIA-MKE-CMH 2,737-900ER,https://www.airlines-manager.com/network/showline/46163833,https://www.airlines-manager.com/network/showflight/52172581997,https://www.airlines-manager.com/aircraft/show/91806233,14:00,19:59,320,"$372,394.00","$332,373.00"
MIA - CMH,52181070720,MIA-MKE-CMH 5 B,A319-100,https://www.airlines-manager.com/network/showline/46163833,https://www.airlines-manager.com/network/showflight/52181070720,https://www.airlines-manager.com/aircraft/show/110582842,18:00,23:59,198,"$282,697.00","$254,428.00"
MIA - CMH,52188655554,MIA-MKE-CMH 1,737-900ER,https://www.airlines-manager.com/network/showline/46163833,https://www.airlines-manager.com/network/showflight/52188655554,https://www.airlines-manager.com/aircraft/show/88239556,21:00,2:59,320,"$372,394.00","$332,373.00"
MIA - CMN,52157350005,MIA 84B-4 E2,777-300,https://www.airlines-manager.com/network/showline/43186717,https://www.airlines-manager.com/network/showflight/52157350005,https://www.airlines-manager.com/aircraft/show/106676228,5:00,22:44,962,"$2,958,782.00","$2,700,113.00"
MIA - CMN,52185045438,MIA 84B-1 E2,777-300,https://www.airlines-manager.com/network/showline/43186717,https://www.airlines-manager.com/network/showflight/52185045438,https://www.airlines-manager.com/aircraft/show/106676225,20:30,14:14,962,"$2,958,782.00","$2,700,113.00"
MIA - COS,52157350120,MIA-COS-CVG 2,737-900ER,https://www.airlines-manager.com/network/showline/45553098,https://www.airlines-manager.com/network/showflight/52157350120,https://www.airlines-manager.com/aircraft/show/103684631,6:30,14:59,320,"$543,529.00","$492,139.00"
MIA - COS,52163458754,MIA-COS-CVG 5,ERJ-175,https://www.airlines-manager.com/network/showline/45553098,https://www.airlines-manager.com/network/showflight/52163458754,https://www.airlines-manager.com/aircraft/show/103534665,10:00,18:44,112,"$256,291.00","$225,710.00"
MIA - COS,52172581985,MIA-COS-CVG 1,737-900ER,https://www.airlines-manager.com/network/showline/45553098,https://www.airlines-manager.com/network/showflight/52172581985,https://www.airlines-manager.com/aircraft/show/103684630,14:00,22:29,320,"$543,529.00","$492,139.00"
MIA - COS,52181070689,MIA-COS-CVG 4,737-900ER,https://www.airlines-manager.com/network/showline/45553098,https://www.airlines-manager.com/network/showflight/52181070689,https://www.airlines-manager.com/aircraft/show/103365574,17:30,1:59,320,"$543,529.00","$492,139.00"
MIA - COS,52188655753,MIA-COS-CVG 3,737-900ER,https://www.airlines-manager.com/network/showline/45553098,https://www.airlines-manager.com/network/showflight/52188655753,https://www.airlines-manager.com/aircraft/show/103684632,22:45,7:14,320,"$543,529.00","$492,139.00"
MIA - CPT,52157349994,MIA 84A-6 E,747-400,https://www.airlines-manager.com/network/showline/43025993,https://www.airlines-manager.com/network/showflight/52157349994,https://www.airlines-manager.com/aircraft/show/93731916,5:00,10:29,1124,"$5,606,566.00","$5,211,958.00"
MIA - CPT,52181070728,MIA 84A-2 E,747-400,https://www.airlines-manager.com/network/showline/43025993,https://www.airlines-manager.com/network/showflight/52181070728,https://www.airlines-manager.com/aircraft/show/93686968,18:00,23:29,1124,"$5,606,566.00","$5,211,958.00"
MIA - CUR,52143769265,MIA-BGI-CUR 3,737-900ER,https://www.airlines-manager.com/network/showline/46704486,https://www.airlines-manager.com/network/showflight/52143769265,https://www.airlines-manager.com/aircraft/show/107121797,4:15,10:59,320,"$413,058.00","$371,045.00"
MIA - CUR,52167946220,MIA-BGI-CUR 2,737-900ER,https://www.airlines-manager.com/network/showline/46704486,https://www.airlines-manager.com/network/showflight/52167946220,https://www.airlines-manager.com/aircraft/show/107121796,11:00,17:44,320,"$413,058.00","$371,045.00"
MIA - CUR,52176667042,MIA-BGI-CUR 5,737-900ER,https://www.airlines-manager.com/network/showline/46704486,https://www.airlines-manager.com/network/showflight/52176667042,https://www.airlines-manager.com/aircraft/show/107121799,15:00,21:44,320,"$413,058.00","$371,045.00"
MIA - CUR,52185045420,MIA-BGI-CUR 1,737-900ER,https://www.airlines-manager.com/network/showline/46704486,https://www.airlines-manager.com/network/showflight/52185045420,https://www.airlines-manager.com/aircraft/show/107121795,20:15,2:59,320,"$413,058.00","$371,045.00"
MIA - CUR,52188655665,MIA-BGI-CUR 4,737-900ER,https://www.airlines-manager.com/network/showline/46704486,https://www.airlines-manager.com/network/showflight/52188655665,https://www.airlines-manager.com/aircraft/show/107121798,21:45,4:29,295,"$383,591.00","$342,583.00"
MIA - CVG,52143769130,MIA-COS-CVG 4,737-900ER,https://www.airlines-manager.com/network/showline/45553080,https://www.airlines-manager.com/network/showflight/52143769130,https://www.airlines-manager.com/aircraft/show/103365574,2:00,7:44,320,"$367,026.00","$325,145.00"
MIA - CVG,52157350196,MIA-COS-CVG 3,737-900ER,https://www.airlines-manager.com/network/showline/45553080,https://www.airlines-manager.com/network/showflight/52157350196,https://www.airlines-manager.com/aircraft/show/103684632,7:15,12:59,320,"$367,026.00","$325,145.00"
MIA - CVG,52163458718,MIA CARGO 2,737-700,https://www.airlines-manager.com/network/showline/45553080,https://www.airlines-manager.com/network/showflight/52163458718,https://www.airlines-manager.com/aircraft/show/107527976,10:00,15:44,0,"$96,737.00","$70,858.00"
MIA - CVG,52176667017,MIA-COS-CVG 2,737-900ER,https://www.airlines-manager.com/network/showline/45553080,https://www.airlines-manager.com/network/showflight/52176667017,https://www.airlines-manager.com/aircraft/show/103684631,15:00,20:44,320,"$367,026.00","$325,145.00"
MIA - CVG,52181070784,MIA-COS-CVG 5,ERJ-175,https://www.airlines-manager.com/network/showline/45553080,https://www.airlines-manager.com/network/showflight/52181070784,https://www.airlines-manager.com/aircraft/show/103534665,18:45,0:29,112,"$173,151.00","$149,442.00"
MIA - CVG,52188655725,MIA-COS-CVG 1,737-900ER,https://www.airlines-manager.com/network/showline/45553080,https://www.airlines-manager.com/network/showflight/52188655725,https://www.airlines-manager.com/aircraft/show/103684630,22:30,4:14,320,"$367,026.00","$325,145.00"
MIA - DEN,52143769056,MIA-LAX-DEN 3,757-300,https://www.airlines-manager.com/network/showline/42257962,https://www.airlines-manager.com/network/showflight/52143769056,https://www.airlines-manager.com/aircraft/show/91126651,1:30,9:59,400,"$727,271.00","$641,639.00"
MIA - DEN,52143769057,MIA-LAX-DEN 4,757-300,https://www.airlines-manager.com/network/showline/42257962,https://www.airlines-manager.com/network/showflight/52143769057,https://www.airlines-manager.com/aircraft/show/91126652,3:30,11:59,400,"$727,271.00","$641,639.00"
MIA - DEN,52167946270,MIA-LAX-DEN 1,757-300,https://www.airlines-manager.com/network/showline/42257962,https://www.airlines-manager.com/network/showflight/52167946270,https://www.airlines-manager.com/aircraft/show/91126649,11:00,19:29,400,"$727,271.00","$641,639.00"
MIA - DEN,52181070685,MIA-LAX-DEN 2,757-300,https://www.airlines-manager.com/network/showline/42257962,https://www.airlines-manager.com/network/showflight/52181070685,https://www.airlines-manager.com/aircraft/show/91126650,17:30,1:59,400,"$727,271.00","$641,639.00"
MIA - DEN,52188655711,MIA-LAX-DEN 5 E,A319-100,https://www.airlines-manager.com/network/showline/42257962,https://www.airlines-manager.com/network/showflight/52188655711,https://www.airlines-manager.com/aircraft/show/115181776,22:15,6:59,216,"$426,612.00","$370,220.00"
MIA - DFW,52143769233,MIA-ORD-DFW 2,A321-200,https://www.airlines-manager.com/network/showline/42379416,https://www.airlines-manager.com/network/showflight/52143769233,https://www.airlines-manager.com/aircraft/show/91600936,3:30,9:59,310,"$408,444.00","$352,523.00"
MIA - DFW,52163458724,MIA-ORD-DFW 1,A321-200,https://www.airlines-manager.com/network/showline/42379416,https://www.airlines-manager.com/network/showflight/52163458724,https://www.airlines-manager.com/aircraft/show/91600935,10:00,16:29,310,"$408,444.00","$352,523.00"
MIA - DFW,52167946268,MIA-ORD-DFW 4,A321-200,https://www.airlines-manager.com/network/showline/42379416,https://www.airlines-manager.com/network/showflight/52167946268,https://www.airlines-manager.com/aircraft/show/91600938,11:00,17:29,310,"$408,444.00","$352,523.00"
MIA - DFW,52176667098,MIA-ORD-DFW 6,ERJ-175,https://www.airlines-manager.com/network/showline/42379416,https://www.airlines-manager.com/network/showflight/52176667098,https://www.airlines-manager.com/aircraft/show/82543123,15:45,22:14,112,"$192,330.00","$156,823.00"
MIA - DFW,52188655651,MIA-ORD-DFW 3,A321-200,https://www.airlines-manager.com/network/showline/42379416,https://www.airlines-manager.com/network/showflight/52188655651,https://www.airlines-manager.com/aircraft/show/91600939,21:30,3:59,310,"$408,444.00","$352,523.00"
MIA - DFW,52188655653,MIA-ORD-DFW 5,A321-200,https://www.airlines-manager.com/network/showline/42379416,https://www.airlines-manager.com/network/showflight/52188655653,https://www.airlines-manager.com/aircraft/show/91600937,22:30,4:59,310,"$408,444.00","$352,523.00"
MIA - DSM,52143769191,MIA-DSM-ALB 2,737-900ER,https://www.airlines-manager.com/network/showline/48487669,https://www.airlines-manager.com/network/showflight/52143769191,https://www.airlines-manager.com/aircraft/show/113101230,3:00,10:14,320,"$455,829.00","$412,800.00"
MIA - DSM,52163458655,MIA-DSM-ALB 5,ERJ-175,https://www.airlines-manager.com/network/showline/48487669,https://www.airlines-manager.com/network/showflight/52163458655,https://www.airlines-manager.com/aircraft/show/100049776,8:45,15:59,112,"$215,983.00","$190,599.00"
MIA - DSM,52172581856,MIA-DSM-ALB 1,737-900ER,https://www.airlines-manager.com/network/showline/48487669,https://www.airlines-manager.com/network/showflight/52172581856,https://www.airlines-manager.com/aircraft/show/111064081,13:00,20:14,320,"$455,829.00","$412,800.00"
MIA - DSM,52176667113,MIA-DSM-ALB 4,737-900ER,https://www.airlines-manager.com/network/showline/48487669,https://www.airlines-manager.com/network/showflight/52176667113,https://www.airlines-manager.com/aircraft/show/113101228,16:00,23:14,320,"$455,829.00","$412,800.00"
MIA - DSM,52185045421,MIA-DSM-ALB 3,737-900ER,https://www.airlines-manager.com/network/showline/48487669,https://www.airlines-manager.com/network/showflight/52185045421,https://www.airlines-manager.com/aircraft/show/113101233,20:15,3:29,320,"$455,829.00","$412,800.00"
MIA - DSS,52143768875,MIA 84B-7 E2,777-300,https://www.airlines-manager.com/network/showline/43220462,https://www.airlines-manager.com/network/showflight/52143768875,https://www.airlines-manager.com/aircraft/show/106676231,0:00,16:59,962,"$2,848,980.00","$2,602,968.00"
MIA - DSS,52167946330,MIA 84B-3 E2,777-300,https://www.airlines-manager.com/network/showline/43220462,https://www.airlines-manager.com/network/showflight/52167946330,https://www.airlines-manager.com/aircraft/show/106676227,12:00,4:59,962,"$2,848,980.00","$2,602,968.00"
MIA - DTW,52143769060,MIA-PDX-DTW 3,737-900ER,https://www.airlines-manager.com/network/showline/44313712,https://www.airlines-manager.com/network/showflight/52143769060,https://www.airlines-manager.com/aircraft/show/89943713,1:30,7:59,320,"$411,141.00","$358,819.00"
MIA - DTW,52143769061,MIA-PDX-DTW 4,737-900ER,https://www.airlines-manager.com/network/showline/44313712,https://www.airlines-manager.com/network/showflight/52143769061,https://www.airlines-manager.com/aircraft/show/89943712,2:30,8:59,320,"$411,141.00","$358,819.00"
MIA - DTW,52163458764,MIA-PDX-DTW 2,737-900ER,https://www.airlines-manager.com/network/showline/44313712,https://www.airlines-manager.com/network/showflight/52163458764,https://www.airlines-manager.com/aircraft/show/89943714,10:00,16:29,320,"$411,141.00","$358,819.00"
MIA - DTW,52172581995,MIA-PDX-DTW 5,737-900ER,https://www.airlines-manager.com/network/showline/44313712,https://www.airlines-manager.com/network/showflight/52172581995,https://www.airlines-manager.com/aircraft/show/89943711,14:00,20:29,320,"$411,141.00","$358,819.00"
MIA - DTW,52188655660,MIA CARGO 1,737-700,https://www.airlines-manager.com/network/showline/44313712,https://www.airlines-manager.com/network/showflight/52188655660,https://www.airlines-manager.com/aircraft/show/107577220,21:45,4:14,0,"$108,799.00","$76,677.00"
MIA - DTW,52188655661,MIA-PDX-DTW 1,737-900ER,https://www.airlines-manager.com/network/showline/44313712,https://www.airlines-manager.com/network/showflight/52188655661,https://www.airlines-manager.com/aircraft/show/89943715,22:30,4:59,320,"$411,141.00","$358,819.00"
MIA - ELP,52163458603,MIA-ELP-MCI 5 B,A319-100,https://www.airlines-manager.com/network/showline/46040732,https://www.airlines-manager.com/network/showflight/52163458603,https://www.airlines-manager.com/aircraft/show/105093924,8:15,16:44,198,"$401,113.00","$365,102.00"
MIA - ELP,52163458604,MIA-ELP-MCI 1,737-900ER,https://www.airlines-manager.com/network/showline/46040732,https://www.airlines-manager.com/network/showflight/52163458604,https://www.airlines-manager.com/aircraft/show/91806234,10:00,18:29,320,"$531,738.00","$481,629.00"
MIA - ELP,52176667152,MIA-ELP-MCI 3,737-900ER,https://www.airlines-manager.com/network/showline/46040732,https://www.airlines-manager.com/network/showflight/52176667152,https://www.airlines-manager.com/aircraft/show/91806232,16:15,0:44,320,"$531,738.00","$481,629.00"
MIA - ELP,52181070629,MIA-ELP-MCI 4,737-900ER,https://www.airlines-manager.com/network/showline/46040732,https://www.airlines-manager.com/network/showflight/52181070629,https://www.airlines-manager.com/aircraft/show/91806231,17:00,1:29,320,"$531,738.00","$481,629.00"
MIA - ELP,52191270946,MIA-ELP-MCI 2,737-900ER,https://www.airlines-manager.com/network/showline/46040732,https://www.airlines-manager.com/network/showflight/52191270946,https://www.airlines-manager.com/aircraft/show/91806235,23:15,7:44,320,"$531,738.00","$481,629.00"
MIA - FAR,52143768965,MIA-FAR-TUL 3,737-900ER,https://www.airlines-manager.com/network/showline/47780421,https://www.airlines-manager.com/network/showflight/52143768965,https://www.airlines-manager.com/aircraft/show/110883161,0:45,9:29,320,"$546,042.00","$497,220.00"
MIA - FAR,52157350192,MIA-FAR-TUL 4,737-900ER,https://www.airlines-manager.com/network/showline/47780421,https://www.airlines-manager.com/network/showflight/52157350192,https://www.airlines-manager.com/aircraft/show/110883162,7:15,15:59,320,"$546,042.00","$497,220.00"
MIA - FAR,52167946199,MIA-FAR-TUL 1,737-900ER,https://www.airlines-manager.com/network/showline/47780421,https://www.airlines-manager.com/network/showflight/52167946199,https://www.airlines-manager.com/aircraft/show/110883159,11:00,19:44,320,"$546,042.00","$497,220.00"
MIA - FAR,52176667118,MIA-FAR-TUL 2,737-900ER,https://www.airlines-manager.com/network/showline/47780421,https://www.airlines-manager.com/network/showflight/52176667118,https://www.airlines-manager.com/aircraft/show/110883160,16:00,0:44,320,"$546,042.00","$497,220.00"
MIA - FAR,52181070757,MIA-FAR-TUL 5,ERJ-175,https://www.airlines-manager.com/network/showline/47780421,https://www.airlines-manager.com/network/showflight/52181070757,https://www.airlines-manager.com/aircraft/show/87169421,18:15,2:59,112,"$257,517.00","$228,103.00"
MIA - FAT,52163458631,MIA-FAT-MSO 4,737-900ER,https://www.airlines-manager.com/network/showline/48487645,https://www.airlines-manager.com/network/showflight/52163458631,https://www.airlines-manager.com/aircraft/show/113101232,8:30,19:59,320,"$722,171.00","$661,957.00"
MIA - FAT,52167946193,MIA-FAT-MSO 1,737-900ER,https://www.airlines-manager.com/network/showline/48487645,https://www.airlines-manager.com/network/showflight/52167946193,https://www.airlines-manager.com/aircraft/show/113101229,11:00,22:29,320,"$722,171.00","$661,957.00"
MIA - FAT,52185045303,MIA-FAT-MSO 2,737-900ER,https://www.airlines-manager.com/network/showline/48487645,https://www.airlines-manager.com/network/showflight/52185045303,https://www.airlines-manager.com/aircraft/show/113101231,19:00,6:29,320,"$722,171.00","$661,957.00"
MIA - FAT,52188655715,MIA-FAT-MSO 3,737-900ER,https://www.airlines-manager.com/network/showline/48487645,https://www.airlines-manager.com/network/showflight/52188655715,https://www.airlines-manager.com/aircraft/show/113101234,22:15,9:44,320,"$722,171.00","$661,957.00"
MIA - FPO,52143768920,MIA-BGI-CUR 2,737-900ER,https://www.airlines-manager.com/network/showline/46704495,https://www.airlines-manager.com/network/showflight/52143768920,https://www.airlines-manager.com/aircraft/show/107121796,0:15,2:44,320,"$83,950.00","$59,309.00"
MIA - FPO,52143768921,MIA-BGI-CUR 5,737-900ER,https://www.airlines-manager.com/network/showline/46704495,https://www.airlines-manager.com/network/showflight/52143768921,https://www.airlines-manager.com/aircraft/show/107121799,4:15,6:44,320,"$83,950.00","$59,309.00"
MIA - FPO,52163458693,MIA-BGI-CUR 1,737-900ER,https://www.airlines-manager.com/network/showline/46704495,https://www.airlines-manager.com/network/showflight/52163458693,https://www.airlines-manager.com/aircraft/show/107121795,9:30,11:59,320,"$83,950.00","$59,309.00"
MIA - FPO,52167946218,MIA-BGI-CUR 4,737-900ER,https://www.airlines-manager.com/network/showline/46704495,https://www.airlines-manager.com/network/showflight/52167946218,https://www.airlines-manager.com/aircraft/show/107121798,11:00,13:29,320,"$83,950.00","$59,309.00"
MIA - FPO,52181070692,MIA-BGI-CUR 3,737-900ER,https://www.airlines-manager.com/network/showline/46704495,https://www.airlines-manager.com/network/showflight/52181070692,https://www.airlines-manager.com/aircraft/show/107121797,17:30,19:59,200,"$60,298.00","$36,065.00"
MIA - FSD,52143769015,MIA-OKC-FSD 1,A321-200,https://www.airlines-manager.com/network/showline/47780568,https://www.airlines-manager.com/network/showflight/52143769015,https://www.airlines-manager.com/aircraft/show/110883110,1:00,8:59,310,"$501,462.00","$460,129.00"
MIA - FSD,52143769016,MIA-OKC-FSD 4,A321-200,https://www.airlines-manager.com/network/showline/47780568,https://www.airlines-manager.com/network/showflight/52143769016,https://www.airlines-manager.com/aircraft/show/110883113,2:45,10:44,310,"$501,462.00","$460,129.00"
MIA - FSD,52172581977,MIA-OKC-FSD 3,A321-200,https://www.airlines-manager.com/network/showline/47780568,https://www.airlines-manager.com/network/showflight/52172581977,https://www.airlines-manager.com/aircraft/show/110883112,14:00,21:59,310,"$501,462.00","$460,129.00"
MIA - FSD,52176667153,MIA-OKC-FSD 2,A321-200,https://www.airlines-manager.com/network/showline/47780568,https://www.airlines-manager.com/network/showflight/52176667153,https://www.airlines-manager.com/aircraft/show/110883111,16:15,0:14,310,"$501,462.00","$460,129.00"
MIA - FSD,52188655678,MIA-OKC-FSD 5,ERJ-175,https://www.airlines-manager.com/network/showline/47780568,https://www.airlines-manager.com/network/showflight/52188655678,https://www.airlines-manager.com/aircraft/show/104353572,22:00,5:59,93,"$218,447.00","$192,222.00"
MIA - HAV,52157349999,MIA-PDX-DTW 1,737-900ER,https://www.airlines-manager.com/network/showline/44313701,https://www.airlines-manager.com/network/showflight/52157349999,https://www.airlines-manager.com/aircraft/show/89943715,5:00,7:59,320,"$131,386.00","$101,579.00"
MIA - HAV,52163458678,MIA-PDX-DTW 4,737-900ER,https://www.airlines-manager.com/network/showline/44313701,https://www.airlines-manager.com/network/showflight/52163458678,https://www.airlines-manager.com/aircraft/show/89943712,9:00,11:59,320,"$131,386.00","$101,579.00"
MIA - HAV,52163458679,MIA-PDX-DTW 3,737-900ER,https://www.airlines-manager.com/network/showline/44313701,https://www.airlines-manager.com/network/showflight/52163458679,https://www.airlines-manager.com/aircraft/show/89943713,10:00,12:59,320,"$131,386.00","$101,579.00"
MIA - HAV,52176667162,MIA-PDX-DTW 2,737-900ER,https://www.airlines-manager.com/network/showline/44313701,https://www.airlines-manager.com/network/showflight/52176667162,https://www.airlines-manager.com/aircraft/show/89943714,16:30,19:29,320,"$131,386.00","$101,579.00"
MIA - HAV,52185045449,MIA-PDX-DTW 5,737-900ER,https://www.airlines-manager.com/network/showline/44313701,https://www.airlines-manager.com/network/showflight/52185045449,https://www.airlines-manager.com/aircraft/show/89943711,20:30,23:29,288,"$119,798.00","$90,244.00"
MIA - IAD,52143769263,MIA-IAD-TUS 2,A321-200,https://www.airlines-manager.com/network/showline/44372817,https://www.airlines-manager.com/network/showflight/52143769263,https://www.airlines-manager.com/aircraft/show/97556720,4:15,9:59,310,"$360,578.00","$321,277.00"
MIA - IAD,52157350195,MIA-IAD-TUS 5,A321-200,https://www.airlines-manager.com/network/showline/44372817,https://www.airlines-manager.com/network/showflight/52157350195,https://www.airlines-manager.com/aircraft/show/97556716,7:15,12:59,310,"$360,578.00","$321,277.00"
MIA - IAD,52163458763,MIA-IAD-TUS 1,A321-200,https://www.airlines-manager.com/network/showline/44372817,https://www.airlines-manager.com/network/showflight/52163458763,https://www.airlines-manager.com/aircraft/show/97556721,10:00,15:44,310,"$360,578.00","$321,277.00"
MIA - IAD,52172581921,MIA-IAD-TUS 4,A321-200,https://www.airlines-manager.com/network/showline/44372817,https://www.airlines-manager.com/network/showflight/52172581921,https://www.airlines-manager.com/aircraft/show/97556718,13:00,18:44,310,"$360,578.00","$321,277.00"
MIA - IAD,52181070783,MIA-IAD-TUS 3,A321-200,https://www.airlines-manager.com/network/showline/44372817,https://www.airlines-manager.com/network/showflight/52181070783,https://www.airlines-manager.com/aircraft/show/97556719,18:45,0:29,310,"$360,578.00","$321,277.00"
MIA - IAD,52188655640,MIA CARGO 2,737-700,https://www.airlines-manager.com/network/showline/44372817,https://www.airlines-manager.com/network/showflight/52188655640,https://www.airlines-manager.com/aircraft/show/107527976,21:30,3:14,0,"$96,311.00","$69,012.00"
MIA - ICT,52143769163,MIA-FAR-TUL 1,737-900ER,https://www.airlines-manager.com/network/showline/47780462,https://www.airlines-manager.com/network/showflight/52143769163,https://www.airlines-manager.com/aircraft/show/110883159,2:30,9:29,320,"$446,842.00","$403,525.00"
MIA - ICT,52163458668,MIA-FAR-TUL 2,737-900ER,https://www.airlines-manager.com/network/showline/47780462,https://www.airlines-manager.com/network/showflight/52163458668,https://www.airlines-manager.com/aircraft/show/110883160,9:00,15:59,320,"$446,842.00","$403,525.00"
MIA - ICT,52167946197,MIA-FAR-TUL 5,ERJ-175,https://www.airlines-manager.com/network/showline/47780462,https://www.airlines-manager.com/network/showflight/52167946197,https://www.airlines-manager.com/aircraft/show/87169421,11:00,18:14,112,"$212,463.00","$187,032.00"
MIA - ICT,52181070702,MIA-FAR-TUL 3,737-900ER,https://www.airlines-manager.com/network/showline/47780462,https://www.airlines-manager.com/network/showflight/52181070702,https://www.airlines-manager.com/aircraft/show/110883161,17:45,0:44,320,"$446,842.00","$403,525.00"
MIA - ICT,52188655745,MIA-FAR-TUL 4,737-900ER,https://www.airlines-manager.com/network/showline/47780462,https://www.airlines-manager.com/network/showflight/52188655745,https://www.airlines-manager.com/aircraft/show/110883162,22:45,5:44,320,"$446,842.00","$403,525.00"
MIA - IND,52143769161,MIA-AUS-PIT 5,ERJ-175,https://www.airlines-manager.com/network/showline/44971944,https://www.airlines-manager.com/network/showflight/52143769161,https://www.airlines-manager.com/aircraft/show/82323689,2:30,8:29,112,"$180,871.00","$157,183.00"
MIA - IND,52143769162,MIA-AUS-PIT 4,737-900ER,https://www.airlines-manager.com/network/showline/44971944,https://www.airlines-manager.com/network/showflight/52143769162,https://www.airlines-manager.com/aircraft/show/99920623,3:15,9:14,320,"$382,615.00","$341,196.00"
MIA - IND,52163458755,MIA-AUS-PIT 3,737-900ER,https://www.airlines-manager.com/network/showline/44971944,https://www.airlines-manager.com/network/showflight/52163458755,https://www.airlines-manager.com/aircraft/show/99920624,10:00,15:59,320,"$382,615.00","$341,196.00"
MIA - IND,52176667138,MIA-AUS-PIT 2,737-900ER,https://www.airlines-manager.com/network/showline/44971944,https://www.airlines-manager.com/network/showflight/52176667138,https://www.airlines-manager.com/aircraft/show/99920625,16:00,21:59,320,"$382,615.00","$341,196.00"
MIA - IND,52188655723,MIA-AUS-PIT 1,737-900ER,https://www.airlines-manager.com/network/showline/44971944,https://www.airlines-manager.com/network/showflight/52188655723,https://www.airlines-manager.com/aircraft/show/99920626,22:30,4:29,320,"$382,615.00","$341,196.00"
MIA - JAN,52157350057,MIA-MHT-CAK 5,ERJ-175,https://www.airlines-manager.com/network/showline/49235024,https://www.airlines-manager.com/network/showflight/52157350057,https://www.airlines-manager.com/aircraft/show/114912307,5:30,10:29,112,"$149,467.00","$130,572.00"
MIA - JAN,52163458643,MIA-MHT-CAK 1,A321-200,https://www.airlines-manager.com/network/showline/49235024,https://www.airlines-manager.com/network/showflight/52163458643,https://www.airlines-manager.com/aircraft/show/115493373,8:30,13:29,310,"$314,208.00","$284,876.00"
MIA - JAN,52172581991,MIA-MHT-CAK 4,A321-200,https://www.airlines-manager.com/network/showline/49235024,https://www.airlines-manager.com/network/showflight/52172581991,https://www.airlines-manager.com/aircraft/show/115493370,14:00,18:59,310,"$314,208.00","$284,876.00"
MIA - JAN,52185045418,MIA-MHT-CAK 3,A321-200,https://www.airlines-manager.com/network/showline/49235024,https://www.airlines-manager.com/network/showflight/52185045418,https://www.airlines-manager.com/aircraft/show/115493371,20:15,1:14,310,"$314,208.00","$284,876.00"
MIA - JAN,52188655721,MIA-MHT-CAK 2,A321-200,https://www.airlines-manager.com/network/showline/49235024,https://www.airlines-manager.com/network/showflight/52188655721,https://www.airlines-manager.com/aircraft/show/115493372,22:30,3:29,252,"$279,694.00","$251,542.00"
MIA - JAX,52143769196,MIA-COS-CVG 2,737-900ER,https://www.airlines-manager.com/network/showline/45553086,https://www.airlines-manager.com/network/showflight/52143769196,https://www.airlines-manager.com/aircraft/show/103684631,3:00,6:29,320,"$173,657.00","$144,618.00"
MIA - JAX,52167946177,MIA-COS-CVG 1,737-900ER,https://www.airlines-manager.com/network/showline/45553086,https://www.airlines-manager.com/network/showflight/52167946177,https://www.airlines-manager.com/aircraft/show/103684630,10:30,13:59,320,"$173,657.00","$144,618.00"
MIA - JAX,52172581994,MIA-COS-CVG 4,737-900ER,https://www.airlines-manager.com/network/showline/45553086,https://www.airlines-manager.com/network/showflight/52172581994,https://www.airlines-manager.com/aircraft/show/103365574,14:00,17:29,320,"$173,657.00","$144,618.00"
MIA - JAX,52185045330,MIA-COS-CVG 3,737-900ER,https://www.airlines-manager.com/network/showline/45553086,https://www.airlines-manager.com/network/showflight/52185045330,https://www.airlines-manager.com/aircraft/show/103684632,19:15,22:44,320,"$173,657.00","$144,618.00"
MIA - JAX,52188655714,MIA-ORD-BOI-JAX B,A319-100,https://www.airlines-manager.com/network/showline/45553086,https://www.airlines-manager.com/network/showflight/52188655714,https://www.airlines-manager.com/aircraft/show/106339154,22:15,1:44,198,"$131,853.00","$111,957.00"
MIA - JFK,52157350070,MIA-JFK-PHX 1,A321neo,https://www.airlines-manager.com/network/showline/42216500,https://www.airlines-manager.com/network/showflight/52157350070,https://www.airlines-manager.com/aircraft/show/105308264,5:45,11:59,338,"$428,844.00","$376,368.00"
MIA - JFK,52157350071,MIA-JFK-PHX 6,ERJ-175,https://www.airlines-manager.com/network/showline/42216500,https://www.airlines-manager.com/network/showflight/52157350071,https://www.airlines-manager.com/aircraft/show/82683137,6:45,12:59,112,"$187,016.00","$152,806.00"
MIA - JFK,52163458725,MIA-JFK-PHX 4,A321neo,https://www.airlines-manager.com/network/showline/42216500,https://www.airlines-manager.com/network/showflight/52163458725,https://www.airlines-manager.com/aircraft/show/105308267,10:00,16:14,338,"$428,844.00","$376,368.00"
MIA - JFK,52167946344,MIA-JFK-PHX 2,A321neo,https://www.airlines-manager.com/network/showline/42216500,https://www.airlines-manager.com/network/showflight/52167946344,https://www.airlines-manager.com/aircraft/show/105308265,12:00,18:14,338,"$428,844.00","$376,368.00"
MIA - JFK,52181070732,MIA-JFK-PHX 3,A321neo,https://www.airlines-manager.com/network/showline/42216500,https://www.airlines-manager.com/network/showflight/52181070732,https://www.airlines-manager.com/aircraft/show/105308266,18:00,0:14,338,"$428,844.00","$376,368.00"
MIA - JFK,52185045457,MIA-JFK-PHX 5,A321neo,https://www.airlines-manager.com/network/showline/42216500,https://www.airlines-manager.com/network/showflight/52185045457,https://www.airlines-manager.com/aircraft/show/105308268,20:45,2:59,337,"$428,082.00","$375,631.00"
MIA - JNB,52143768856,MIA 84A-4 E,747-400,https://www.airlines-manager.com/network/showline/42990947,https://www.airlines-manager.com/network/showflight/52143768856,https://www.airlines-manager.com/aircraft/show/93686966,0:00,6:44,1124,"$6,002,140.00","$5,568,508.00"
MIA - JNB,52172581932,MIA 84A-7 E,747-400,https://www.airlines-manager.com/network/showline/42990947,https://www.airlines-manager.com/network/showflight/52172581932,https://www.airlines-manager.com/aircraft/show/93776641,13:00,19:44,1124,"$6,002,140.00","$5,568,508.00"
MIA - LAS,52143769078,MIA-LAS-SEA 5,A321neo,https://www.airlines-manager.com/network/showline/42449486,https://www.airlines-manager.com/network/showflight/52143769078,https://www.airlines-manager.com/aircraft/show/105093929,1:30,11:59,338,"$716,690.00","$649,514.00"
MIA - LAS,52163458746,MIA-LAS-SEA 1,A321neo,https://www.airlines-manager.com/network/showline/42449486,https://www.airlines-manager.com/network/showflight/52163458746,https://www.airlines-manager.com/aircraft/show/105093925,10:00,20:29,338,"$716,690.00","$649,514.00"
MIA - LAS,52167946337,MIA-LAS-SEA 6 B,A319-100,https://www.airlines-manager.com/network/showline/42449486,https://www.airlines-manager.com/network/showflight/52167946337,https://www.airlines-manager.com/aircraft/show/113251304,12:00,22:29,198,"$496,976.00","$440,972.00"
MIA - LAS,52172581887,MIA-LAS-SEA 2,A321neo,https://www.airlines-manager.com/network/showline/42449486,https://www.airlines-manager.com/network/showflight/52172581887,https://www.airlines-manager.com/aircraft/show/105093926,13:00,23:29,338,"$716,690.00","$649,514.00"
MIA - LAS,52176667056,MIA-LAS-SEA 3,A321neo,https://www.airlines-manager.com/network/showline/42449486,https://www.airlines-manager.com/network/showflight/52176667056,https://www.airlines-manager.com/aircraft/show/105093927,15:00,1:29,338,"$716,690.00","$649,514.00"
MIA - LAS,52188655734,MIA-LAS-SEA 4,A321neo,https://www.airlines-manager.com/network/showline/42449486,https://www.airlines-manager.com/network/showflight/52188655734,https://www.airlines-manager.com/aircraft/show/105093928,22:30,8:59,338,"$716,690.00","$649,514.00"
MIA - LAX,52143768842,MIA-LAX-DEN 1,757-300,https://www.airlines-manager.com/network/showline/42216509,https://www.airlines-manager.com/network/showflight/52143768842,https://www.airlines-manager.com/aircraft/show/91126649,0:00,10:59,400,"$917,440.00","$823,968.00"
MIA - LAX,52143768843,MIA-LAX-DEN 2,757-300,https://www.airlines-manager.com/network/showline/42216509,https://www.airlines-manager.com/network/showflight/52143768843,https://www.airlines-manager.com/aircraft/show/91126650,2:00,12:59,400,"$917,440.00","$823,968.00"
MIA - LAX,52163458760,MIA-LAX-DEN 3,757-300,https://www.airlines-manager.com/network/showline/42216509,https://www.airlines-manager.com/network/showflight/52163458760,https://www.airlines-manager.com/aircraft/show/91126651,10:00,20:59,400,"$917,440.00","$823,968.00"
MIA - LAX,52167946189,MIA-LAX-DEN 5 E,A319-100,https://www.airlines-manager.com/network/showline/42216509,https://www.airlines-manager.com/network/showflight/52167946189,https://www.airlines-manager.com/aircraft/show/115181776,11:00,22:14,216,"$537,195.00","$475,832.00"
MIA - LAX,52176667157,MIA-LAX-DEN 4,757-300,https://www.airlines-manager.com/network/showline/42216509,https://www.airlines-manager.com/network/showflight/52176667157,https://www.airlines-manager.com/aircraft/show/91126652,16:30,3:29,400,"$917,440.00","$823,968.00"
MIA - LIT,52143769142,MIA-SDF-PWM 1,A321-200,https://www.airlines-manager.com/network/showline/46376132,https://www.airlines-manager.com/network/showflight/52143769142,https://www.airlines-manager.com/aircraft/show/96692674,2:15,7:59,310,"$360,455.00","$328,068.00"
MIA - LIT,52143769143,MIA-SDF-PWM 5,ERJ-175,https://www.airlines-manager.com/network/showline/46376132,https://www.airlines-manager.com/network/showflight/52143769143,https://www.airlines-manager.com/aircraft/show/105601657,4:15,9:59,112,"$171,002.00","$149,927.00"
MIA - LIT,52163458606,MIA-SDF-PWM 4,A321-200,https://www.airlines-manager.com/network/showline/46376132,https://www.airlines-manager.com/network/showflight/52163458606,https://www.airlines-manager.com/aircraft/show/94886625,8:15,13:59,310,"$360,455.00","$328,068.00"
MIA - LIT,52176667048,MIA-SDF-PWM 3,A321-200,https://www.airlines-manager.com/network/showline/46376132,https://www.airlines-manager.com/network/showflight/52176667048,https://www.airlines-manager.com/aircraft/show/94886629,15:00,20:44,310,"$360,455.00","$328,068.00"
MIA - LIT,52188655611,MIA-SDF-PWM 2,A321-200,https://www.airlines-manager.com/network/showline/46376132,https://www.airlines-manager.com/network/showflight/52188655611,https://www.airlines-manager.com/aircraft/show/94886626,21:30,3:14,303,"$355,661.00","$323,455.00"
MIA - LOS,52157350179,MIA 84A-5 E,747-400,https://www.airlines-manager.com/network/showline/42959909,https://www.airlines-manager.com/network/showflight/52157350179,https://www.airlines-manager.com/aircraft/show/93704215,6:45,4:59,1124,"$4,253,423.00","$3,953,976.00"
MIA - LOS,52185045369,MIA 84A-1 E,747-400,https://www.airlines-manager.com/network/showline/42959909,https://www.airlines-manager.com/network/showflight/52185045369,https://www.airlines-manager.com/aircraft/show/93686969,19:45,17:59,1115,"$4,194,623.00","$3,897,532.00"
MIA - MBJ,52143768960,MIA-PUJ-BDA 4 S,A319-100,https://www.airlines-manager.com/network/showline/42193777,https://www.airlines-manager.com/network/showflight/52143768960,https://www.airlines-manager.com/aircraft/show/104034460,0:45,4:59,228,"$191,701.00","$170,375.00"
MIA - MBJ,52157350020,MIA-PUJ-BDA 5 S,A319-100,https://www.airlines-manager.com/network/showline/42193777,https://www.airlines-manager.com/network/showflight/52157350020,https://www.airlines-manager.com/aircraft/show/104034461,5:00,9:14,228,"$191,701.00","$170,375.00"
MIA - MBJ,52163458676,MIA CARGO 1,737-700,https://www.airlines-manager.com/network/showline/42193777,https://www.airlines-manager.com/network/showflight/52163458676,https://www.airlines-manager.com/aircraft/show/107577220,9:00,13:14,0,"$65,741.00","$47,653.00"
MIA - MBJ,52163458677,MIA-PUJ-BDA 3 S,A319-100,https://www.airlines-manager.com/network/showline/42193777,https://www.airlines-manager.com/network/showflight/52163458677,https://www.airlines-manager.com/aircraft/show/104034459,10:00,14:14,228,"$191,701.00","$170,375.00"
MIA - MBJ,52172581836,MIA-PUJ-BDA 1 S,A319-100,https://www.airlines-manager.com/network/showline/42193777,https://www.airlines-manager.com/network/showflight/52172581836,https://www.airlines-manager.com/aircraft/show/104034457,12:45,16:59,228,"$191,701.00","$170,375.00"
MIA - MBJ,52181070627,MIA-PUJ-BDA 2 S,A319-100,https://www.airlines-manager.com/network/showline/42193777,https://www.airlines-manager.com/network/showflight/52181070627,https://www.airlines-manager.com/aircraft/show/104034458,17:00,21:14,228,"$191,701.00","$170,375.00"
MIA - MBJ,52191270910,MIA-PUJ-BDA 6 S,A319-100,https://www.airlines-manager.com/network/showline/42193777,https://www.airlines-manager.com/network/showflight/52191270910,https://www.airlines-manager.com/aircraft/show/99326789,23:00,3:14,228,"$191,701.00","$170,375.00"
MIA - MCI,52143768974,MIA-ELP-MCI 3,737-900ER,https://www.airlines-manager.com/network/showline/46040757,https://www.airlines-manager.com/network/showflight/52143768974,https://www.airlines-manager.com/aircraft/show/91806232,0:45,7:44,320,"$446,723.00","$401,140.00"
MIA - MCI,52143768975,MIA-ELP-MCI 4,737-900ER,https://www.airlines-manager.com/network/showline/46040757,https://www.airlines-manager.com/network/showflight/52143768975,https://www.airlines-manager.com/aircraft/show/91806231,1:30,8:29,320,"$446,723.00","$401,140.00"
MIA - MCI,52163458744,MIA-ELP-MCI 2,737-900ER,https://www.airlines-manager.com/network/showline/46040757,https://www.airlines-manager.com/network/showflight/52163458744,https://www.airlines-manager.com/aircraft/show/91806235,10:00,16:59,320,"$446,723.00","$401,140.00"
MIA - MCI,52181070774,MIA-ELP-MCI 1,737-900ER,https://www.airlines-manager.com/network/showline/46040757,https://www.airlines-manager.com/network/showflight/52181070774,https://www.airlines-manager.com/aircraft/show/91806234,18:30,1:29,320,"$446,723.00","$401,140.00"
MIA - MCI,52185045320,MIA-ELP-MCI 5 B,A319-100,https://www.airlines-manager.com/network/showline/46040757,https://www.airlines-manager.com/network/showflight/52185045320,https://www.airlines-manager.com/aircraft/show/105093924,19:00,1:59,198,"$337,594.00","$305,202.00"
MIA - MCO,52143768881,MIA-BDL-SAT 2,737-900ER,https://www.airlines-manager.com/network/showline/46909528,https://www.airlines-manager.com/network/showflight/52143768881,https://www.airlines-manager.com/aircraft/show/107763565,0:15,2:59,320,"$121,986.00","$84,764.00"
MIA - MCO,52143768882,MIA-BDL-SAT 5,ERJ-175,https://www.airlines-manager.com/network/showline/46909528,https://www.airlines-manager.com/network/showflight/52143768882,https://www.airlines-manager.com/aircraft/show/107467213,4:00,6:44,112,"$54,839.00","$35,667.00"
MIA - MCO,52157350095,MIA-BOI-BNA 5,ERJ-175,https://www.airlines-manager.com/network/showline/46909528,https://www.airlines-manager.com/network/showflight/52157350095,https://www.airlines-manager.com/aircraft/show/103534663,6:00,8:44,112,"$54,839.00","$35,667.00"
MIA - MCO,52163458687,MIA-BOI-BNA 5,ERJ-175,https://www.airlines-manager.com/network/showline/46909528,https://www.airlines-manager.com/network/showflight/52163458687,https://www.airlines-manager.com/aircraft/show/103534663,9:15,11:59,112,"$54,839.00","$35,667.00"
MIA - MCO,52163458688,MIA-BDL-SAT 1,737-900ER,https://www.airlines-manager.com/network/showline/46909528,https://www.airlines-manager.com/network/showflight/52163458688,https://www.airlines-manager.com/aircraft/show/107763566,10:00,12:44,320,"$121,986.00","$84,764.00"
MIA - MCO,52167946215,MIA-BDL-SAT 4,737-900ER,https://www.airlines-manager.com/network/showline/46909528,https://www.airlines-manager.com/network/showflight/52167946215,https://www.airlines-manager.com/aircraft/show/107763561,11:00,13:44,320,"$121,986.00","$84,764.00"
MIA - MCO,52181070703,MIA-BDL-SAT 3,737-900ER,https://www.airlines-manager.com/network/showline/46909528,https://www.airlines-manager.com/network/showflight/52181070703,https://www.airlines-manager.com/aircraft/show/107763562,17:45,20:29,320,"$121,986.00","$84,764.00"
MIA - MEM,52143768878,MIA-MKE-CMH 5 B,A319-100,https://www.airlines-manager.com/network/showline/46160502,https://www.airlines-manager.com/network/showflight/52143768878,https://www.airlines-manager.com/aircraft/show/110582842,0:00,5:29,198,"$262,106.00","$234,337.00"
MIA - MEM,52143768879,MIA-MKE-CMH 1,737-900ER,https://www.airlines-manager.com/network/showline/46160502,https://www.airlines-manager.com/network/showflight/52143768879,https://www.airlines-manager.com/aircraft/show/88239556,3:00,8:29,320,"$345,153.00","$305,564.00"
MIA - MEM,52157350215,MIA-MKE-CMH 4,737-900ER,https://www.airlines-manager.com/network/showline/46160502,https://www.airlines-manager.com/network/showflight/52157350215,https://www.airlines-manager.com/aircraft/show/88494374,7:45,13:14,320,"$345,153.00","$305,564.00"
MIA - MEM,52172581996,MIA-MKE-CMH 3,737-900ER,https://www.airlines-manager.com/network/showline/46160502,https://www.airlines-manager.com/network/showflight/52172581996,https://www.airlines-manager.com/aircraft/show/88494378,14:00,19:29,320,"$345,153.00","$305,564.00"
MIA - MEM,52185045405,MIA-MKE-CMH 2,737-900ER,https://www.airlines-manager.com/network/showline/46160502,https://www.airlines-manager.com/network/showflight/52185045405,https://www.airlines-manager.com/aircraft/show/91806233,20:00,1:29,320,"$345,153.00","$305,564.00"
MIA - MHT,52143769037,MIA-MHT-CAK 3,A321-200,https://www.airlines-manager.com/network/showline/49235005,https://www.airlines-manager.com/network/showflight/52143769037,https://www.airlines-manager.com/aircraft/show/115493371,1:15,8:14,310,"$452,254.00","$413,999.00"
MIA - MHT,52143769038,MIA-MHT-CAK 2,A321-200,https://www.airlines-manager.com/network/showline/49235005,https://www.airlines-manager.com/network/showflight/52143769038,https://www.airlines-manager.com/aircraft/show/115493372,3:30,10:29,310,"$452,254.00","$413,999.00"
MIA - MHT,52167946187,MIA-MHT-CAK 5,ERJ-175,https://www.airlines-manager.com/network/showline/49235005,https://www.airlines-manager.com/network/showflight/52167946187,https://www.airlines-manager.com/aircraft/show/114912307,11:00,17:59,112,"$213,591.00","$188,394.00"
MIA - MHT,52172581978,MIA-MHT-CAK 1,A321-200,https://www.airlines-manager.com/network/showline/49235005,https://www.airlines-manager.com/network/showflight/52172581978,https://www.airlines-manager.com/aircraft/show/115493373,14:00,20:59,310,"$452,254.00","$413,999.00"
MIA - MHT,52185045321,MIA-MHT-CAK 4,A321-200,https://www.airlines-manager.com/network/showline/49235005,https://www.airlines-manager.com/network/showflight/52185045321,https://www.airlines-manager.com/aircraft/show/115493370,19:00,1:59,309,"$450,922.00","$412,711.00"
MIA - MKE,52143768891,MIA-MKE-CMH 3,737-900ER,https://www.airlines-manager.com/network/showline/46201956,https://www.airlines-manager.com/network/showflight/52143768891,https://www.airlines-manager.com/aircraft/show/88494378,0:15,7:14,320,"$446,367.00","$402,240.00"
MIA - MKE,52157350108,MIA-MKE-CMH 2,737-900ER,https://www.airlines-manager.com/network/showline/46201956,https://www.airlines-manager.com/network/showflight/52157350108,https://www.airlines-manager.com/aircraft/show/91806233,6:15,13:14,320,"$446,367.00","$402,240.00"
MIA - MKE,52167946201,MIA-MKE-CMH 5 B,A319-100,https://www.airlines-manager.com/network/showline/46201956,https://www.airlines-manager.com/network/showflight/52167946201,https://www.airlines-manager.com/aircraft/show/110582842,11:00,17:59,198,"$337,526.00","$306,091.00"
MIA - MKE,52172581998,MIA-MKE-CMH 1,737-900ER,https://www.airlines-manager.com/network/showline/46201956,https://www.airlines-manager.com/network/showflight/52172581998,https://www.airlines-manager.com/aircraft/show/88239556,14:00,20:59,320,"$446,367.00","$402,240.00"
MIA - MKE,52181070793,MIA-MKE-CMH 4,737-900ER,https://www.airlines-manager.com/network/showline/46201956,https://www.airlines-manager.com/network/showflight/52181070793,https://www.airlines-manager.com/aircraft/show/88494374,18:45,1:44,320,"$446,367.00","$402,240.00"
MIA - MSO,52157350213,MIA-FAT-MSO 2,737-900ER,https://www.airlines-manager.com/network/showline/48487660,https://www.airlines-manager.com/network/showflight/52157350213,https://www.airlines-manager.com/aircraft/show/113101231,7:45,18:59,320,"$697,028.00","$638,049.00"
MIA - MSO,52167946192,MIA-FAT-MSO 3,737-900ER,https://www.airlines-manager.com/network/showline/48487660,https://www.airlines-manager.com/network/showflight/52167946192,https://www.airlines-manager.com/aircraft/show/113101234,11:00,22:14,320,"$697,028.00","$638,049.00"
MIA - MSO,52185045399,MIA-FAT-MSO 4,737-900ER,https://www.airlines-manager.com/network/showline/48487660,https://www.airlines-manager.com/network/showflight/52185045399,https://www.airlines-manager.com/aircraft/show/113101232,20:00,7:14,320,"$697,028.00","$638,049.00"
MIA - MSO,52188655731,MIA-FAT-MSO 1,737-900ER,https://www.airlines-manager.com/network/showline/48487660,https://www.airlines-manager.com/network/showflight/52188655731,https://www.airlines-manager.com/aircraft/show/113101229,22:30,9:44,320,"$697,028.00","$638,049.00"
MIA - MSP,52143769120,MIA-JFK-PHX 4,A321neo,https://www.airlines-manager.com/network/showline/42288078,https://www.airlines-manager.com/network/showflight/52143769120,https://www.airlines-manager.com/aircraft/show/105308267,2:00,9:59,338,"$541,640.00","$492,958.00"
MIA - MSP,52143769121,MIA-JFK-PHX 5,A321neo,https://www.airlines-manager.com/network/showline/42288078,https://www.airlines-manager.com/network/showflight/52143769121,https://www.airlines-manager.com/aircraft/show/105308268,3:00,10:59,338,"$541,640.00","$492,958.00"
MIA - MSP,52163458726,MIA-JFK-PHX 3,A321neo,https://www.airlines-manager.com/network/showline/42288078,https://www.airlines-manager.com/network/showflight/52163458726,https://www.airlines-manager.com/aircraft/show/105308266,10:00,17:59,338,"$541,640.00","$492,958.00"
MIA - MSP,52172581880,MIA-JFK-PHX 6,ERJ-175,https://www.airlines-manager.com/network/showline/42288078,https://www.airlines-manager.com/network/showflight/52172581880,https://www.airlines-manager.com/aircraft/show/82683137,13:00,20:59,112,"$235,968.00","$203,010.00"
MIA - MSP,52181070762,MIA-JFK-PHX 2,A321neo,https://www.airlines-manager.com/network/showline/42288078,https://www.airlines-manager.com/network/showflight/52181070762,https://www.airlines-manager.com/aircraft/show/105308265,18:15,2:14,338,"$541,640.00","$492,958.00"
MIA - MSP,52188655663,MIA-JFK-PHX 1,A321neo,https://www.airlines-manager.com/network/showline/42288078,https://www.airlines-manager.com/network/showflight/52188655663,https://www.airlines-manager.com/aircraft/show/105308264,21:45,5:44,338,"$541,640.00","$492,958.00"
MIA - MSY,52143769065,MIA-MKE-CMH 2,737-900ER,https://www.airlines-manager.com/network/showline/46160486,https://www.airlines-manager.com/network/showflight/52143769065,https://www.airlines-manager.com/aircraft/show/91806233,1:30,6:14,320,"$299,983.00","$264,860.00"
MIA - MSY,52157350052,MIA-MKE-CMH 5 B,A319-100,https://www.airlines-manager.com/network/showline/46160486,https://www.airlines-manager.com/network/showflight/52157350052,https://www.airlines-manager.com/aircraft/show/110582842,5:30,10:14,198,"$228,690.00","$204,197.00"
MIA - MSY,52163458638,MIA-MKE-CMH 1,737-900ER,https://www.airlines-manager.com/network/showline/46160486,https://www.airlines-manager.com/network/showflight/52163458638,https://www.airlines-manager.com/aircraft/show/88239556,8:30,13:14,320,"$299,983.00","$264,860.00"
MIA - MSY,52172582001,MIA-MKE-CMH 4,737-900ER,https://www.airlines-manager.com/network/showline/46160486,https://www.airlines-manager.com/network/showflight/52172582001,https://www.airlines-manager.com/aircraft/show/88494374,14:00,18:44,320,"$299,983.00","$264,860.00"
MIA - MSY,52185045360,MIA-MKE-CMH 3,737-900ER,https://www.airlines-manager.com/network/showline/46160486,https://www.airlines-manager.com/network/showflight/52185045360,https://www.airlines-manager.com/aircraft/show/88494378,19:30,0:14,320,"$299,983.00","$264,860.00"
MIA - NAS,52143769144,MIA-PUJ-BDA 5 S,A319-100,https://www.airlines-manager.com/network/showline/42193695,https://www.airlines-manager.com/network/showflight/52143769144,https://www.airlines-manager.com/aircraft/show/104034461,2:15,4:59,228,"$78,566.00","$60,595.00"
MIA - NAS,52157350210,MIA-PUJ-BDA 6 S,A319-100,https://www.airlines-manager.com/network/showline/42193695,https://www.airlines-manager.com/network/showflight/52157350210,https://www.airlines-manager.com/aircraft/show/99326789,7:30,10:14,228,"$78,566.00","$60,595.00"
MIA - NAS,52163458736,MIA-PUJ-BDA 1 S,A319-100,https://www.airlines-manager.com/network/showline/42193695,https://www.airlines-manager.com/network/showflight/52163458736,https://www.airlines-manager.com/aircraft/show/104034457,10:00,12:44,228,"$78,566.00","$60,595.00"
MIA - NAS,52172581939,MIA CARGO 1,737-700,https://www.airlines-manager.com/network/showline/42193695,https://www.airlines-manager.com/network/showflight/52172581939,https://www.airlines-manager.com/aircraft/show/107577220,13:15,15:59,0,"$33,882.00","$19,673.00"
MIA - NAS,52172581940,MIA-PUJ-BDA 2 S,A319-100,https://www.airlines-manager.com/network/showline/42193695,https://www.airlines-manager.com/network/showflight/52172581940,https://www.airlines-manager.com/aircraft/show/104034458,14:15,16:59,228,"$78,566.00","$60,595.00"
MIA - NAS,52181070771,MIA-PUJ-BDA 3 S,A319-100,https://www.airlines-manager.com/network/showline/42193695,https://www.airlines-manager.com/network/showflight/52181070771,https://www.airlines-manager.com/aircraft/show/104034459,18:30,21:14,228,"$78,566.00","$60,595.00"
MIA - NAS,52188655686,MIA-PUJ-BDA 4 S,A319-100,https://www.airlines-manager.com/network/showline/42193695,https://www.airlines-manager.com/network/showflight/52188655686,https://www.airlines-manager.com/aircraft/show/104034460,22:00,0:44,228,"$78,566.00","$60,595.00"
MIA - OAK,52143768991,MIA-OAK-SMF 5,737-900ER,https://www.airlines-manager.com/network/showline/46079209,https://www.airlines-manager.com/network/showflight/52143768991,https://www.airlines-manager.com/aircraft/show/91198617,1:00,12:59,320,"$737,441.00","$671,549.00"
MIA - OAK,52167946249,MIA-OAK-SMF 1,737-900ER,https://www.airlines-manager.com/network/showline/46079209,https://www.airlines-manager.com/network/showflight/52167946249,https://www.airlines-manager.com/aircraft/show/91198615,11:00,22:59,320,"$737,441.00","$671,549.00"
MIA - OAK,52172581889,MIA-OAK-SMF 2,737-900ER,https://www.airlines-manager.com/network/showline/46079209,https://www.airlines-manager.com/network/showflight/52172581889,https://www.airlines-manager.com/aircraft/show/91198619,13:00,0:59,320,"$737,441.00","$671,549.00"
MIA - OAK,52176667063,MIA-OAK-SMF 3,737-900ER,https://www.airlines-manager.com/network/showline/46079209,https://www.airlines-manager.com/network/showflight/52176667063,https://www.airlines-manager.com/aircraft/show/91198616,15:00,2:59,320,"$737,441.00","$671,549.00"
MIA - OAK,52191270930,MIA-OAK-SMF 4,737-900ER,https://www.airlines-manager.com/network/showline/46079209,https://www.airlines-manager.com/network/showflight/52191270930,https://www.airlines-manager.com/aircraft/show/91198618,23:00,10:59,320,"$737,441.00","$671,549.00"
MIA - OKC,52143769089,MIA-OKC-FSD 3,A321-200,https://www.airlines-manager.com/network/showline/47780556,https://www.airlines-manager.com/network/showflight/52143769089,https://www.airlines-manager.com/aircraft/show/110883112,1:45,8:29,310,"$430,356.00","$392,725.00"
MIA - OKC,52143769090,MIA-OKC-FSD 2,A321-200,https://www.airlines-manager.com/network/showline/47780556,https://www.airlines-manager.com/network/showflight/52143769090,https://www.airlines-manager.com/aircraft/show/110883111,4:00,10:44,310,"$430,356.00","$392,725.00"
MIA - OKC,52163458742,MIA-OKC-FSD 5,ERJ-175,https://www.airlines-manager.com/network/showline/47780556,https://www.airlines-manager.com/network/showflight/52163458742,https://www.airlines-manager.com/aircraft/show/104353572,10:00,16:44,112,"$202,379.00","$177,668.00"
MIA - OKC,52172581862,MIA-OKC-FSD 1,A321-200,https://www.airlines-manager.com/network/showline/47780556,https://www.airlines-manager.com/network/showflight/52172581862,https://www.airlines-manager.com/aircraft/show/110883110,13:00,19:44,310,"$430,356.00","$392,725.00"
MIA - OKC,52176666988,MIA-OKC-FSD 4,A321-200,https://www.airlines-manager.com/network/showline/47780556,https://www.airlines-manager.com/network/showflight/52176666988,https://www.airlines-manager.com/aircraft/show/110883113,14:45,21:29,310,"$430,356.00","$392,725.00"
MIA - OMA,52143769155,MIA-BOI-BNA 1,737-900ER,https://www.airlines-manager.com/network/showline/45701875,https://www.airlines-manager.com/network/showflight/52143769155,https://www.airlines-manager.com/aircraft/show/104133006,2:30,9:59,320,"$477,532.00","$432,454.00"
MIA - OMA,52157350113,MIA-BOI-BNA 4,737-900ER,https://www.airlines-manager.com/network/showline/45701875,https://www.airlines-manager.com/network/showflight/52157350113,https://www.airlines-manager.com/aircraft/show/103775657,6:30,13:59,320,"$477,532.00","$432,454.00"
MIA - OMA,52163458732,MIA-BOI-BNA 3,737-900ER,https://www.airlines-manager.com/network/showline/45701875,https://www.airlines-manager.com/network/showflight/52163458732,https://www.airlines-manager.com/aircraft/show/104020880,10:00,17:29,320,"$477,532.00","$432,454.00"
MIA - OMA,52176667072,MIA-BOI-BNA 2,737-900ER,https://www.airlines-manager.com/network/showline/45701875,https://www.airlines-manager.com/network/showflight/52176667072,https://www.airlines-manager.com/aircraft/show/104022609,15:15,22:44,320,"$477,532.00","$432,454.00"
MIA - OMA,52181070669,MIA-BOI-BNA 5,ERJ-175,https://www.airlines-manager.com/network/showline/45701875,https://www.airlines-manager.com/network/showflight/52181070669,https://www.airlines-manager.com/aircraft/show/103534663,17:15,0:44,111,"$224,078.00","$197,554.00"
MIA - ONT,52143768939,MIA-RNO-ONT 2,737-900ER,https://www.airlines-manager.com/network/showline/46280191,https://www.airlines-manager.com/network/showflight/52143768939,https://www.airlines-manager.com/aircraft/show/90489722,0:30,11:29,320,"$691,076.00","$629,468.00"
MIA - ONT,52143768940,MIA-RNO-ONT 3,737-900ER,https://www.airlines-manager.com/network/showline/46280191,https://www.airlines-manager.com/network/showflight/52143768940,https://www.airlines-manager.com/aircraft/show/86238756,2:30,13:29,320,"$691,076.00","$629,468.00"
MIA - ONT,52167946233,MIA-RNO-ONT 4,737-900ER,https://www.airlines-manager.com/network/showline/46280191,https://www.airlines-manager.com/network/showflight/52167946233,https://www.airlines-manager.com/aircraft/show/90489723,11:00,21:59,320,"$691,076.00","$629,468.00"
MIA - ONT,52172582025,MIA-RNO-ONT 5 B,A319-100,https://www.airlines-manager.com/network/showline/46280191,https://www.airlines-manager.com/network/showflight/52172582025,https://www.airlines-manager.com/aircraft/show/105223010,14:00,0:59,198,"$518,936.00","$474,196.00"
MIA - ONT,52188655726,MIA-RNO-ONT 1,737-900ER,https://www.airlines-manager.com/network/showline/46280191,https://www.airlines-manager.com/network/showflight/52188655726,https://www.airlines-manager.com/aircraft/show/86238755,22:30,9:29,320,"$691,076.00","$629,468.00"
MIA - ORD,52143769215,MIA-ORD-DFW 1,A321-200,https://www.airlines-manager.com/network/showline/42216504,https://www.airlines-manager.com/network/showflight/52143769215,https://www.airlines-manager.com/aircraft/show/91600935,3:15,9:59,310,"$423,843.00","$364,038.00"
MIA - ORD,52143769216,MIA-ORD-DFW 4,A321-200,https://www.airlines-manager.com/network/showline/42216504,https://www.airlines-manager.com/network/showflight/52143769216,https://www.airlines-manager.com/aircraft/show/91600938,4:15,10:59,310,"$423,843.00","$364,038.00"
MIA - ORD,52163458680,MIA-ORD-DFW 6,ERJ-175,https://www.airlines-manager.com/network/showline/42216504,https://www.airlines-manager.com/network/showflight/52163458680,https://www.airlines-manager.com/aircraft/show/82543123,9:00,15:44,112,"$199,128.00","$161,151.00"
MIA - ORD,52167946269,MIA-ORD-DFW 5,A321-200,https://www.airlines-manager.com/network/showline/42216504,https://www.airlines-manager.com/network/showflight/52167946269,https://www.airlines-manager.com/aircraft/show/91600937,11:00,17:44,310,"$423,843.00","$364,038.00"
MIA - ORD,52176666991,MIA-ORD-DFW 3,A321-200,https://www.airlines-manager.com/network/showline/42216504,https://www.airlines-manager.com/network/showflight/52176666991,https://www.airlines-manager.com/aircraft/show/91600939,14:45,21:29,310,"$423,843.00","$364,038.00"
MIA - ORD,52176666992,MIA-ORD-BOI-JAX B,A319-100,https://www.airlines-manager.com/network/showline/42216504,https://www.airlines-manager.com/network/showflight/52176666992,https://www.airlines-manager.com/aircraft/show/106339154,15:30,22:14,198,"$319,680.00","$271,784.00"
MIA - ORD,52185045453,MIA-ORD-DFW 2,A321-200,https://www.airlines-manager.com/network/showline/42216504,https://www.airlines-manager.com/network/showflight/52185045453,https://www.airlines-manager.com/aircraft/show/91600936,20:45,3:29,310,"$423,843.00","$364,038.00"
MIA - ORF,52143768895,MIA-MHT-CAK 5,ERJ-175,https://www.airlines-manager.com/network/showline/49235031,https://www.airlines-manager.com/network/showflight/52143768895,https://www.airlines-manager.com/aircraft/show/114912307,0:15,5:29,112,"$157,365.00","$137,392.00"
MIA - ORF,52143768896,MIA-MHT-CAK 1,A321-200,https://www.airlines-manager.com/network/showline/49235031,https://www.airlines-manager.com/network/showflight/52143768896,https://www.airlines-manager.com/aircraft/show/115493373,3:15,8:29,310,"$331,170.00","$300,220.00"
MIA - ORF,52163458608,MIA-MHT-CAK 4,A321-200,https://www.airlines-manager.com/network/showline/49235031,https://www.airlines-manager.com/network/showflight/52163458608,https://www.airlines-manager.com/aircraft/show/115493370,8:15,13:29,310,"$331,170.00","$300,220.00"
MIA - ORF,52176667027,MIA-MHT-CAK 3,A321-200,https://www.airlines-manager.com/network/showline/49235031,https://www.airlines-manager.com/network/showflight/52176667027,https://www.airlines-manager.com/aircraft/show/115493371,15:00,20:14,310,"$331,170.00","$300,220.00"
MIA - ORF,52181070668,MIA-MHT-CAK 2,A321-200,https://www.airlines-manager.com/network/showline/49235031,https://www.airlines-manager.com/network/showflight/52181070668,https://www.airlines-manager.com/aircraft/show/115493372,17:15,22:29,310,"$331,170.00","$300,220.00"
MIA - PDX,52163458765,MIA-PDX-DTW 1,737-900ER,https://www.airlines-manager.com/network/showline/44322115,https://www.airlines-manager.com/network/showflight/52163458765,https://www.airlines-manager.com/aircraft/show/89943715,10:00,22:29,320,"$771,072.00","$700,755.00"
MIA - PDX,52172581923,MIA-PDX-DTW 3,737-900ER,https://www.airlines-manager.com/network/showline/44322115,https://www.airlines-manager.com/network/showflight/52172581923,https://www.airlines-manager.com/aircraft/show/89943713,13:00,1:29,320,"$771,072.00","$700,755.00"
MIA - PDX,52172581924,MIA-PDX-DTW 4,737-900ER,https://www.airlines-manager.com/network/showline/44322115,https://www.airlines-manager.com/network/showflight/52172581924,https://www.airlines-manager.com/aircraft/show/89943712,14:00,2:29,320,"$771,072.00","$700,755.00"
MIA - PDX,52185045365,MIA-PDX-DTW 2,737-900ER,https://www.airlines-manager.com/network/showline/44322115,https://www.airlines-manager.com/network/showflight/52185045365,https://www.airlines-manager.com/aircraft/show/89943714,19:30,7:59,320,"$771,072.00","$700,755.00"
MIA - PDX,52191270960,MIA-PDX-DTW 5,737-900ER,https://www.airlines-manager.com/network/showline/44322115,https://www.airlines-manager.com/network/showflight/52191270960,https://www.airlines-manager.com/aircraft/show/89943711,23:30,11:59,320,"$771,072.00","$700,755.00"
MIA - PHL,52143769260,MIA-ORD-DFW 3,A321-200,https://www.airlines-manager.com/network/showline/42384835,https://www.airlines-manager.com/network/showflight/52143769260,https://www.airlines-manager.com/aircraft/show/91600939,4:00,9:59,310,"$379,715.00","$337,940.00"
MIA - PHL,52157350009,MIA-ORD-DFW 5,A321-200,https://www.airlines-manager.com/network/showline/42384835,https://www.airlines-manager.com/network/showflight/52157350009,https://www.airlines-manager.com/aircraft/show/91600937,5:00,10:59,310,"$379,715.00","$337,940.00"
MIA - PHL,52163458723,MIA-ORD-DFW 2,A321-200,https://www.airlines-manager.com/network/showline/42384835,https://www.airlines-manager.com/network/showflight/52163458723,https://www.airlines-manager.com/aircraft/show/91600936,10:00,15:59,310,"$379,715.00","$337,940.00"
MIA - PHL,52176667159,MIA-ORD-DFW 1,A321-200,https://www.airlines-manager.com/network/showline/42384835,https://www.airlines-manager.com/network/showflight/52176667159,https://www.airlines-manager.com/aircraft/show/91600935,16:30,22:29,310,"$379,715.00","$337,940.00"
MIA - PHL,52181070691,MIA-ORD-DFW 4,A321-200,https://www.airlines-manager.com/network/showline/42384835,https://www.airlines-manager.com/network/showflight/52181070691,https://www.airlines-manager.com/aircraft/show/91600938,17:30,23:29,310,"$379,715.00","$337,940.00"
MIA - PHL,52188655702,MIA-ORD-DFW 6,ERJ-175,https://www.airlines-manager.com/network/showline/42384835,https://www.airlines-manager.com/network/showflight/52188655702,https://www.airlines-manager.com/aircraft/show/82543123,22:15,4:14,112,"$179,482.00","$152,644.00"
MIA - PHX,52143768902,MIA-JFK-PHX 3,A321neo,https://www.airlines-manager.com/network/showline/42288076,https://www.airlines-manager.com/network/showflight/52143768902,https://www.airlines-manager.com/aircraft/show/105308266,0:15,9:59,338,"$670,363.00","$611,658.00"
MIA - PHX,52143768903,MIA-JFK-PHX 2,A321neo,https://www.airlines-manager.com/network/showline/42288076,https://www.airlines-manager.com/network/showflight/52143768903,https://www.airlines-manager.com/aircraft/show/105308265,2:15,11:59,338,"$670,363.00","$611,658.00"
MIA - PHX,52167946241,MIA-JFK-PHX 5,A321neo,https://www.airlines-manager.com/network/showline/42288076,https://www.airlines-manager.com/network/showflight/52167946241,https://www.airlines-manager.com/aircraft/show/105308268,11:00,20:44,338,"$670,363.00","$611,658.00"
MIA - PHX,52167946242,MIA-JFK-PHX 1,A321neo,https://www.airlines-manager.com/network/showline/42288076,https://www.airlines-manager.com/network/showflight/52167946242,https://www.airlines-manager.com/aircraft/show/105308264,12:00,21:44,338,"$670,363.00","$611,658.00"
MIA - PHX,52176667155,MIA-JFK-PHX 4,A321neo,https://www.airlines-manager.com/network/showline/42288076,https://www.airlines-manager.com/network/showflight/52176667155,https://www.airlines-manager.com/aircraft/show/105308267,16:15,1:59,338,"$670,363.00","$611,658.00"
MIA - PHX,52188655576,MIA-JFK-PHX 6,ERJ-175,https://www.airlines-manager.com/network/showline/42288076,https://www.airlines-manager.com/network/showflight/52188655576,https://www.airlines-manager.com/aircraft/show/82683137,21:00,6:44,112,"$289,990.00","$249,853.00"
MIA - PIT,52143769214,MIA-AUS-PIT 3,737-900ER,https://www.airlines-manager.com/network/showline/44971957,https://www.airlines-manager.com/network/showflight/52143769214,https://www.airlines-manager.com/aircraft/show/99920624,3:15,9:14,320,"$381,250.00","$339,574.00"
MIA - PIT,52163458756,MIA-AUS-PIT 2,737-900ER,https://www.airlines-manager.com/network/showline/44971957,https://www.airlines-manager.com/network/showflight/52163458756,https://www.airlines-manager.com/aircraft/show/99920625,10:00,15:59,320,"$381,250.00","$339,574.00"
MIA - PIT,52176667160,MIA-AUS-PIT 1,737-900ER,https://www.airlines-manager.com/network/showline/44971957,https://www.airlines-manager.com/network/showflight/52176667160,https://www.airlines-manager.com/aircraft/show/99920626,16:30,22:29,320,"$381,250.00","$339,574.00"
MIA - PIT,52185045448,MIA-AUS-PIT 5,ERJ-175,https://www.airlines-manager.com/network/showline/44971957,https://www.airlines-manager.com/network/showflight/52185045448,https://www.airlines-manager.com/aircraft/show/82323689,20:30,2:29,112,"$180,210.00","$156,414.00"
MIA - PIT,52188655588,MIA-AUS-PIT 4,737-900ER,https://www.airlines-manager.com/network/showline/44971957,https://www.airlines-manager.com/network/showflight/52188655588,https://www.airlines-manager.com/aircraft/show/99920623,21:15,3:14,320,"$381,250.00","$339,574.00"
MIA - PLS,52143769219,MIA-PUJ-BDA 6 S,A319-100,https://www.airlines-manager.com/network/showline/42193793,https://www.airlines-manager.com/network/showflight/52143769219,https://www.airlines-manager.com/aircraft/show/99326789,3:15,7:29,228,"$205,463.00","$184,370.00"
MIA - PLS,52157349993,MIA-PUJ-BDA 4 S,A319-100,https://www.airlines-manager.com/network/showline/42193793,https://www.airlines-manager.com/network/showflight/52157349993,https://www.airlines-manager.com/aircraft/show/104034460,5:00,9:14,228,"$205,463.00","$184,370.00"
MIA - PLS,52163458735,MIA-PUJ-BDA 2 S,A319-100,https://www.airlines-manager.com/network/showline/42193793,https://www.airlines-manager.com/network/showflight/52163458735,https://www.airlines-manager.com/aircraft/show/104034458,10:00,14:14,228,"$205,463.00","$184,370.00"
MIA - PLS,52172582035,MIA-PUJ-BDA 3 S,A319-100,https://www.airlines-manager.com/network/showline/42193793,https://www.airlines-manager.com/network/showflight/52172582035,https://www.airlines-manager.com/aircraft/show/104034459,14:15,18:29,228,"$205,463.00","$184,370.00"
MIA - PLS,52181070650,MIA-PUJ-BDA 1 S,A319-100,https://www.airlines-manager.com/network/showline/42193793,https://www.airlines-manager.com/network/showflight/52181070650,https://www.airlines-manager.com/aircraft/show/104034457,17:00,21:14,228,"$205,463.00","$184,370.00"
MIA - PLS,52188655685,MIA-PUJ-BDA 5 S,A319-100,https://www.airlines-manager.com/network/showline/42193793,https://www.airlines-manager.com/network/showflight/52188655685,https://www.airlines-manager.com/aircraft/show/104034461,22:00,2:14,228,"$205,463.00","$184,370.00"
MIA - POS,52172581829,MIA 84B-1 E2,777-300,https://www.airlines-manager.com/network/showline/46538394,https://www.airlines-manager.com/network/showflight/52172581829,https://www.airlines-manager.com/aircraft/show/106676225,12:30,20:29,962,"$1,335,038.00","$1,217,931.00"
MIA - POS,52176667131,MIA 84B-6 E2,777-300,https://www.airlines-manager.com/network/showline/46538394,https://www.airlines-manager.com/network/showflight/52176667131,https://www.airlines-manager.com/aircraft/show/106676230,16:00,23:59,726,"$1,097,085.00","$992,942.00"
MIA - PUJ,52143769236,MIA-PUJ-BDA 2 S,A319-100,https://www.airlines-manager.com/network/showline/42193830,https://www.airlines-manager.com/network/showflight/52143769236,https://www.airlines-manager.com/aircraft/show/104034458,3:30,9:14,228,"$275,694.00","$249,074.00"
MIA - PUJ,52163458733,MIA-PUJ-BDA 5 S,A319-100,https://www.airlines-manager.com/network/showline/42193830,https://www.airlines-manager.com/network/showflight/52163458733,https://www.airlines-manager.com/aircraft/show/104034461,10:00,15:44,228,"$275,694.00","$249,074.00"
MIA - PUJ,52176667128,MIA CARGO 1,737-700,https://www.airlines-manager.com/network/showline/42193830,https://www.airlines-manager.com/network/showflight/52176667128,https://www.airlines-manager.com/aircraft/show/107577220,16:00,21:44,0,"$94,581.00","$70,986.00"
MIA - PUJ,52176667129,MIA-PUJ-BDA 4 S,A319-100,https://www.airlines-manager.com/network/showline/42193830,https://www.airlines-manager.com/network/showflight/52176667129,https://www.airlines-manager.com/aircraft/show/104034460,16:15,21:59,228,"$275,694.00","$249,074.00"
MIA - PUJ,52181070667,MIA-PUJ-BDA 6 S,A319-100,https://www.airlines-manager.com/network/showline/42193830,https://www.airlines-manager.com/network/showflight/52181070667,https://www.airlines-manager.com/aircraft/show/99326789,17:15,22:59,228,"$275,694.00","$249,074.00"
MIA - PUJ,52188655589,MIA-PUJ-BDA 1 S,A319-100,https://www.airlines-manager.com/network/showline/42193830,https://www.airlines-manager.com/network/showflight/52188655589,https://www.airlines-manager.com/aircraft/show/104034457,21:15,2:59,228,"$275,694.00","$249,074.00"
MIA - PUJ,52188655590,MIA-PUJ-BDA 3 S,A319-100,https://www.airlines-manager.com/network/showline/42193830,https://www.airlines-manager.com/network/showflight/52188655590,https://www.airlines-manager.com/aircraft/show/104034459,22:00,3:44,228,"$275,694.00","$249,074.00"
MIA - PVD,52143769032,MIA-BUR-PVD 3,A321-200,https://www.airlines-manager.com/network/showline/47218382,https://www.airlines-manager.com/network/showflight/52143769032,https://www.airlines-manager.com/aircraft/show/108834805,1:15,7:59,310,"$425,838.00","$389,609.00"
MIA - PVD,52157350193,MIA-BUR-PVD 5 B,A319-100,https://www.airlines-manager.com/network/showline/47218382,https://www.airlines-manager.com/network/showflight/52157350193,https://www.airlines-manager.com/aircraft/show/108834807,7:15,13:59,198,"$321,362.00","$292,327.00"
MIA - PVD,52167946211,MIA-BUR-PVD 2,A321-200,https://www.airlines-manager.com/network/showline/47218382,https://www.airlines-manager.com/network/showflight/52167946211,https://www.airlines-manager.com/aircraft/show/108834804,11:00,17:44,310,"$425,838.00","$389,609.00"
MIA - PVD,52181070641,MIA-BUR-PVD 4,A321-200,https://www.airlines-manager.com/network/showline/47218382,https://www.airlines-manager.com/network/showflight/52181070641,https://www.airlines-manager.com/aircraft/show/108834806,17:00,23:44,310,"$425,838.00","$389,609.00"
MIA - PVD,52188655705,MIA-BUR-PVD 1,A321-200,https://www.airlines-manager.com/network/showline/47218382,https://www.airlines-manager.com/network/showflight/52188655705,https://www.airlines-manager.com/aircraft/show/108834803,22:15,4:59,310,"$425,838.00","$389,609.00"
MIA - PWM,52157350204,MIA-SDF-PWM 3,A321-200,https://www.airlines-manager.com/network/showline/46376143,https://www.airlines-manager.com/network/showflight/52157350204,https://www.airlines-manager.com/aircraft/show/94886629,7:30,14:59,310,"$466,126.00","$428,202.00"
MIA - PWM,52172582023,MIA-SDF-PWM 2,A321-200,https://www.airlines-manager.com/network/showline/46376143,https://www.airlines-manager.com/network/showflight/52172582023,https://www.airlines-manager.com/aircraft/show/94886626,14:00,21:29,310,"$466,126.00","$428,202.00"
MIA - PWM,52181070791,MIA-SDF-PWM 1,A321-200,https://www.airlines-manager.com/network/showline/46376143,https://www.airlines-manager.com/network/showflight/52181070791,https://www.airlines-manager.com/aircraft/show/96692674,18:45,2:14,310,"$466,126.00","$428,202.00"
MIA - PWM,52185045461,MIA-SDF-PWM 5,ERJ-175,https://www.airlines-manager.com/network/showline/46376143,https://www.airlines-manager.com/network/showflight/52185045461,https://www.airlines-manager.com/aircraft/show/105601657,20:45,4:14,112,"$220,081.00","$194,961.00"
MIA - PWM,52191270980,MIA-SDF-PWM 4,A321-200,https://www.airlines-manager.com/network/showline/46376143,https://www.airlines-manager.com/network/showflight/52191270980,https://www.airlines-manager.com/aircraft/show/94886625,23:45,7:14,310,"$466,126.00","$428,202.00"
MIA - RDU,52143769280,MIA-AUS-PIT 1,737-900ER,https://www.airlines-manager.com/network/showline/44971928,https://www.airlines-manager.com/network/showflight/52143769280,https://www.airlines-manager.com/aircraft/show/99920626,4:30,9:14,320,"$309,405.00","$273,229.00"
MIA - RDU,52163458632,MIA-AUS-PIT 5,ERJ-175,https://www.airlines-manager.com/network/showline/44971928,https://www.airlines-manager.com/network/showflight/52163458632,https://www.airlines-manager.com/aircraft/show/82323689,8:30,13:14,112,"$147,360.00","$127,227.00"
MIA - RDU,52163458633,MIA-AUS-PIT 4,737-900ER,https://www.airlines-manager.com/network/showline/44971928,https://www.airlines-manager.com/network/showflight/52163458633,https://www.airlines-manager.com/aircraft/show/99920623,10:00,14:44,320,"$309,405.00","$273,229.00"
MIA - RDU,52176667137,MIA-AUS-PIT 3,737-900ER,https://www.airlines-manager.com/network/showline/44971928,https://www.airlines-manager.com/network/showflight/52176667137,https://www.airlines-manager.com/aircraft/show/99920624,16:00,20:44,320,"$309,405.00","$273,229.00"
MIA - RDU,52188655673,MIA-AUS-PIT 2,737-900ER,https://www.airlines-manager.com/network/showline/44971928,https://www.airlines-manager.com/network/showflight/52188655673,https://www.airlines-manager.com/aircraft/show/99920625,22:00,2:44,320,"$309,405.00","$273,229.00"
MIA - RIC,52163458634,MIA-OKC-FSD 3,A321-200,https://www.airlines-manager.com/network/showline/47780585,https://www.airlines-manager.com/network/showflight/52163458634,https://www.airlines-manager.com/aircraft/show/110883112,8:30,13:44,310,"$335,618.00","$304,336.00"
MIA - RIC,52167946203,MIA-OKC-FSD 2,A321-200,https://www.airlines-manager.com/network/showline/47780585,https://www.airlines-manager.com/network/showflight/52167946203,https://www.airlines-manager.com/aircraft/show/110883111,11:00,16:14,310,"$335,618.00","$304,336.00"
MIA - RIC,52181070603,MIA-OKC-FSD 5,ERJ-175,https://www.airlines-manager.com/network/showline/47780585,https://www.airlines-manager.com/network/showflight/52181070603,https://www.airlines-manager.com/aircraft/show/104353572,16:45,21:59,112,"$159,523.00","$139,309.00"
MIA - RIC,52185045371,MIA-OKC-FSD 1,A321-200,https://www.airlines-manager.com/network/showline/47780585,https://www.airlines-manager.com/network/showflight/52185045371,https://www.airlines-manager.com/aircraft/show/110883110,19:45,0:59,310,"$335,618.00","$304,336.00"
MIA - RIC,52188655617,MIA-OKC-FSD 4,A321-200,https://www.airlines-manager.com/network/showline/47780585,https://www.airlines-manager.com/network/showflight/52188655617,https://www.airlines-manager.com/aircraft/show/110883113,21:30,2:44,309,"$334,622.00","$303,369.00"
MIA - RNO,52143769004,MIA-RNO-ONT 5 B,A319-100,https://www.airlines-manager.com/network/showline/46280187,https://www.airlines-manager.com/network/showflight/52143769004,https://www.airlines-manager.com/aircraft/show/105223010,1:00,12:44,198,"$543,694.00","$497,857.00"
MIA - RNO,52167946234,MIA-RNO-ONT 1,737-900ER,https://www.airlines-manager.com/network/showline/46280187,https://www.airlines-manager.com/network/showflight/52167946234,https://www.airlines-manager.com/aircraft/show/86238755,11:00,22:29,320,"$721,759.00","$658,908.00"
MIA - RNO,52172581881,MIA-RNO-ONT 2,737-900ER,https://www.airlines-manager.com/network/showline/46280187,https://www.airlines-manager.com/network/showflight/52172581881,https://www.airlines-manager.com/aircraft/show/90489722,13:00,0:29,320,"$721,759.00","$658,908.00"
MIA - RNO,52176667054,MIA-RNO-ONT 3,737-900ER,https://www.airlines-manager.com/network/showline/46280187,https://www.airlines-manager.com/network/showflight/52176667054,https://www.airlines-manager.com/aircraft/show/86238756,15:00,2:29,320,"$721,759.00","$658,908.00"
MIA - RNO,52188655676,MIA-RNO-ONT 4,737-900ER,https://www.airlines-manager.com/network/showline/46280187,https://www.airlines-manager.com/network/showflight/52188655676,https://www.airlines-manager.com/aircraft/show/90489723,22:00,9:29,320,"$721,759.00","$658,908.00"
MIA - RSW,52143769261,MIA-ANU-SXM 3 S,A319-100,https://www.airlines-manager.com/network/showline/47559657,https://www.airlines-manager.com/network/showflight/52143769261,https://www.airlines-manager.com/aircraft/show/110114297,4:00,6:29,228,"$65,645.00","$47,392.00"
MIA - RSW,52163458683,MIA-ANU-SXM 1 S,A319-100,https://www.airlines-manager.com/network/showline/47559657,https://www.airlines-manager.com/network/showflight/52163458683,https://www.airlines-manager.com/aircraft/show/110114295,9:15,11:44,228,"$65,645.00","$47,392.00"
MIA - RSW,52163458684,MIA-ANU-SXM 2 S,A319-100,https://www.airlines-manager.com/network/showline/47559657,https://www.airlines-manager.com/network/showflight/52163458684,https://www.airlines-manager.com/aircraft/show/110114296,10:15,12:44,228,"$65,645.00","$47,392.00"
MIA - RSW,52172581981,MIA-ANU-SXM 6 S,A319-100,https://www.airlines-manager.com/network/showline/47559657,https://www.airlines-manager.com/network/showflight/52172581981,https://www.airlines-manager.com/aircraft/show/110114300,14:00,16:29,228,"$65,645.00","$47,392.00"
MIA - RSW,52188655574,MIA-ANU-SXM 5 S,A319-100,https://www.airlines-manager.com/network/showline/47559657,https://www.airlines-manager.com/network/showflight/52188655574,https://www.airlines-manager.com/aircraft/show/110114299,21:00,23:29,228,"$65,645.00","$47,392.00"
MIA - RSW,52191270922,MIA-ANU-SXM 4 S,A319-100,https://www.airlines-manager.com/network/showline/47559657,https://www.airlines-manager.com/network/showflight/52191270922,https://www.airlines-manager.com/aircraft/show/110114298,23:00,1:29,228,"$65,645.00","$47,392.00"
MIA - SAN,52143769105,MIA-BWI-YYZ 2,A321-200,https://www.airlines-manager.com/network/showline/42608092,https://www.airlines-manager.com/network/showflight/52143769105,https://www.airlines-manager.com/aircraft/show/92153440,1:45,12:44,310,"$685,900.00","$629,101.00"
MIA - SAN,52163458720,MIA-BWI-YYZ 3,A321-200,https://www.airlines-manager.com/network/showline/42608092,https://www.airlines-manager.com/network/showflight/52163458720,https://www.airlines-manager.com/aircraft/show/92153441,10:00,20:59,310,"$685,900.00","$629,101.00"
MIA - SAN,52167946315,MIA-BWI-YYZ 6 S,ERJ-175,https://www.airlines-manager.com/network/showline/42608092,https://www.airlines-manager.com/network/showflight/52167946315,https://www.airlines-manager.com/aircraft/show/92137503,12:00,22:59,136,"$299,525.00","$265,786.00"
MIA - SAN,52181070628,MIA-BWI-YYZ 4,A321-200,https://www.airlines-manager.com/network/showline/42608092,https://www.airlines-manager.com/network/showflight/52181070628,https://www.airlines-manager.com/aircraft/show/92153442,17:00,3:59,310,"$685,900.00","$629,101.00"
MIA - SAN,52185045297,MIA-BWI-YYZ 5,A321-200,https://www.airlines-manager.com/network/showline/42608092,https://www.airlines-manager.com/network/showflight/52185045297,https://www.airlines-manager.com/aircraft/show/92153439,19:00,5:59,310,"$685,900.00","$629,101.00"
MIA - SAN,52188655747,MIA-BWI-YYZ 1,A321-200,https://www.airlines-manager.com/network/showline/42608092,https://www.airlines-manager.com/network/showflight/52188655747,https://www.airlines-manager.com/aircraft/show/92153443,22:45,9:44,310,"$685,900.00","$629,101.00"
MIA - SAT,52143769209,MIA-BDL-SAT 3,737-900ER,https://www.airlines-manager.com/network/showline/46909516,https://www.airlines-manager.com/network/showflight/52143769209,https://www.airlines-manager.com/aircraft/show/107763562,3:15,9:44,320,"$410,326.00","$369,042.00"
MIA - SAT,52167946214,MIA-BDL-SAT 2,737-900ER,https://www.airlines-manager.com/network/showline/46909516,https://www.airlines-manager.com/network/showflight/52167946214,https://www.airlines-manager.com/aircraft/show/107763565,11:00,17:29,320,"$410,326.00","$369,042.00"
MIA - SAT,52176666985,MIA-BDL-SAT 5,ERJ-175,https://www.airlines-manager.com/network/showline/46909516,https://www.airlines-manager.com/network/showflight/52176666985,https://www.airlines-manager.com/aircraft/show/107467213,14:45,21:14,112,"$193,597.00","$169,631.00"
MIA - SAT,52185045435,MIA-BDL-SAT 4,737-900ER,https://www.airlines-manager.com/network/showline/46909516,https://www.airlines-manager.com/network/showflight/52185045435,https://www.airlines-manager.com/aircraft/show/107763561,20:30,2:59,320,"$410,326.00","$369,042.00"
MIA - SAT,52185045436,MIA-BDL-SAT 1,737-900ER,https://www.airlines-manager.com/network/showline/46909516,https://www.airlines-manager.com/network/showflight/52185045436,https://www.airlines-manager.com/aircraft/show/107763566,20:45,3:14,320,"$410,326.00","$369,042.00"
MIA - SAV,52143768883,MIA-OKC-FSD 2,A321-200,https://www.airlines-manager.com/network/showline/47780592,https://www.airlines-manager.com/network/showflight/52143768883,https://www.airlines-manager.com/aircraft/show/110883111,0:15,3:59,310,"$214,502.00","$189,231.00"
MIA - SAV,52157350094,MIA-OKC-FSD 5,ERJ-175,https://www.airlines-manager.com/network/showline/47780592,https://www.airlines-manager.com/network/showflight/52157350094,https://www.airlines-manager.com/aircraft/show/104353572,6:00,9:44,112,"$100,180.00","$84,247.00"
MIA - SAV,52163458671,MIA-OKC-FSD 1,A321-200,https://www.airlines-manager.com/network/showline/47780592,https://www.airlines-manager.com/network/showflight/52163458671,https://www.airlines-manager.com/aircraft/show/110883110,9:00,12:44,310,"$214,502.00","$189,231.00"
MIA - SAV,52167946202,MIA-OKC-FSD 4,A321-200,https://www.airlines-manager.com/network/showline/47780592,https://www.airlines-manager.com/network/showflight/52167946202,https://www.airlines-manager.com/aircraft/show/110883113,11:00,14:44,310,"$214,502.00","$189,231.00"
MIA - SAV,52188655690,MIA-OKC-FSD 3,A321-200,https://www.airlines-manager.com/network/showline/47780592,https://www.airlines-manager.com/network/showflight/52188655690,https://www.airlines-manager.com/aircraft/show/110883112,22:00,1:44,267,"$197,007.00","$172,256.00"
MIA - SDF,52143768962,MIA-SDF-PWM 3,A321-200,https://www.airlines-manager.com/network/showline/46415148,https://www.airlines-manager.com/network/showflight/52143768962,https://www.airlines-manager.com/aircraft/show/94886629,0:45,6:29,310,"$354,735.00","$320,369.00"
MIA - SDF,52163458605,MIA-SDF-PWM 2,A321-200,https://www.airlines-manager.com/network/showline/46415148,https://www.airlines-manager.com/network/showflight/52163458605,https://www.airlines-manager.com/aircraft/show/94886626,8:15,13:59,310,"$354,735.00","$320,369.00"
MIA - SDF,52172581879,MIA-SDF-PWM 1,A321-200,https://www.airlines-manager.com/network/showline/46415148,https://www.airlines-manager.com/network/showflight/52172581879,https://www.airlines-manager.com/aircraft/show/96692674,13:00,18:44,310,"$354,735.00","$320,369.00"
MIA - SDF,52176667001,MIA-SDF-PWM 5,ERJ-175,https://www.airlines-manager.com/network/showline/46415148,https://www.airlines-manager.com/network/showflight/52176667001,https://www.airlines-manager.com/aircraft/show/105601657,15:00,20:44,112,"$167,622.00","$145,409.00"
MIA - SDF,52176667002,MIA CARGO 2,737-700,https://www.airlines-manager.com/network/showline/46415148,https://www.airlines-manager.com/network/showflight/52176667002,https://www.airlines-manager.com/aircraft/show/107527976,15:45,21:29,0,"$94,246.00","$69,951.00"
MIA - SDF,52181070722,MIA-SDF-PWM 4,A321-200,https://www.airlines-manager.com/network/showline/46415148,https://www.airlines-manager.com/network/showflight/52181070722,https://www.airlines-manager.com/aircraft/show/94886625,18:00,23:44,309,"$345,720.00","$312,886.00"
MIA - SEA,52143769077,MIA-LAS-SEA 3,A321neo,https://www.airlines-manager.com/network/showline/42449491,https://www.airlines-manager.com/network/showflight/52143769077,https://www.airlines-manager.com/aircraft/show/105093927,1:30,13:59,338,"$830,683.00","$762,634.00"
MIA - SEA,52163458745,MIA-LAS-SEA 4,A321neo,https://www.airlines-manager.com/network/showline/42449491,https://www.airlines-manager.com/network/showflight/52163458745,https://www.airlines-manager.com/aircraft/show/105093928,10:00,22:29,338,"$830,683.00","$762,634.00"
MIA - SEA,52172581886,MIA-LAS-SEA 5,A321neo,https://www.airlines-manager.com/network/showline/42449491,https://www.airlines-manager.com/network/showflight/52172581886,https://www.airlines-manager.com/aircraft/show/105093929,13:00,1:29,338,"$830,683.00","$762,634.00"
MIA - SEA,52185045442,MIA-LAS-SEA 1,A321neo,https://www.airlines-manager.com/network/showline/42449491,https://www.airlines-manager.com/network/showflight/52185045442,https://www.airlines-manager.com/aircraft/show/105093925,20:30,8:59,338,"$830,683.00","$762,634.00"
MIA - SEA,52188655733,MIA-LAS-SEA 6 B,A319-100,https://www.airlines-manager.com/network/showline/42449491,https://www.airlines-manager.com/network/showflight/52188655733,https://www.airlines-manager.com/aircraft/show/113251304,22:30,11:14,198,"$575,551.00","$518,274.00"
MIA - SEA,52191270962,MIA-LAS-SEA 2,A321neo,https://www.airlines-manager.com/network/showline/42449491,https://www.airlines-manager.com/network/showflight/52191270962,https://www.airlines-manager.com/aircraft/show/105093926,23:30,11:59,338,"$830,683.00","$762,634.00"
MIA - SJC,52143769102,MIA-SJC-YYC 5,737-900ER,https://www.airlines-manager.com/network/showline/46909498,https://www.airlines-manager.com/network/showflight/52143769102,https://www.airlines-manager.com/aircraft/show/107763563,1:45,13:44,320,"$731,348.00","$665,181.00"
MIA - SJC,52167946311,MIA-SJC-YYC 1,737-900ER,https://www.airlines-manager.com/network/showline/46909498,https://www.airlines-manager.com/network/showflight/52167946311,https://www.airlines-manager.com/aircraft/show/107763569,12:00,23:59,320,"$731,348.00","$665,181.00"
MIA - SJC,52172581990,MIA-SJC-YYC 2,737-900ER,https://www.airlines-manager.com/network/showline/46909498,https://www.airlines-manager.com/network/showflight/52172581990,https://www.airlines-manager.com/aircraft/show/107763568,14:00,1:59,320,"$731,348.00","$665,181.00"
MIA - SJC,52176667125,MIA-SJC-YYC 3,737-900ER,https://www.airlines-manager.com/network/showline/46909498,https://www.airlines-manager.com/network/showflight/52176667125,https://www.airlines-manager.com/aircraft/show/107763567,16:00,3:59,320,"$731,348.00","$665,181.00"
MIA - SJC,52191270971,MIA-SJC-YYC 4,737-900ER,https://www.airlines-manager.com/network/showline/46909498,https://www.airlines-manager.com/network/showflight/52191270971,https://www.airlines-manager.com/aircraft/show/107763564,23:45,11:44,320,"$731,348.00","$665,181.00"
MIA - SJU,52143769208,MIA-SJU-BOS 6 B,A319-100,https://www.airlines-manager.com/network/showline/42305291,https://www.airlines-manager.com/network/showflight/52143769208,https://www.airlines-manager.com/aircraft/show/110582841,3:15,9:29,198,"$286,591.00","$257,526.00"
MIA - SJU,52163458778,MIA-SJU-BOS 2,A321-200,https://www.airlines-manager.com/network/showline/42305291,https://www.airlines-manager.com/network/showflight/52163458778,https://www.airlines-manager.com/aircraft/show/91352062,10:15,16:29,310,"$379,884.00","$343,609.00"
MIA - SJU,52167946348,MIA-SJU-BOS 3,A321-200,https://www.airlines-manager.com/network/showline/42305291,https://www.airlines-manager.com/network/showflight/52167946348,https://www.airlines-manager.com/aircraft/show/91352061,12:15,18:29,310,"$379,884.00","$343,609.00"
MIA - SJU,52181070749,MIA-SJU-BOS 4,A321-200,https://www.airlines-manager.com/network/showline/42305291,https://www.airlines-manager.com/network/showflight/52181070749,https://www.airlines-manager.com/aircraft/show/91352060,18:15,0:29,310,"$379,884.00","$343,609.00"
MIA - SJU,52185045339,MIA-SJU-BOS 5,A321-200,https://www.airlines-manager.com/network/showline/42305291,https://www.airlines-manager.com/network/showflight/52185045339,https://www.airlines-manager.com/aircraft/show/91352059,19:15,1:29,310,"$379,884.00","$343,609.00"
MIA - SJU,52188655752,MIA-SJU-BOS 1,A321-200,https://www.airlines-manager.com/network/showline/42305291,https://www.airlines-manager.com/network/showflight/52188655752,https://www.airlines-manager.com/aircraft/show/91352063,22:45,4:59,272,"$338,555.00","$303,640.00"
MIA - SKB,52143769069,MIA-ANU-SXM 4 S,A319-100,https://www.airlines-manager.com/network/showline/47559665,https://www.airlines-manager.com/network/showflight/52143769069,https://www.airlines-manager.com/aircraft/show/110114298,1:30,8:29,228,"$343,645.00","$314,116.00"
MIA - SKB,52143769070,MIA-ANU-SXM 1 S,A319-100,https://www.airlines-manager.com/network/showline/47559665,https://www.airlines-manager.com/network/showflight/52143769070,https://www.airlines-manager.com/aircraft/show/110114295,2:15,9:14,228,"$343,645.00","$314,116.00"
MIA - SKB,52143769071,MIA-ANU-SXM 2 S,A319-100,https://www.airlines-manager.com/network/showline/47559665,https://www.airlines-manager.com/network/showflight/52143769071,https://www.airlines-manager.com/aircraft/show/110114296,3:15,10:14,228,"$343,645.00","$314,116.00"
MIA - SKB,52157350131,MIA-ANU-SXM 6 S,A319-100,https://www.airlines-manager.com/network/showline/47559665,https://www.airlines-manager.com/network/showflight/52157350131,https://www.airlines-manager.com/aircraft/show/110114300,6:45,13:44,228,"$343,645.00","$314,116.00"
MIA - SKB,52172581982,MIA-ANU-SXM 5 S,A319-100,https://www.airlines-manager.com/network/showline/47559665,https://www.airlines-manager.com/network/showflight/52172581982,https://www.airlines-manager.com/aircraft/show/110114299,14:00,20:59,228,"$343,645.00","$314,116.00"
MIA - SKB,52188655565,MIA-ANU-SXM 3 S,A319-100,https://www.airlines-manager.com/network/showline/47559665,https://www.airlines-manager.com/network/showflight/52188655565,https://www.airlines-manager.com/aircraft/show/110114297,21:00,3:59,228,"$343,645.00","$314,116.00"
MIA - SLC,52143768828,MIA-SJU-BOS 2,A321-200,https://www.airlines-manager.com/network/showline/42307240,https://www.airlines-manager.com/network/showflight/52143768828,https://www.airlines-manager.com/aircraft/show/91352062,0:00,10:14,310,"$641,108.00","$583,522.00"
MIA - SLC,52143768829,MIA-SJU-BOS 4,A321-200,https://www.airlines-manager.com/network/showline/42307240,https://www.airlines-manager.com/network/showflight/52143768829,https://www.airlines-manager.com/aircraft/show/91352060,1:00,11:14,310,"$641,108.00","$583,522.00"
MIA - SLC,52143768830,MIA-SJU-BOS 3,A321-200,https://www.airlines-manager.com/network/showline/42307240,https://www.airlines-manager.com/network/showflight/52143768830,https://www.airlines-manager.com/aircraft/show/91352061,2:00,12:14,310,"$641,108.00","$583,522.00"
MIA - SLC,52163458664,MIA-SJU-BOS 5,A321-200,https://www.airlines-manager.com/network/showline/42307240,https://www.airlines-manager.com/network/showflight/52163458664,https://www.airlines-manager.com/aircraft/show/91352059,9:00,19:14,310,"$641,108.00","$583,522.00"
MIA - SLC,52163458665,MIA-SJU-BOS 6 B,A319-100,https://www.airlines-manager.com/network/showline/42307240,https://www.airlines-manager.com/network/showflight/52163458665,https://www.airlines-manager.com/aircraft/show/110582841,10:00,20:14,198,"$481,802.00","$435,643.00"
MIA - SLC,52167946321,MIA-SJU-BOS 1,A321-200,https://www.airlines-manager.com/network/showline/42307240,https://www.airlines-manager.com/network/showflight/52167946321,https://www.airlines-manager.com/aircraft/show/91352063,12:00,22:14,310,"$641,108.00","$583,522.00"
MIA - SMF,52143768992,MIA-OAK-SMF 2,737-900ER,https://www.airlines-manager.com/network/showline/46079200,https://www.airlines-manager.com/network/showflight/52143768992,https://www.airlines-manager.com/aircraft/show/91198619,1:00,12:59,320,"$731,469.00","$667,437.00"
MIA - SMF,52143768993,MIA-OAK-SMF 3,737-900ER,https://www.airlines-manager.com/network/showline/46079200,https://www.airlines-manager.com/network/showflight/52143768993,https://www.airlines-manager.com/aircraft/show/91198616,3:00,14:59,320,"$731,469.00","$667,437.00"
MIA - SMF,52167946248,MIA-OAK-SMF 4,737-900ER,https://www.airlines-manager.com/network/showline/46079200,https://www.airlines-manager.com/network/showflight/52167946248,https://www.airlines-manager.com/aircraft/show/91198618,11:00,22:59,320,"$731,469.00","$667,437.00"
MIA - SMF,52172581888,MIA-OAK-SMF 5,737-900ER,https://www.airlines-manager.com/network/showline/46079200,https://www.airlines-manager.com/network/showflight/52172581888,https://www.airlines-manager.com/aircraft/show/91198617,13:00,0:59,320,"$731,469.00","$667,437.00"
MIA - SMF,52191270909,MIA-OAK-SMF 1,737-900ER,https://www.airlines-manager.com/network/showline/46079200,https://www.airlines-manager.com/network/showflight/52191270909,https://www.airlines-manager.com/aircraft/show/91198615,23:00,10:59,320,"$731,469.00","$667,437.00"
MIA - STL,52143769079,MIA-ELP-MCI 1,737-900ER,https://www.airlines-manager.com/network/showline/46040769,https://www.airlines-manager.com/network/showflight/52143769079,https://www.airlines-manager.com/aircraft/show/91806234,1:30,7:44,320,"$391,299.00","$347,726.00"
MIA - STL,52143769080,MIA-ELP-MCI 5 B,A319-100,https://www.airlines-manager.com/network/showline/46040769,https://www.airlines-manager.com/network/showflight/52143769080,https://www.airlines-manager.com/aircraft/show/105093924,2:00,8:14,198,"$296,048.00","$265,289.00"
MIA - STL,52143769081,MIA CARGO 2,737-700,https://www.airlines-manager.com/network/showline/46040769,https://www.airlines-manager.com/network/showflight/52143769081,https://www.airlines-manager.com/aircraft/show/107527976,3:15,9:29,0,"$102,604.00","$75,263.00"
MIA - STL,52163458635,MIA-ELP-MCI 4,737-900ER,https://www.airlines-manager.com/network/showline/46040769,https://www.airlines-manager.com/network/showflight/52163458635,https://www.airlines-manager.com/aircraft/show/91806231,8:30,14:44,320,"$391,299.00","$347,726.00"
MIA - STL,52163458636,MIA-ELP-MCI 3,737-900ER,https://www.airlines-manager.com/network/showline/46040769,https://www.airlines-manager.com/network/showflight/52163458636,https://www.airlines-manager.com/aircraft/show/91806232,10:00,16:14,320,"$391,299.00","$347,726.00"
MIA - STL,52181070626,MIA-ELP-MCI 2,737-900ER,https://www.airlines-manager.com/network/showline/46040769,https://www.airlines-manager.com/network/showflight/52181070626,https://www.airlines-manager.com/aircraft/show/91806235,17:00,23:14,320,"$391,299.00","$347,726.00"
MIA - SXM,52157350129,MIA-ANU-SXM 5 S,A319-100,https://www.airlines-manager.com/network/showline/47559751,https://www.airlines-manager.com/network/showflight/52157350129,https://www.airlines-manager.com/aircraft/show/110114299,6:45,13:44,228,"$333,406.00","$304,600.00"
MIA - SXM,52172581983,MIA-ANU-SXM 3 S,A319-100,https://www.airlines-manager.com/network/showline/47559751,https://www.airlines-manager.com/network/showflight/52172581983,https://www.airlines-manager.com/aircraft/show/110114297,14:00,20:59,228,"$333,406.00","$304,600.00"
MIA - SXM,52176667122,MIA-ANU-SXM 4 S,A319-100,https://www.airlines-manager.com/network/showline/47559751,https://www.airlines-manager.com/network/showflight/52176667122,https://www.airlines-manager.com/aircraft/show/110114298,16:00,22:59,228,"$333,406.00","$304,600.00"
MIA - SXM,52185045345,MIA-ANU-SXM 1 S,A319-100,https://www.airlines-manager.com/network/showline/47559751,https://www.airlines-manager.com/network/showflight/52185045345,https://www.airlines-manager.com/aircraft/show/110114295,19:15,2:14,228,"$333,406.00","$304,600.00"
MIA - SXM,52185045346,MIA-ANU-SXM 2 S,A319-100,https://www.airlines-manager.com/network/showline/47559751,https://www.airlines-manager.com/network/showflight/52185045346,https://www.airlines-manager.com/aircraft/show/110114296,20:15,3:14,228,"$333,406.00","$304,600.00"
MIA - SXM,52191270976,MIA-ANU-SXM 6 S,A319-100,https://www.airlines-manager.com/network/showline/47559751,https://www.airlines-manager.com/network/showflight/52191270976,https://www.airlines-manager.com/aircraft/show/110114300,23:45,6:44,228,"$333,406.00","$304,600.00"
MIA - TPA,52157350010,MIA-BUR-PVD 1,A321-200,https://www.airlines-manager.com/network/showline/47218374,https://www.airlines-manager.com/network/showflight/52157350010,https://www.airlines-manager.com/aircraft/show/108834803,5:00,7:59,310,"$127,588.00","$101,572.00"
MIA - TPA,52167946210,MIA-BUR-PVD 3,A321-200,https://www.airlines-manager.com/network/showline/47218374,https://www.airlines-manager.com/network/showflight/52167946210,https://www.airlines-manager.com/aircraft/show/108834805,11:00,13:59,310,"$127,588.00","$101,572.00"
MIA - TPA,52181070642,MIA-BUR-PVD 5 B,A319-100,https://www.airlines-manager.com/network/showline/47218374,https://www.airlines-manager.com/network/showflight/52181070642,https://www.airlines-manager.com/aircraft/show/108834807,17:00,19:59,198,"$95,213.00","$74,392.00"
MIA - TPA,52181070643,MIA-BUR-PVD 2,A321-200,https://www.airlines-manager.com/network/showline/47218374,https://www.airlines-manager.com/network/showflight/52181070643,https://www.airlines-manager.com/aircraft/show/108834804,17:45,20:44,310,"$127,588.00","$101,572.00"
MIA - TPA,52191270968,MIA-BUR-PVD 4,A321-200,https://www.airlines-manager.com/network/showline/47218374,https://www.airlines-manager.com/network/showflight/52191270968,https://www.airlines-manager.com/aircraft/show/108834806,23:45,2:44,310,"$127,588.00","$101,572.00"
MIA - TUL,52143768978,MIA-FAR-TUL 2,737-900ER,https://www.airlines-manager.com/network/showline/47780432,https://www.airlines-manager.com/network/showflight/52143768978,https://www.airlines-manager.com/aircraft/show/110883160,0:45,7:29,320,"$415,780.00","$374,339.00"
MIA - TUL,52143768979,MIA-FAR-TUL 5,ERJ-175,https://www.airlines-manager.com/network/showline/47780432,https://www.airlines-manager.com/network/showflight/52143768979,https://www.airlines-manager.com/aircraft/show/87169421,3:00,9:44,112,"$196,111.00","$171,987.00"
MIA - TUL,52167946198,MIA-FAR-TUL 3,737-900ER,https://www.airlines-manager.com/network/showline/47780432,https://www.airlines-manager.com/network/showflight/52167946198,https://www.airlines-manager.com/aircraft/show/110883161,11:00,17:44,320,"$415,780.00","$374,339.00"
MIA - TUL,52176667117,MIA-FAR-TUL 4,737-900ER,https://www.airlines-manager.com/network/showline/47780432,https://www.airlines-manager.com/network/showflight/52176667117,https://www.airlines-manager.com/aircraft/show/110883162,16:00,22:44,320,"$415,780.00","$374,339.00"
MIA - TUL,52185045370,MIA-FAR-TUL 1,737-900ER,https://www.airlines-manager.com/network/showline/47780432,https://www.airlines-manager.com/network/showflight/52185045370,https://www.airlines-manager.com/aircraft/show/110883159,19:45,2:29,320,"$415,780.00","$374,339.00"
MIA - TUS,52143768949,MIA-IAD-TUS 3,A321-200,https://www.airlines-manager.com/network/showline/44372840,https://www.airlines-manager.com/network/showflight/52143768949,https://www.airlines-manager.com/aircraft/show/97556719,0:30,9:59,310,"$591,145.00","$542,540.00"
MIA - TUS,52163458710,MIA-IAD-TUS 2,A321-200,https://www.airlines-manager.com/network/showline/44372840,https://www.airlines-manager.com/network/showflight/52163458710,https://www.airlines-manager.com/aircraft/show/97556720,10:00,19:29,310,"$591,145.00","$542,540.00"
MIA - TUS,52172581844,MIA-IAD-TUS 5,A321-200,https://www.airlines-manager.com/network/showline/44372840,https://www.airlines-manager.com/network/showflight/52172581844,https://www.airlines-manager.com/aircraft/show/97556716,13:00,22:29,310,"$591,145.00","$542,540.00"
MIA - TUS,52176667095,MIA-IAD-TUS 1,A321-200,https://www.airlines-manager.com/network/showline/44372840,https://www.airlines-manager.com/network/showflight/52176667095,https://www.airlines-manager.com/aircraft/show/97556721,15:45,1:14,310,"$591,145.00","$542,540.00"
MIA - TUS,52181070782,MIA-IAD-TUS 4,A321-200,https://www.airlines-manager.com/network/showline/44372840,https://www.airlines-manager.com/network/showflight/52181070782,https://www.airlines-manager.com/aircraft/show/97556718,18:45,4:14,310,"$591,145.00","$542,540.00"
MIA - YUL,52157350116,MIA-YVR-YUL-2,757-300,https://www.airlines-manager.com/network/showline/48487803,https://www.airlines-manager.com/network/showflight/52157350116,https://www.airlines-manager.com/aircraft/show/113101225,6:30,13:59,400,"$628,064.00","$573,757.00"
MIA - YUL,52167946194,MIA-YVR-YUL-3,757-300,https://www.airlines-manager.com/network/showline/48487803,https://www.airlines-manager.com/network/showflight/52167946194,https://www.airlines-manager.com/aircraft/show/113101226,11:00,18:29,400,"$628,064.00","$573,757.00"
MIA - YUL,52176667034,MIA-YVR-YUL-4,757-300,https://www.airlines-manager.com/network/showline/48487803,https://www.airlines-manager.com/network/showflight/52176667034,https://www.airlines-manager.com/aircraft/show/113101227,15:00,22:29,400,"$628,064.00","$573,757.00"
MIA - YUL,52191270966,MIA-YVR-YUL-1,757-300,https://www.airlines-manager.com/network/showline/48487803,https://www.airlines-manager.com/network/showflight/52191270966,https://www.airlines-manager.com/aircraft/show/113101224,23:45,7:14,400,"$628,064.00","$573,757.00"
MIA - YVR,52167946195,MIA-YVR-YUL-1,757-300,https://www.airlines-manager.com/network/showline/48487816,https://www.airlines-manager.com/network/showflight/52167946195,https://www.airlines-manager.com/aircraft/show/113101224,11:00,23:44,400,"$1,044,287.00","$959,641.00"
MIA - YVR,52172581963,MIA-YVR-YUL-2,757-300,https://www.airlines-manager.com/network/showline/48487816,https://www.airlines-manager.com/network/showflight/52172581963,https://www.airlines-manager.com/aircraft/show/113101225,14:00,2:44,400,"$1,044,287.00","$959,641.00"
MIA - YVR,52181070769,MIA-YVR-YUL-3,757-300,https://www.airlines-manager.com/network/showline/48487816,https://www.airlines-manager.com/network/showflight/52181070769,https://www.airlines-manager.com/aircraft/show/113101226,18:30,7:14,400,"$1,044,287.00","$959,641.00"
MIA - YVR,52188655730,MIA-YVR-YUL-4,757-300,https://www.airlines-manager.com/network/showline/48487816,https://www.airlines-manager.com/network/showflight/52188655730,https://www.airlines-manager.com/aircraft/show/113101227,22:30,11:14,400,"$1,044,287.00","$959,641.00"
MIA - YYC,52143768848,MIA-SJC-YYC 1,737-900ER,https://www.airlines-manager.com/network/showline/46936719,https://www.airlines-manager.com/network/showflight/52143768848,https://www.airlines-manager.com/aircraft/show/107763569,0:00,11:44,320,"$729,879.00","$661,283.00"
MIA - YYC,52143768849,MIA-SJC-YYC 2,737-900ER,https://www.airlines-manager.com/network/showline/46936719,https://www.airlines-manager.com/network/showflight/52143768849,https://www.airlines-manager.com/aircraft/show/107763568,2:00,13:44,320,"$729,879.00","$661,283.00"
MIA - YYC,52143768850,MIA-SJC-YYC 3,737-900ER,https://www.airlines-manager.com/network/showline/46936719,https://www.airlines-manager.com/network/showflight/52143768850,https://www.airlines-manager.com/aircraft/show/107763567,4:00,15:44,320,"$729,879.00","$661,283.00"
MIA - YYC,52167946310,MIA-SJC-YYC 4,737-900ER,https://www.airlines-manager.com/network/showline/46936719,https://www.airlines-manager.com/network/showflight/52167946310,https://www.airlines-manager.com/aircraft/show/107763564,12:00,23:44,320,"$729,879.00","$661,283.00"
MIA - YYC,52172581989,MIA-SJC-YYC 5,737-900ER,https://www.airlines-manager.com/network/showline/46936719,https://www.airlines-manager.com/network/showflight/52172581989,https://www.airlines-manager.com/aircraft/show/107763563,14:00,1:44,320,"$729,879.00","$661,283.00"
MIA - YYZ,52143769187,MIA-BWI-YYZ 3,A321-200,https://www.airlines-manager.com/network/showline/42608081,https://www.airlines-manager.com/network/showflight/52143769187,https://www.airlines-manager.com/aircraft/show/92153441,2:45,9:44,310,"$441,057.00","$394,317.00"
MIA - YYZ,52157349969,MIA-BWI-YYZ 6 S,ERJ-175,https://www.airlines-manager.com/network/showline/42608081,https://www.airlines-manager.com/network/showflight/52157349969,https://www.airlines-manager.com/aircraft/show/92137503,4:45,11:44,136,"$191,092.00","$163,234.00"
MIA - YYZ,52163458719,MIA-BWI-YYZ 4,A321-200,https://www.airlines-manager.com/network/showline/42608081,https://www.airlines-manager.com/network/showflight/52163458719,https://www.airlines-manager.com/aircraft/show/92153442,10:00,16:59,310,"$441,057.00","$394,317.00"
MIA - YYZ,52167946319,MIA-BWI-YYZ 5,A321-200,https://www.airlines-manager.com/network/showline/42608081,https://www.airlines-manager.com/network/showflight/52167946319,https://www.airlines-manager.com/aircraft/show/92153439,12:00,18:59,310,"$441,057.00","$394,317.00"
MIA - YYZ,52176667096,MIA-BWI-YYZ 1,A321-200,https://www.airlines-manager.com/network/showline/42608081,https://www.airlines-manager.com/network/showflight/52176667096,https://www.airlines-manager.com/aircraft/show/92153443,15:45,22:44,310,"$441,057.00","$394,317.00"
MIA - YYZ,52181070792,MIA-BWI-YYZ 2,A321-200,https://www.airlines-manager.com/network/showline/42608081,https://www.airlines-manager.com/network/showflight/52181070792,https://www.airlines-manager.com/aircraft/show/92153440,18:45,1:44,309,"$438,582.00","$391,893.00"
SFO - ABQ,52163458657,SFO-MCI-OMA 5 B,A319-100,https://www.airlines-manager.com/network/showline/46129446,https://www.airlines-manager.com/network/showflight/52163458657,https://www.airlines-manager.com/aircraft/show/105223003,8:45,14:14,198,"$265,591.00","$237,461.00"
SFO - ABQ,52163458658,SFO-MCI-OMA 1,737-900ER,https://www.airlines-manager.com/network/showline/46129446,https://www.airlines-manager.com/network/showflight/52163458658,https://www.airlines-manager.com/aircraft/show/88239553,8:45,14:14,320,"$349,725.00","$309,674.00"
SFO - ABQ,52167946175,SFO-MCI-OMA 4,737-900ER,https://www.airlines-manager.com/network/showline/46129446,https://www.airlines-manager.com/network/showflight/52167946175,https://www.airlines-manager.com/aircraft/show/88239557,10:30,15:59,320,"$349,725.00","$309,674.00"
SFO - ABQ,52176667058,SFO-MCI-OMA 3,737-900ER,https://www.airlines-manager.com/network/showline/46129446,https://www.airlines-manager.com/network/showflight/52176667058,https://www.airlines-manager.com/aircraft/show/88239555,15:00,20:29,320,"$349,725.00","$309,674.00"
SFO - ABQ,52188655755,SFO-MCI-OMA 2,737-900ER,https://www.airlines-manager.com/network/showline/46129446,https://www.airlines-manager.com/network/showflight/52188655755,https://www.airlines-manager.com/aircraft/show/88239554,22:45,4:14,320,"$349,725.00","$309,674.00"
SFO - ALB,52143768927,SFO-ALB-CAK 3,A321-200,https://www.airlines-manager.com/network/showline/48344109,https://www.airlines-manager.com/network/showflight/52143768927,https://www.airlines-manager.com/aircraft/show/112650097,0:30,12:29,310,"$733,654.00","$677,490.00"
SFO - ALB,52157350036,SFO-ALB-CAK 4,A321-200,https://www.airlines-manager.com/network/showline/48344109,https://www.airlines-manager.com/network/showflight/52157350036,https://www.airlines-manager.com/aircraft/show/112650096,5:30,17:29,310,"$733,654.00","$677,490.00"
SFO - ALB,52157350037,SFO-ALB-CAK 5 B,A319-100,https://www.airlines-manager.com/network/showline/48344109,https://www.airlines-manager.com/network/showflight/52157350037,https://www.airlines-manager.com/aircraft/show/112650090,7:30,19:29,198,"$548,904.00","$503,863.00"
SFO - ALB,52172581966,SFO-ALB-CAK 1,A321-200,https://www.airlines-manager.com/network/showline/48344109,https://www.airlines-manager.com/network/showflight/52172581966,https://www.airlines-manager.com/aircraft/show/112650099,14:00,1:59,310,"$733,654.00","$677,490.00"
SFO - ALB,52181070730,SFO-ALB-CAK 2,A321-200,https://www.airlines-manager.com/network/showline/48344109,https://www.airlines-manager.com/network/showflight/52181070730,https://www.airlines-manager.com/aircraft/show/112650098,18:00,5:59,310,"$733,654.00","$677,490.00"
SFO - ANC,52143769164,SFO-BWI-ANC 4,A321neo,https://www.airlines-manager.com/network/showline/43539143,https://www.airlines-manager.com/network/showflight/52143769164,https://www.airlines-manager.com/aircraft/show/106255848,2:30,12:14,338,"$662,478.00","$614,434.00"
SFO - ANC,52143769165,SFO-BWI-ANC 5,A321neo,https://www.airlines-manager.com/network/showline/43539143,https://www.airlines-manager.com/network/showflight/52143769165,https://www.airlines-manager.com/aircraft/show/106255849,3:30,13:14,338,"$662,478.00","$614,434.00"
SFO - ANC,52185045298,SFO-BWI-ANC 1,A321neo,https://www.airlines-manager.com/network/showline/43539143,https://www.airlines-manager.com/network/showflight/52185045298,https://www.airlines-manager.com/aircraft/show/106255845,19:00,4:44,338,"$662,478.00","$614,434.00"
SFO - ANC,52185045299,SFO-BWI-ANC 2,A321neo,https://www.airlines-manager.com/network/showline/43539143,https://www.airlines-manager.com/network/showflight/52185045299,https://www.airlines-manager.com/aircraft/show/106255846,20:00,5:44,338,"$662,478.00","$614,434.00"
SFO - ANC,52188655570,SFO-BWI-ANC 3,A321neo,https://www.airlines-manager.com/network/showline/43539143,https://www.airlines-manager.com/network/showflight/52188655570,https://www.airlines-manager.com/aircraft/show/106255847,21:00,6:44,338,"$662,478.00","$614,434.00"
SFO - ATL,52157350180,SFO 84A-6 E1,777-300,https://www.airlines-manager.com/network/showline/40852416,https://www.airlines-manager.com/network/showflight/52157350180,https://www.airlines-manager.com/aircraft/show/85806724,6:45,16:29,932,"$1,616,204.00","$1,419,936.00"
SFO - ATL,52176667044,SFO-ATL-DFW S,A321-200,https://www.airlines-manager.com/network/showline/40852416,https://www.airlines-manager.com/network/showflight/52176667044,https://www.airlines-manager.com/aircraft/show/106766698,15:00,1:29,232,"$628,810.00","$548,070.00"
SFO - ATL,52181070763,SFO 84A-2 E1,777-300,https://www.airlines-manager.com/network/showline/40852416,https://www.airlines-manager.com/network/showflight/52181070763,https://www.airlines-manager.com/aircraft/show/86776211,18:30,4:14,853,"$1,518,560.00","$1,327,991.00"
SFO - ATL,52185045388,SFO-ATL-CLE,ERJ-175,https://www.airlines-manager.com/network/showline/40852416,https://www.airlines-manager.com/network/showflight/52185045388,https://www.airlines-manager.com/aircraft/show/107467212,20:00,6:29,56,"$233,331.00","$186,066.00"
SFO - AUS,52143768971,SFO-OGG-AUS 1,A321-200,https://www.airlines-manager.com/network/showline/45270795,https://www.airlines-manager.com/network/showflight/52143768971,https://www.airlines-manager.com/aircraft/show/92773481,0:45,8:44,310,"$500,912.00","$456,659.00"
SFO - AUS,52143768972,SFO-OGG-AUS 2,A321-200,https://www.airlines-manager.com/network/showline/45270795,https://www.airlines-manager.com/network/showflight/52143768972,https://www.airlines-manager.com/aircraft/show/92773480,2:45,10:44,310,"$500,912.00","$456,659.00"
SFO - AUS,52172581953,SFO-OGG-AUS 3,A321-200,https://www.airlines-manager.com/network/showline/45270795,https://www.airlines-manager.com/network/showflight/52172581953,https://www.airlines-manager.com/aircraft/show/92773479,13:30,21:29,310,"$500,912.00","$456,659.00"
SFO - AUS,52176667084,SFO-OGG-AUS 4,A321-200,https://www.airlines-manager.com/network/showline/45270795,https://www.airlines-manager.com/network/showflight/52176667084,https://www.airlines-manager.com/aircraft/show/92773478,15:30,23:29,310,"$500,912.00","$456,659.00"
SFO - AUS,52181070777,SFO-OGG-AUS 5,A321-200,https://www.airlines-manager.com/network/showline/45270795,https://www.airlines-manager.com/network/showflight/52181070777,https://www.airlines-manager.com/aircraft/show/92773477,18:30,2:29,310,"$500,912.00","$456,659.00"
SFO - BDL,52157349978,SFO-RSW-BDL 1,737-900ER,https://www.airlines-manager.com/network/showline/47540540,https://www.airlines-manager.com/network/showflight/52157349978,https://www.airlines-manager.com/aircraft/show/84915098,4:45,16:59,320,"$741,620.00","$677,502.00"
SFO - BDL,52157349979,SFO-RSW-BDL 2,737-900ER,https://www.airlines-manager.com/network/showline/47540540,https://www.airlines-manager.com/network/showflight/52157349979,https://www.airlines-manager.com/aircraft/show/84915099,6:45,18:59,320,"$741,620.00","$677,502.00"
SFO - BDL,52163458650,SFO-RSW-BDL 5,737-900ER,https://www.airlines-manager.com/network/showline/47540540,https://www.airlines-manager.com/network/showflight/52163458650,https://www.airlines-manager.com/aircraft/show/84915102,8:45,20:59,320,"$741,620.00","$677,502.00"
SFO - BDL,52181070640,SFO-RSW-BDL 3,737-900ER,https://www.airlines-manager.com/network/showline/47540540,https://www.airlines-manager.com/network/showflight/52181070640,https://www.airlines-manager.com/aircraft/show/84915100,17:00,5:14,320,"$741,620.00","$677,502.00"
SFO - BDL,52185045312,SFO-RSW-BDL 4,737-900ER,https://www.airlines-manager.com/network/showline/47540540,https://www.airlines-manager.com/network/showflight/52185045312,https://www.airlines-manager.com/aircraft/show/84915101,19:00,7:14,320,"$741,620.00","$677,502.00"
SFO - BFF,52143768995,SFO-ICT-BFF 5,ERJ-175,https://www.airlines-manager.com/network/showline/49034235,https://www.airlines-manager.com/network/showflight/52143768995,https://www.airlines-manager.com/aircraft/show/114912306,1:00,7:14,112,"$183,501.00","$161,112.00"
SFO - BFF,52143768996,SFO-ICT-BFF 4,A321-200,https://www.airlines-manager.com/network/showline/49034235,https://www.airlines-manager.com/network/showflight/52143768996,https://www.airlines-manager.com/aircraft/show/114912268,2:15,8:29,310,"$389,498.00","$355,202.00"
SFO - BFF,52163458610,SFO-ICT-BFF 3,A321-200,https://www.airlines-manager.com/network/showline/49034235,https://www.airlines-manager.com/network/showflight/52163458610,https://www.airlines-manager.com/aircraft/show/114912263,8:15,14:29,310,"$389,498.00","$355,202.00"
SFO - BFF,52176667105,SFO-ICT-BFF 2,A321-200,https://www.airlines-manager.com/network/showline/49034235,https://www.airlines-manager.com/network/showflight/52176667105,https://www.airlines-manager.com/aircraft/show/114912264,16:00,22:14,310,"$389,498.00","$355,202.00"
SFO - BFF,52191270959,SFO-ICT-BFF 1,A321-200,https://www.airlines-manager.com/network/showline/49034235,https://www.airlines-manager.com/network/showflight/52191270959,https://www.airlines-manager.com/aircraft/show/114912267,23:30,5:44,310,"$389,498.00","$355,202.00"
SFO - BNA,52143769033,SFO-BNA-CMH 4,737-900ER,https://www.airlines-manager.com/network/showline/45364406,https://www.airlines-manager.com/network/showflight/52143769033,https://www.airlines-manager.com/aircraft/show/103365580,1:15,10:59,320,"$605,443.00","$549,166.00"
SFO - BNA,52157350099,SFO-BNA-CMH 6,ERJ-175,https://www.airlines-manager.com/network/showline/45364406,https://www.airlines-manager.com/network/showflight/52157350099,https://www.airlines-manager.com/aircraft/show/82323681,6:00,15:44,112,"$284,931.00","$251,071.00"
SFO - BNA,52172581899,SFO-BNA-CMH 1,737-900ER,https://www.airlines-manager.com/network/showline/45364406,https://www.airlines-manager.com/network/showflight/52172581899,https://www.airlines-manager.com/aircraft/show/103365583,13:00,22:44,320,"$605,443.00","$549,166.00"
SFO - BNA,52176667018,SFO-BNA-CMH 2,737-900ER,https://www.airlines-manager.com/network/showline/45364406,https://www.airlines-manager.com/network/showflight/52176667018,https://www.airlines-manager.com/aircraft/show/103365582,15:00,0:44,320,"$605,443.00","$549,166.00"
SFO - BNA,52176667019,SFO-BNA-CMH 5,737-900ER,https://www.airlines-manager.com/network/showline/45364406,https://www.airlines-manager.com/network/showflight/52176667019,https://www.airlines-manager.com/aircraft/show/103365579,15:45,1:29,320,"$605,443.00","$549,166.00"
SFO - BNA,52191270941,SFO-BNA-CMH 3,737-900ER,https://www.airlines-manager.com/network/showline/45364406,https://www.airlines-manager.com/network/showflight/52191270941,https://www.airlines-manager.com/aircraft/show/103365581,23:15,8:59,320,"$605,443.00","$549,166.00"
SFO - BOI,52143769035,SFO-CLE-MKE 2,737-900ER,https://www.airlines-manager.com/network/showline/45950031,https://www.airlines-manager.com/network/showflight/52143769035,https://www.airlines-manager.com/aircraft/show/92519369,1:15,5:29,320,"$247,136.00","$216,401.00"
SFO - BOI,52163458697,SFO-CLE-MKE 1,737-900ER,https://www.airlines-manager.com/network/showline/45950031,https://www.airlines-manager.com/network/showflight/52163458697,https://www.airlines-manager.com/aircraft/show/92519368,9:45,13:59,320,"$247,136.00","$216,401.00"
SFO - BOI,52176666986,SFO-CLE-MKE 4,737-900ER,https://www.airlines-manager.com/network/showline/45950031,https://www.airlines-manager.com/network/showflight/52176666986,https://www.airlines-manager.com/aircraft/show/92519371,14:45,18:59,320,"$247,136.00","$216,401.00"
SFO - BOI,52176666987,SFO-CLE-MKE 3,737-900ER,https://www.airlines-manager.com/network/showline/45950031,https://www.airlines-manager.com/network/showflight/52176666987,https://www.airlines-manager.com/aircraft/show/92519367,16:00,20:14,320,"$247,136.00","$216,401.00"
SFO - BOS,52143768892,SFO-BOS-PHX 5,A321neo,https://www.airlines-manager.com/network/showline/40229885,https://www.airlines-manager.com/network/showflight/52143768892,https://www.airlines-manager.com/aircraft/show/104864961,0:15,12:44,338,"$837,739.00","$774,382.00"
SFO - BOS,52167946314,SFO CARGO 2,737-700,https://www.airlines-manager.com/network/showline/40229885,https://www.airlines-manager.com/network/showflight/52167946314,https://www.airlines-manager.com/aircraft/show/107573128,12:00,0:29,0,"$212,067.00","$161,164.00"
SFO - BOS,52172581890,SFO-BOS-PHX 1,A321neo,https://www.airlines-manager.com/network/showline/40229885,https://www.airlines-manager.com/network/showflight/52172581890,https://www.airlines-manager.com/aircraft/show/104901564,13:00,1:29,338,"$837,739.00","$774,382.00"
SFO - BOS,52172581891,SFO-BOS-PHX 4,A321neo,https://www.airlines-manager.com/network/showline/40229885,https://www.airlines-manager.com/network/showflight/52172581891,https://www.airlines-manager.com/aircraft/show/104870960,14:00,2:29,338,"$837,739.00","$774,382.00"
SFO - BOS,52176667102,SFO-BOS-PHX 3,A321neo,https://www.airlines-manager.com/network/showline/40229885,https://www.airlines-manager.com/network/showflight/52176667102,https://www.airlines-manager.com/aircraft/show/104874465,15:45,4:14,338,"$837,739.00","$774,382.00"
SFO - BOS,52185045426,SFO-BOS-PHX 2,A321neo,https://www.airlines-manager.com/network/showline/40229885,https://www.airlines-manager.com/network/showflight/52185045426,https://www.airlines-manager.com/aircraft/show/104901544,20:15,8:44,338,"$837,739.00","$774,382.00"
SFO - BTV,52143768838,SFO-BTV-LEX 4,A321-200,https://www.airlines-manager.com/network/showline/48344140,https://www.airlines-manager.com/network/showflight/52143768838,https://www.airlines-manager.com/aircraft/show/112650092,0:00,11:59,310,"$729,754.00","$673,769.00"
SFO - BTV,52157350079,SFO-BTV-LEX 5 B,A319-100,https://www.airlines-manager.com/network/showline/48344140,https://www.airlines-manager.com/network/showflight/52157350079,https://www.airlines-manager.com/aircraft/show/112650089,6:00,17:59,198,"$546,558.00","$501,659.00"
SFO - BTV,52172581971,SFO-BTV-LEX 1,A321-200,https://www.airlines-manager.com/network/showline/48344140,https://www.airlines-manager.com/network/showflight/52172581971,https://www.airlines-manager.com/aircraft/show/112650095,14:00,1:59,310,"$729,754.00","$673,769.00"
SFO - BTV,52181070736,SFO-BTV-LEX 2,A321-200,https://www.airlines-manager.com/network/showline/48344140,https://www.airlines-manager.com/network/showflight/52181070736,https://www.airlines-manager.com/aircraft/show/112650094,18:00,5:59,310,"$729,754.00","$673,769.00"
SFO - BTV,52185045389,SFO-BTV-LEX 3,A321-200,https://www.airlines-manager.com/network/showline/48344140,https://www.airlines-manager.com/network/showflight/52185045389,https://www.airlines-manager.com/aircraft/show/112650093,20:00,7:59,310,"$729,754.00","$673,769.00"
SFO - BUF,52143769055,SFO-PVD-BUF 1,A321-200,https://www.airlines-manager.com/network/showline/48344051,https://www.airlines-manager.com/network/showflight/52143769055,https://www.airlines-manager.com/aircraft/show/112650108,1:30,12:29,310,"$687,178.00","$633,720.00"
SFO - BUF,52157350055,SFO-PVD-BUF 2,A321-200,https://www.airlines-manager.com/network/showline/48344051,https://www.airlines-manager.com/network/showflight/52157350055,https://www.airlines-manager.com/aircraft/show/112650107,5:30,16:29,310,"$687,178.00","$633,720.00"
SFO - BUF,52157350056,SFO-PVD-BUF 3,A321-200,https://www.airlines-manager.com/network/showline/48344051,https://www.airlines-manager.com/network/showflight/52157350056,https://www.airlines-manager.com/aircraft/show/112650106,7:30,18:29,310,"$687,178.00","$633,720.00"
SFO - BUF,52172581858,SFO-PVD-BUF 4,A321-200,https://www.airlines-manager.com/network/showline/48344051,https://www.airlines-manager.com/network/showflight/52172581858,https://www.airlines-manager.com/aircraft/show/112650105,13:00,23:59,310,"$687,178.00","$633,720.00"
SFO - BUF,52181070731,SFO-PVD-BUF 5,A321-200,https://www.airlines-manager.com/network/showline/48344051,https://www.airlines-manager.com/network/showflight/52181070731,https://www.airlines-manager.com/aircraft/show/112650104,18:00,4:59,309,"$685,844.00","$632,450.00"
SFO - BUR,52143769137,SFO-SAV-JAN 1,A321-200,https://www.airlines-manager.com/network/showline/49034211,https://www.airlines-manager.com/network/showflight/52143769137,https://www.airlines-manager.com/aircraft/show/114912265,2:15,5:44,310,"$173,403.00","$150,893.00"
SFO - BUR,52143769138,SFO-SAV-JAN 4,A321-200,https://www.airlines-manager.com/network/showline/49034211,https://www.airlines-manager.com/network/showflight/52143769138,https://www.airlines-manager.com/aircraft/show/114912270,4:15,7:44,310,"$173,403.00","$150,893.00"
SFO - BUR,52167946285,SFO-SAV-JAN 5 B,A319-100,https://www.airlines-manager.com/network/showline/49034211,https://www.airlines-manager.com/network/showflight/52167946285,https://www.airlines-manager.com/aircraft/show/114917486,11:30,14:59,198,"$130,672.00","$112,650.00"
SFO - BUR,52176667085,SFO-SAV-JAN 3,A321-200,https://www.airlines-manager.com/network/showline/49034211,https://www.airlines-manager.com/network/showflight/52176667085,https://www.airlines-manager.com/aircraft/show/114912269,15:30,18:59,310,"$173,403.00","$150,893.00"
SFO - BUR,52181070644,SFO-SAV-JAN 2,A321-200,https://www.airlines-manager.com/network/showline/49034211,https://www.airlines-manager.com/network/showflight/52181070644,https://www.airlines-manager.com/aircraft/show/114912266,17:00,20:29,310,"$173,403.00","$150,893.00"
SFO - BWI,52143768938,SFO CARGO 2,737-700,https://www.airlines-manager.com/network/showline/40230066,https://www.airlines-manager.com/network/showflight/52143768938,https://www.airlines-manager.com/aircraft/show/107573128,0:30,11:59,0,"$197,290.00","$150,551.00"
SFO - BWI,52157349972,SFO-BWI-ANC 1,A321neo,https://www.airlines-manager.com/network/showline/40230066,https://www.airlines-manager.com/network/showflight/52157349972,https://www.airlines-manager.com/aircraft/show/106255845,4:45,16:14,338,"$784,984.00","$726,601.00"
SFO - BWI,52157349973,SFO-BWI-ANC 2,A321neo,https://www.airlines-manager.com/network/showline/40230066,https://www.airlines-manager.com/network/showflight/52157349973,https://www.airlines-manager.com/aircraft/show/106255846,5:45,17:14,338,"$784,984.00","$726,601.00"
SFO - BWI,52157349974,SFO-BWI-ANC 3,A321neo,https://www.airlines-manager.com/network/showline/40230066,https://www.airlines-manager.com/network/showflight/52157349974,https://www.airlines-manager.com/aircraft/show/106255847,6:45,18:14,338,"$784,984.00","$726,601.00"
SFO - BWI,52176667050,SFO-BWI-ANC 4,A321neo,https://www.airlines-manager.com/network/showline/40230066,https://www.airlines-manager.com/network/showflight/52176667050,https://www.airlines-manager.com/aircraft/show/106255848,15:00,2:29,338,"$784,984.00","$726,601.00"
SFO - BWI,52176667051,SFO-BWI-ANC 5,A321neo,https://www.airlines-manager.com/network/showline/40230066,https://www.airlines-manager.com/network/showflight/52176667051,https://www.airlines-manager.com/aircraft/show/106255849,16:00,3:29,337,"$781,013.00","$722,714.00"
SFO - CAK,52143769116,SFO-ALB-CAK 1,A321-200,https://www.airlines-manager.com/network/showline/48344107,https://www.airlines-manager.com/network/showflight/52143769116,https://www.airlines-manager.com/aircraft/show/112650099,2:00,12:29,310,"$657,790.00","$607,616.00"
SFO - CAK,52157350089,SFO-ALB-CAK 2,A321-200,https://www.airlines-manager.com/network/showline/48344107,https://www.airlines-manager.com/network/showflight/52157350089,https://www.airlines-manager.com/aircraft/show/112650098,6:00,16:29,310,"$657,790.00","$607,616.00"
SFO - CAK,52172581965,SFO-ALB-CAK 3,A321-200,https://www.airlines-manager.com/network/showline/48344107,https://www.airlines-manager.com/network/showflight/52172581965,https://www.airlines-manager.com/aircraft/show/112650097,14:00,0:29,310,"$657,790.00","$607,616.00"
SFO - CAK,52185045305,SFO-ALB-CAK 4,A321-200,https://www.airlines-manager.com/network/showline/48344107,https://www.airlines-manager.com/network/showflight/52185045305,https://www.airlines-manager.com/aircraft/show/112650096,19:00,5:29,310,"$657,790.00","$607,616.00"
SFO - CAK,52188655575,SFO-ALB-CAK 5 B,A319-100,https://www.airlines-manager.com/network/showline/48344107,https://www.airlines-manager.com/network/showflight/52188655575,https://www.airlines-manager.com/aircraft/show/112650090,21:00,7:29,198,"$494,209.00","$453,976.00"
SFO - CHS,52143769066,SFO-MHT-CHS 1,737-900ER,https://www.airlines-manager.com/network/showline/49035983,https://www.airlines-manager.com/network/showflight/52143769066,https://www.airlines-manager.com/aircraft/show/114917465,1:30,12:44,320,"$701,518.00","$642,369.00"
SFO - CHS,52157350062,SFO-MHT-CHS 2,737-900ER,https://www.airlines-manager.com/network/showline/49035983,https://www.airlines-manager.com/network/showflight/52157350062,https://www.airlines-manager.com/aircraft/show/114917464,5:30,16:44,320,"$701,518.00","$642,369.00"
SFO - CHS,52163458640,SFO-MHT-CHS 5 B,A319-100,https://www.airlines-manager.com/network/showline/49035983,https://www.airlines-manager.com/network/showflight/52163458640,https://www.airlines-manager.com/aircraft/show/114912262,8:30,19:59,198,"$529,108.00","$485,851.00"
SFO - CHS,52172581849,SFO-MHT-CHS 3,737-900ER,https://www.airlines-manager.com/network/showline/49035983,https://www.airlines-manager.com/network/showflight/52172581849,https://www.airlines-manager.com/aircraft/show/114917463,13:00,0:14,320,"$701,518.00","$642,369.00"
SFO - CHS,52181070621,SFO-MHT-CHS 4,737-900ER,https://www.airlines-manager.com/network/showline/49035983,https://www.airlines-manager.com/network/showflight/52181070621,https://www.airlines-manager.com/aircraft/show/114266973,17:00,4:14,320,"$701,518.00","$642,369.00"
SFO - CLE,52157350033,SFO-CLE-MKE 2,737-900ER,https://www.airlines-manager.com/network/showline/45959453,https://www.airlines-manager.com/network/showflight/52157350033,https://www.airlines-manager.com/aircraft/show/92519369,5:30,15:59,320,"$650,884.00","$593,165.00"
SFO - CLE,52157350034,SFO-ATL-CLE,ERJ-175,https://www.airlines-manager.com/network/showline/45959453,https://www.airlines-manager.com/network/showflight/52157350034,https://www.airlines-manager.com/aircraft/show/107467212,6:30,16:59,112,"$305,841.00","$270,700.00"
SFO - CLE,52157350035,SFO-CLE-MKE 5,737-900ER,https://www.airlines-manager.com/network/showline/45959453,https://www.airlines-manager.com/network/showflight/52157350035,https://www.airlines-manager.com/aircraft/show/92519370,7:30,17:59,320,"$650,884.00","$593,165.00"
SFO - CLE,52172582006,SFO-CLE-MKE 1,737-900ER,https://www.airlines-manager.com/network/showline/45959453,https://www.airlines-manager.com/network/showflight/52172582006,https://www.airlines-manager.com/aircraft/show/92519368,14:00,0:29,320,"$650,884.00","$593,165.00"
SFO - CLE,52185045316,SFO-CLE-MKE 4,737-900ER,https://www.airlines-manager.com/network/showline/45959453,https://www.airlines-manager.com/network/showflight/52185045316,https://www.airlines-manager.com/aircraft/show/92519371,19:00,5:29,320,"$650,884.00","$593,165.00"
SFO - CLE,52185045317,SFO-CLE-MKE 3,737-900ER,https://www.airlines-manager.com/network/showline/45959453,https://www.airlines-manager.com/network/showflight/52185045317,https://www.airlines-manager.com/aircraft/show/92519367,20:15,6:44,319,"$649,617.00","$591,956.00"
SFO - CLT,52143768833,SFO-IAD-CLT 3,757-300,https://www.airlines-manager.com/network/showline/43894395,https://www.airlines-manager.com/network/showflight/52143768833,https://www.airlines-manager.com/aircraft/show/96135563,0:00,10:44,400,"$888,985.00","$809,020.00"
SFO - CLT,52157350103,SFO-IAD-CLT 4,757-300,https://www.airlines-manager.com/network/showline/43894395,https://www.airlines-manager.com/network/showflight/52157350103,https://www.airlines-manager.com/aircraft/show/96135562,6:00,16:44,400,"$888,985.00","$809,020.00"
SFO - CLT,52172581941,SFO-IAD-CLT 1,757-300,https://www.airlines-manager.com/network/showline/43894395,https://www.airlines-manager.com/network/showflight/52172581941,https://www.airlines-manager.com/aircraft/show/96135565,13:15,23:59,400,"$888,985.00","$809,020.00"
SFO - CLT,52176667071,SFO-IAD-CLT 5,757-300,https://www.airlines-manager.com/network/showline/43894395,https://www.airlines-manager.com/network/showflight/52176667071,https://www.airlines-manager.com/aircraft/show/96135561,15:15,1:59,400,"$888,985.00","$809,020.00"
SFO - CLT,52181070670,SFO-IAD-CLT 2,757-300,https://www.airlines-manager.com/network/showline/43894395,https://www.airlines-manager.com/network/showflight/52181070670,https://www.airlines-manager.com/aircraft/show/96135564,17:15,3:59,400,"$888,985.00","$809,020.00"
SFO - CMH,52143768982,SFO-BNA-CMH 2,737-900ER,https://www.airlines-manager.com/network/showline/45364394,https://www.airlines-manager.com/network/showflight/52143768982,https://www.airlines-manager.com/aircraft/show/103365582,0:45,10:59,320,"$635,841.00","$578,544.00"
SFO - CMH,52157350063,SFO-BNA-CMH 5,737-900ER,https://www.airlines-manager.com/network/showline/45364394,https://www.airlines-manager.com/network/showflight/52157350063,https://www.airlines-manager.com/aircraft/show/103365579,5:30,15:44,320,"$635,841.00","$578,544.00"
SFO - CMH,52172581898,SFO-BNA-CMH 3,737-900ER,https://www.airlines-manager.com/network/showline/45364394,https://www.airlines-manager.com/network/showflight/52172581898,https://www.airlines-manager.com/aircraft/show/103365581,13:00,23:14,320,"$635,841.00","$578,544.00"
SFO - CMH,52176667022,SFO-BNA-CMH 4,737-900ER,https://www.airlines-manager.com/network/showline/45364394,https://www.airlines-manager.com/network/showflight/52176667022,https://www.airlines-manager.com/aircraft/show/103365580,15:00,1:14,320,"$635,841.00","$578,544.00"
SFO - CMH,52176667023,SFO-BNA-CMH 6,ERJ-175,https://www.airlines-manager.com/network/showline/45364394,https://www.airlines-manager.com/network/showflight/52176667023,https://www.airlines-manager.com/aircraft/show/82323681,15:45,1:59,112,"$299,371.00","$264,561.00"
SFO - CMH,52188655748,SFO-BNA-CMH 1,737-900ER,https://www.airlines-manager.com/network/showline/45364394,https://www.airlines-manager.com/network/showflight/52188655748,https://www.airlines-manager.com/aircraft/show/103365583,22:45,8:59,320,"$635,841.00","$578,544.00"
SFO - CVG,52157350011,SFO-IND-CVG 3,A321-200,https://www.airlines-manager.com/network/showline/44892288,https://www.airlines-manager.com/network/showflight/52157350011,https://www.airlines-manager.com/aircraft/show/99316504,5:00,14:59,310,"$627,103.00","$574,076.00"
SFO - CVG,52157350012,SFO-IND-CVG 5,A321-200,https://www.airlines-manager.com/network/showline/44892288,https://www.airlines-manager.com/network/showflight/52157350012,https://www.airlines-manager.com/aircraft/show/99316502,7:00,16:59,310,"$627,103.00","$574,076.00"
SFO - CVG,52172581910,SFO-IND-CVG 2,A321-200,https://www.airlines-manager.com/network/showline/44892288,https://www.airlines-manager.com/network/showflight/52172581910,https://www.airlines-manager.com/aircraft/show/99316505,13:00,22:59,310,"$627,103.00","$574,076.00"
SFO - CVG,52176667004,SFO-IND-CVG 4,A321-200,https://www.airlines-manager.com/network/showline/44892288,https://www.airlines-manager.com/network/showflight/52176667004,https://www.airlines-manager.com/aircraft/show/99316503,15:00,0:59,310,"$627,103.00","$574,076.00"
SFO - CVG,52181070658,SFO-IND-CVG 6,ERJ-175,https://www.airlines-manager.com/network/showline/44892288,https://www.airlines-manager.com/network/showflight/52181070658,https://www.airlines-manager.com/aircraft/show/99174346,17:00,2:59,112,"$294,049.00","$258,686.00"
SFO - CVG,52188655741,SFO-IND-CVG 1,A321-200,https://www.airlines-manager.com/network/showline/44892288,https://www.airlines-manager.com/network/showflight/52188655741,https://www.airlines-manager.com/aircraft/show/99316506,22:45,8:44,310,"$627,103.00","$574,076.00"
SFO - DEL,52143768834,SFO 168B-1 B,747-400,https://www.airlines-manager.com/network/showline/41242837,https://www.airlines-manager.com/network/showflight/52143768834,https://www.airlines-manager.com/aircraft/show/86832727,0:00,5:29,1046,"$5,780,645.00","$5,362,076.00"
SFO - DEL,52143768835,SFO 168A-1 B,747-400,https://www.airlines-manager.com/network/showline/41242837,https://www.airlines-manager.com/network/showflight/52143768835,https://www.airlines-manager.com/aircraft/show/86969602,2:00,7:29,1046,"$5,780,645.00","$5,362,076.00"
SFO - DEN,52143768880,SFO-IAH-MEX 5,757-300,https://www.airlines-manager.com/network/showline/40738405,https://www.airlines-manager.com/network/showflight/52143768880,https://www.airlines-manager.com/aircraft/show/101045335,0:15,5:59,400,"$472,973.00","$405,009.00"
SFO - DEN,52157350121,SFO-IAH-MEX 1,757-300,https://www.airlines-manager.com/network/showline/40738405,https://www.airlines-manager.com/network/showflight/52157350121,https://www.airlines-manager.com/aircraft/show/101045339,6:30,12:14,400,"$472,973.00","$405,009.00"
SFO - DEN,52163458626,SFO-IAH-MEX 4,757-300,https://www.airlines-manager.com/network/showline/40738405,https://www.airlines-manager.com/network/showflight/52163458626,https://www.airlines-manager.com/aircraft/show/101045336,8:30,14:14,400,"$472,973.00","$405,009.00"
SFO - DEN,52172581905,SFO-IAH-MEX 3,757-300,https://www.airlines-manager.com/network/showline/40738405,https://www.airlines-manager.com/network/showflight/52172581905,https://www.airlines-manager.com/aircraft/show/101045337,13:00,18:44,400,"$472,973.00","$405,009.00"
SFO - DEN,52188655708,SFO-IAH-MEX 2,757-300,https://www.airlines-manager.com/network/showline/40738405,https://www.airlines-manager.com/network/showflight/52188655708,https://www.airlines-manager.com/aircraft/show/101045338,22:15,3:59,376,"$456,272.00","$388,909.00"
SFO - DFW,52143769058,SFO-ATL-DFW S,A321-200,https://www.airlines-manager.com/network/showline/40852421,https://www.airlines-manager.com/network/showflight/52143769058,https://www.airlines-manager.com/aircraft/show/106766698,1:30,9:14,232,"$480,945.00","$419,712.00"
SFO - DFW,52176667158,SFO 84A-6 E1,777-300,https://www.airlines-manager.com/network/showline/40852421,https://www.airlines-manager.com/network/showflight/52176667158,https://www.airlines-manager.com/aircraft/show/85806724,16:30,23:59,932,"$1,227,121.00","$1,082,026.00"
SFO - DFW,52191270935,SFO 84A-5 E1,777-300,https://www.airlines-manager.com/network/showline/40852421,https://www.airlines-manager.com/network/showflight/52191270935,https://www.airlines-manager.com/aircraft/show/85537213,23:15,6:44,737,"$1,045,407.00","$909,944.00"
SFO - DSM,52143769277,SFO-TUL-DSM 3,737-900ER,https://www.airlines-manager.com/network/showline/47065667,https://www.airlines-manager.com/network/showflight/52143769277,https://www.airlines-manager.com/aircraft/show/108410858,4:30,12:29,320,"$506,454.00","$460,616.00"
SFO - DSM,52172581870,SFO-TUL-DSM 2,737-900ER,https://www.airlines-manager.com/network/showline/47065667,https://www.airlines-manager.com/network/showflight/52172581870,https://www.airlines-manager.com/aircraft/show/108410857,13:00,20:59,320,"$506,454.00","$460,616.00"
SFO - DSM,52176667041,SFO-TUL-DSM 5,ERJ-175,https://www.airlines-manager.com/network/showline/47065667,https://www.airlines-manager.com/network/showflight/52176667041,https://www.airlines-manager.com/aircraft/show/108466264,15:00,23:14,112,"$239,910.00","$212,489.00"
SFO - DSM,52188655742,SFO-TUL-DSM 1,737-900ER,https://www.airlines-manager.com/network/showline/47065667,https://www.airlines-manager.com/network/showflight/52188655742,https://www.airlines-manager.com/aircraft/show/108410856,22:45,6:44,320,"$506,454.00","$460,616.00"
SFO - DSM,52191270956,SFO-TUL-DSM 4,737-900ER,https://www.airlines-manager.com/network/showline/47065667,https://www.airlines-manager.com/network/showflight/52191270956,https://www.airlines-manager.com/aircraft/show/108410859,23:30,7:29,320,"$506,454.00","$460,616.00"
SFO - DTW,52143769282,SFO-ORD-DTW 4,757-300,https://www.airlines-manager.com/network/showline/42739130,https://www.airlines-manager.com/network/showflight/52143769282,https://www.airlines-manager.com/aircraft/show/101045331,4:30,14:29,400,"$819,471.00","$744,348.00"
SFO - DTW,52157350016,SFO-ORD-DTW 3,757-300,https://www.airlines-manager.com/network/showline/42739130,https://www.airlines-manager.com/network/showflight/52157350016,https://www.airlines-manager.com/aircraft/show/101045332,5:00,14:59,400,"$819,471.00","$744,348.00"
SFO - DTW,52176666995,SFO-ORD-DTW 2,757-300,https://www.airlines-manager.com/network/showline/42739130,https://www.airlines-manager.com/network/showflight/52176666995,https://www.airlines-manager.com/aircraft/show/101045333,15:00,0:59,400,"$819,471.00","$744,348.00"
SFO - DTW,52181070622,SFO-ORD-DTW 5,757-300,https://www.airlines-manager.com/network/showline/42739130,https://www.airlines-manager.com/network/showflight/52181070622,https://www.airlines-manager.com/aircraft/show/101045330,17:00,2:59,400,"$819,471.00","$744,348.00"
SFO - DTW,52188655677,SFO-ORD-DTW 1,757-300,https://www.airlines-manager.com/network/showline/42739130,https://www.airlines-manager.com/network/showflight/52188655677,https://www.airlines-manager.com/aircraft/show/101045334,22:00,7:59,400,"$819,471.00","$744,348.00"
SFO - DXB,52157350031,SFO 168B-2 B,747-400,https://www.airlines-manager.com/network/showline/41150917,https://www.airlines-manager.com/network/showflight/52157350031,https://www.airlines-manager.com/aircraft/show/87566901,5:30,12:29,1046,"$5,984,768.00","$5,519,580.00"
SFO - DXB,52157350032,SFO 168A-2 B,747-400,https://www.airlines-manager.com/network/showline/41150917,https://www.airlines-manager.com/network/showflight/52157350032,https://www.airlines-manager.com/aircraft/show/86596991,7:30,14:29,1045,"$5,980,703.00","$5,515,766.00"
SFO - ELP,52157350072,SFO-ICT-BFF 1,A321-200,https://www.airlines-manager.com/network/showline/49034229,https://www.airlines-manager.com/network/showflight/52157350072,https://www.airlines-manager.com/aircraft/show/114912267,5:45,11:44,310,"$374,636.00","$339,864.00"
SFO - ELP,52157350073,SFO-ICT-BFF 5,ERJ-175,https://www.airlines-manager.com/network/showline/49034229,https://www.airlines-manager.com/network/showflight/52157350073,https://www.airlines-manager.com/aircraft/show/114912306,7:15,13:14,112,"$177,417.00","$154,823.00"
SFO - ELP,52163458625,SFO-ICT-BFF 4,A321-200,https://www.airlines-manager.com/network/showline/49034229,https://www.airlines-manager.com/network/showflight/52163458625,https://www.airlines-manager.com/aircraft/show/114912268,8:30,14:29,310,"$374,636.00","$339,864.00"
SFO - ELP,52176667057,SFO-ICT-BFF 3,A321-200,https://www.airlines-manager.com/network/showline/49034229,https://www.airlines-manager.com/network/showflight/52176667057,https://www.airlines-manager.com/aircraft/show/114912263,15:00,20:59,310,"$374,636.00","$339,864.00"
SFO - ELP,52188655699,SFO-ICT-BFF 2,A321-200,https://www.airlines-manager.com/network/showline/49034229,https://www.airlines-manager.com/network/showflight/52188655699,https://www.airlines-manager.com/aircraft/show/114912264,22:15,4:14,310,"$374,636.00","$339,864.00"
SFO - FAT,52143769111,SFO-TUL-DSM 2,737-900ER,https://www.airlines-manager.com/network/showline/47065660,https://www.airlines-manager.com/network/showflight/52143769111,https://www.airlines-manager.com/aircraft/show/108410857,2:00,4:44,320,"$95,269.00","$71,073.00"
SFO - FAT,52167946294,SFO-TUL-DSM 1,737-900ER,https://www.airlines-manager.com/network/showline/47065660,https://www.airlines-manager.com/network/showflight/52167946294,https://www.airlines-manager.com/aircraft/show/108410856,11:45,14:29,320,"$95,269.00","$71,073.00"
SFO - FAT,52172581868,SFO-TUL-DSM 4,737-900ER,https://www.airlines-manager.com/network/showline/47065660,https://www.airlines-manager.com/network/showflight/52172581868,https://www.airlines-manager.com/aircraft/show/108410859,13:00,15:44,320,"$95,269.00","$71,073.00"
SFO - FAT,52181070741,SFO-TUL-DSM 3,737-900ER,https://www.airlines-manager.com/network/showline/47065660,https://www.airlines-manager.com/network/showflight/52181070741,https://www.airlines-manager.com/aircraft/show/108410858,18:00,20:44,320,"$95,269.00","$71,073.00"
SFO - FAT,52191270940,SFO-TUL-DSM 5,ERJ-175,https://www.airlines-manager.com/network/showline/47065660,https://www.airlines-manager.com/network/showflight/52191270940,https://www.airlines-manager.com/aircraft/show/108466264,23:15,1:59,67,"$33,432.00","$21,181.00"
SFO - FLL,52143768886,SFO-FLL-TPA 2,737-900ER,https://www.airlines-manager.com/network/showline/44448463,https://www.airlines-manager.com/network/showflight/52143768886,https://www.airlines-manager.com/aircraft/show/97955543,0:15,12:14,320,"$736,189.00","$668,161.00"
SFO - FLL,52143768887,SFO-FLL-TPA 4,737-900ER,https://www.airlines-manager.com/network/showline/44448463,https://www.airlines-manager.com/network/showflight/52143768887,https://www.airlines-manager.com/aircraft/show/97955541,4:15,16:14,320,"$736,189.00","$668,161.00"
SFO - FLL,52157350205,SFO-FLL-TPA 6 B,A319-100,https://www.airlines-manager.com/network/showline/44448463,https://www.airlines-manager.com/network/showflight/52157350205,https://www.airlines-manager.com/aircraft/show/97900729,7:30,19:44,198,"$553,643.00","$504,164.00"
SFO - FLL,52172581920,SFO-FLL-TPA 1,737-900ER,https://www.airlines-manager.com/network/showline/44448463,https://www.airlines-manager.com/network/showflight/52172581920,https://www.airlines-manager.com/aircraft/show/97955544,13:00,0:59,320,"$736,189.00","$668,161.00"
SFO - FLL,52181070654,SFO-FLL-TPA 3,737-900ER,https://www.airlines-manager.com/network/showline/44448463,https://www.airlines-manager.com/network/showflight/52181070654,https://www.airlines-manager.com/aircraft/show/97955542,17:00,4:59,320,"$736,189.00","$668,161.00"
SFO - FLL,52185045414,SFO-FLL-TPA 5,737-900ER,https://www.airlines-manager.com/network/showline/44448463,https://www.airlines-manager.com/network/showflight/52185045414,https://www.airlines-manager.com/aircraft/show/97955540,20:00,7:59,320,"$736,189.00","$668,161.00"
SFO - FSD,52143768932,SFO-OKC-FSD 1,737-900ER,https://www.airlines-manager.com/network/showline/46719662,https://www.airlines-manager.com/network/showflight/52143768932,https://www.airlines-manager.com/aircraft/show/107160378,0:30,7:59,320,"$469,686.00","$426,404.00"
SFO - FSD,52143768933,SFO-OKC-FSD 5,ERJ-175,https://www.airlines-manager.com/network/showline/46719662,https://www.airlines-manager.com/network/showflight/52143768933,https://www.airlines-manager.com/aircraft/show/107132310,2:00,9:29,112,"$222,328.00","$196,609.00"
SFO - FSD,52143768934,SFO-OKC-FSD 4,737-900ER,https://www.airlines-manager.com/network/showline/46719662,https://www.airlines-manager.com/network/showflight/52143768934,https://www.airlines-manager.com/aircraft/show/107160381,3:00,10:29,320,"$469,686.00","$426,404.00"
SFO - FSD,52163458578,SFO-OKC-FSD 3,737-900ER,https://www.airlines-manager.com/network/showline/46719662,https://www.airlines-manager.com/network/showflight/52163458578,https://www.airlines-manager.com/aircraft/show/107160380,8:00,15:29,320,"$469,686.00","$426,404.00"
SFO - FSD,52176667130,SFO-OKC-FSD 2,737-900ER,https://www.airlines-manager.com/network/showline/46719662,https://www.airlines-manager.com/network/showflight/52176667130,https://www.airlines-manager.com/aircraft/show/107160379,16:00,23:29,284,"$437,153.00","$395,227.00"
SFO - HKG,52188655582,SFO 168B-6 B,747-400,https://www.airlines-manager.com/network/showline/40783037,https://www.airlines-manager.com/network/showflight/52188655582,https://www.airlines-manager.com/aircraft/show/87083947,21:15,23:59,1046,"$5,254,397.00","$4,855,808.00"
SFO - HKG,52191270931,SFO 168A-6 B,747-400,https://www.airlines-manager.com/network/showline/40783037,https://www.airlines-manager.com/network/showflight/52191270931,https://www.airlines-manager.com/aircraft/show/88032836,23:15,1:59,1046,"$5,254,397.00","$4,855,808.00"
SFO - IAD,52143768821,SFO-IAD-CLT 1,757-300,https://www.airlines-manager.com/network/showline/43924778,https://www.airlines-manager.com/network/showflight/52143768821,https://www.airlines-manager.com/aircraft/show/96135565,0:00,11:14,400,"$907,805.00","$829,787.00"
SFO - IAD,52143768822,SFO-IAD-CLT 5,757-300,https://www.airlines-manager.com/network/showline/43924778,https://www.airlines-manager.com/network/showflight/52143768822,https://www.airlines-manager.com/aircraft/show/96135561,4:00,15:14,400,"$907,805.00","$829,787.00"
SFO - IAD,52157350090,SFO-IAD-CLT 2,757-300,https://www.airlines-manager.com/network/showline/43924778,https://www.airlines-manager.com/network/showflight/52157350090,https://www.airlines-manager.com/aircraft/show/96135564,6:00,17:14,400,"$907,805.00","$829,787.00"
SFO - IAD,52172581843,SFO-IAD-CLT 3,757-300,https://www.airlines-manager.com/network/showline/43924778,https://www.airlines-manager.com/network/showflight/52172581843,https://www.airlines-manager.com/aircraft/show/96135563,12:45,23:59,400,"$907,805.00","$829,787.00"
SFO - IAD,52181070614,SFO-IAD-CLT 4,757-300,https://www.airlines-manager.com/network/showline/43924778,https://www.airlines-manager.com/network/showflight/52181070614,https://www.airlines-manager.com/aircraft/show/96135562,16:45,3:59,400,"$907,805.00","$829,787.00"
SFO - IAH,52157349967,SFO-IAH-MEX 2,757-300,https://www.airlines-manager.com/network/showline/40762091,https://www.airlines-manager.com/network/showflight/52157349967,https://www.airlines-manager.com/aircraft/show/101045338,4:45,12:59,400,"$691,401.00","$621,593.00"
SFO - IAH,52157349968,SFO-IAH-MEX 5,757-300,https://www.airlines-manager.com/network/showline/40762091,https://www.airlines-manager.com/network/showflight/52157349968,https://www.airlines-manager.com/aircraft/show/101045335,6:45,14:59,400,"$691,401.00","$621,593.00"
SFO - IAH,52172581907,SFO-IAH-MEX 1,757-300,https://www.airlines-manager.com/network/showline/40762091,https://www.airlines-manager.com/network/showflight/52172581907,https://www.airlines-manager.com/aircraft/show/101045339,13:00,21:14,400,"$691,401.00","$621,593.00"
SFO - IAH,52176666997,SFO-IAH-MEX 4,757-300,https://www.airlines-manager.com/network/showline/40762091,https://www.airlines-manager.com/network/showflight/52176666997,https://www.airlines-manager.com/aircraft/show/101045336,15:00,23:14,400,"$691,401.00","$621,593.00"
SFO - IAH,52185045364,SFO-IAH-MEX 3,757-300,https://www.airlines-manager.com/network/showline/40762091,https://www.airlines-manager.com/network/showflight/52185045364,https://www.airlines-manager.com/aircraft/show/101045337,19:30,3:44,400,"$691,401.00","$621,593.00"
SFO - ICN,52143768897,SFO 84A-5 E1,777-300,https://www.airlines-manager.com/network/showline/40609625,https://www.airlines-manager.com/network/showflight/52143768897,https://www.airlines-manager.com/aircraft/show/85537213,0:15,22:44,932,"$3,803,342.00","$3,453,319.00"
SFO - ICN,52185045396,SFO 84A-1 E1,777-300,https://www.airlines-manager.com/network/showline/40609625,https://www.airlines-manager.com/network/showflight/52185045396,https://www.airlines-manager.com/aircraft/show/86776212,20:00,18:29,932,"$3,803,342.00","$3,453,319.00"
SFO - ICT,52143768968,SFO-ICT-BFF 3,A321-200,https://www.airlines-manager.com/network/showline/49034224,https://www.airlines-manager.com/network/showflight/52143768968,https://www.airlines-manager.com/aircraft/show/114912263,0:45,8:14,310,"$467,131.00","$427,996.00"
SFO - ICT,52163458580,SFO-ICT-BFF 2,A321-200,https://www.airlines-manager.com/network/showline/49034224,https://www.airlines-manager.com/network/showflight/52163458580,https://www.airlines-manager.com/aircraft/show/114912264,8:00,15:29,310,"$467,131.00","$427,996.00"
SFO - ICT,52176667106,SFO-ICT-BFF 1,A321-200,https://www.airlines-manager.com/network/showline/49034224,https://www.airlines-manager.com/network/showflight/52176667106,https://www.airlines-manager.com/aircraft/show/114912267,16:00,23:29,310,"$467,131.00","$427,996.00"
SFO - ICT,52181070680,SFO-ICT-BFF 5,ERJ-175,https://www.airlines-manager.com/network/showline/49034224,https://www.airlines-manager.com/network/showflight/52181070680,https://www.airlines-manager.com/aircraft/show/114912306,17:30,0:59,112,"$220,541.00","$194,685.00"
SFO - ICT,52181070681,SFO-ICT-BFF 4,A321-200,https://www.airlines-manager.com/network/showline/49034224,https://www.airlines-manager.com/network/showflight/52181070681,https://www.airlines-manager.com/aircraft/show/114912268,18:45,2:14,310,"$467,131.00","$427,996.00"
SFO - IND,52157350023,SFO-IND-CVG 4,A321-200,https://www.airlines-manager.com/network/showline/44876694,https://www.airlines-manager.com/network/showflight/52157350023,https://www.airlines-manager.com/aircraft/show/99316503,5:15,14:59,310,"$602,840.00","$552,790.00"
SFO - IND,52157350024,SFO-IND-CVG 6,ERJ-175,https://www.airlines-manager.com/network/showline/44876694,https://www.airlines-manager.com/network/showflight/52157350024,https://www.airlines-manager.com/aircraft/show/99174346,7:15,16:59,112,"$283,025.00","$249,611.00"
SFO - IND,52172581911,SFO-IND-CVG 1,A321-200,https://www.airlines-manager.com/network/showline/44876694,https://www.airlines-manager.com/network/showflight/52172581911,https://www.airlines-manager.com/aircraft/show/99316506,13:00,22:44,310,"$602,840.00","$552,790.00"
SFO - IND,52176667005,SFO-IND-CVG 3,A321-200,https://www.airlines-manager.com/network/showline/44876694,https://www.airlines-manager.com/network/showflight/52176667005,https://www.airlines-manager.com/aircraft/show/99316504,15:00,0:44,310,"$602,840.00","$552,790.00"
SFO - IND,52181070657,SFO-IND-CVG 5,A321-200,https://www.airlines-manager.com/network/showline/44876694,https://www.airlines-manager.com/network/showflight/52181070657,https://www.airlines-manager.com/aircraft/show/99316502,17:00,2:44,310,"$602,840.00","$552,790.00"
SFO - IND,52191270923,SFO-IND-CVG 2,A321-200,https://www.airlines-manager.com/network/showline/44876694,https://www.airlines-manager.com/network/showflight/52191270923,https://www.airlines-manager.com/aircraft/show/99316505,23:00,8:44,310,"$602,840.00","$552,790.00"
SFO - JAN,52143769132,SFO-SAV-JAN 5 B,A319-100,https://www.airlines-manager.com/network/showline/49034208,https://www.airlines-manager.com/network/showflight/52143769132,https://www.airlines-manager.com/aircraft/show/114917486,2:15,11:29,198,"$437,507.00","$401,062.00"
SFO - JAN,52157350105,SFO-SAV-JAN 3,A321-200,https://www.airlines-manager.com/network/showline/49034208,https://www.airlines-manager.com/network/showflight/52157350105,https://www.airlines-manager.com/aircraft/show/114912269,6:15,15:29,310,"$581,237.00","$535,780.00"
SFO - JAN,52157350106,SFO-SAV-JAN 2,A321-200,https://www.airlines-manager.com/network/showline/49034208,https://www.airlines-manager.com/network/showflight/52157350106,https://www.airlines-manager.com/aircraft/show/114912266,7:45,16:59,310,"$581,237.00","$535,780.00"
SFO - JAN,52181070620,SFO-SAV-JAN 1,A321-200,https://www.airlines-manager.com/network/showline/49034208,https://www.airlines-manager.com/network/showflight/52181070620,https://www.airlines-manager.com/aircraft/show/114912265,17:00,2:14,310,"$581,237.00","$535,780.00"
SFO - JAN,52185045323,SFO-SAV-JAN 4,A321-200,https://www.airlines-manager.com/network/showline/49034208,https://www.airlines-manager.com/network/showflight/52185045323,https://www.airlines-manager.com/aircraft/show/114912270,19:00,4:14,310,"$581,237.00","$535,780.00"
SFO - JAX,52157350086,SFO-JAX-SAT 5,A321-200,https://www.airlines-manager.com/network/showline/45303043,https://www.airlines-manager.com/network/showflight/52157350086,https://www.airlines-manager.com/aircraft/show/86377315,6:00,17:14,310,"$701,370.00","$646,301.00"
SFO - JAX,52172581904,SFO-JAX-SAT 1,A321-200,https://www.airlines-manager.com/network/showline/45303043,https://www.airlines-manager.com/network/showflight/52172581904,https://www.airlines-manager.com/aircraft/show/86375568,13:00,0:14,310,"$701,370.00","$646,301.00"
SFO - JAX,52176667021,SFO-JAX-SAT 2,A321-200,https://www.airlines-manager.com/network/showline/45303043,https://www.airlines-manager.com/network/showflight/52176667021,https://www.airlines-manager.com/aircraft/show/86371267,15:00,2:14,310,"$701,370.00","$646,301.00"
SFO - JAX,52188655539,SFO-JAX-SAT 3,A321-200,https://www.airlines-manager.com/network/showline/45303043,https://www.airlines-manager.com/network/showflight/52188655539,https://www.airlines-manager.com/aircraft/show/86385102,21:00,8:14,310,"$701,370.00","$646,301.00"
SFO - JAX,52191270921,SFO-JAX-SAT 4,A321-200,https://www.airlines-manager.com/network/showline/45303043,https://www.airlines-manager.com/network/showflight/52191270921,https://www.airlines-manager.com/aircraft/show/86378760,23:00,10:14,310,"$701,370.00","$646,301.00"
SFO - JFK,52143769003,SFO-MIA-JFK 4,757-300,https://www.airlines-manager.com/network/showline/40228411,https://www.airlines-manager.com/network/showflight/52143769003,https://www.airlines-manager.com/aircraft/show/89233034,1:00,12:59,400,"$960,708.00","$862,210.00"
SFO - JFK,52157350189,SFO-MIA-JFK 5,757-300,https://www.airlines-manager.com/network/showline/40228411,https://www.airlines-manager.com/network/showflight/52157350189,https://www.airlines-manager.com/aircraft/show/89233035,7:00,18:59,400,"$960,708.00","$862,210.00"
SFO - JFK,52172581936,SFO-MIA-JFK 1,757-300,https://www.airlines-manager.com/network/showline/40228411,https://www.airlines-manager.com/network/showflight/52172581936,https://www.airlines-manager.com/aircraft/show/89233032,13:00,0:59,400,"$960,708.00","$862,210.00"
SFO - JFK,52176667104,SFO-MIA-JFK 2,757-300,https://www.airlines-manager.com/network/showline/40228411,https://www.airlines-manager.com/network/showflight/52176667104,https://www.airlines-manager.com/aircraft/show/84622093,16:00,3:59,400,"$960,708.00","$862,210.00"
SFO - JFK,52185045314,SFO-MIA-JFK 3,757-300,https://www.airlines-manager.com/network/showline/40228411,https://www.airlines-manager.com/network/showflight/52185045314,https://www.airlines-manager.com/aircraft/show/89233031,19:00,6:59,399,"$959,240.00","$860,809.00"
SFO - KOA,52143769177,SFO-KOA-PWM 3,A321-200,https://www.airlines-manager.com/network/showline/48344087,https://www.airlines-manager.com/network/showflight/52143769177,https://www.airlines-manager.com/aircraft/show/112650101,2:45,13:59,310,"$702,675.00","$647,803.00"
SFO - KOA,52157349980,SFO-KOA-PWM 4,A321-200,https://www.airlines-manager.com/network/showline/48344087,https://www.airlines-manager.com/network/showflight/52157349980,https://www.airlines-manager.com/aircraft/show/112650100,4:45,15:59,310,"$702,675.00","$647,803.00"
SFO - KOA,52172581857,SFO-KOA-PWM 5 B,A319-100,https://www.airlines-manager.com/network/showline/48344087,https://www.airlines-manager.com/network/showflight/52172581857,https://www.airlines-manager.com/aircraft/show/112650091,13:00,0:14,198,"$527,382.00","$483,383.00"
SFO - KOA,52181070619,SFO-KOA-PWM 1,A321-200,https://www.airlines-manager.com/network/showline/48344087,https://www.airlines-manager.com/network/showflight/52181070619,https://www.airlines-manager.com/aircraft/show/112650103,17:00,4:14,310,"$702,675.00","$647,803.00"
SFO - KOA,52185045394,SFO-KOA-PWM 2,A321-200,https://www.airlines-manager.com/network/showline/48344087,https://www.airlines-manager.com/network/showflight/52185045394,https://www.airlines-manager.com/aircraft/show/112650102,20:00,7:14,309,"$701,292.00","$646,485.00"
SFO - LAS,52157350087,SFO-BOS-PHX 1,A321neo,https://www.airlines-manager.com/network/showline/40459405,https://www.airlines-manager.com/network/showflight/52157350087,https://www.airlines-manager.com/aircraft/show/104901564,6:00,9:44,338,"$216,921.00","$178,228.00"
SFO - LAS,52157350088,SFO-BOS-PHX 4,A321neo,https://www.airlines-manager.com/network/showline/40459405,https://www.airlines-manager.com/network/showflight/52157350088,https://www.airlines-manager.com/aircraft/show/104870960,7:00,10:44,338,"$216,921.00","$178,228.00"
SFO - LAS,52167946305,SFO-BOS-PHX 3,A321neo,https://www.airlines-manager.com/network/showline/40459405,https://www.airlines-manager.com/network/showflight/52167946305,https://www.airlines-manager.com/aircraft/show/104874465,12:00,15:44,338,"$216,921.00","$178,228.00"
SFO - LAS,52167946306,SFO CARGO 1,737-700,https://www.airlines-manager.com/network/showline/40459405,https://www.airlines-manager.com/network/showflight/52167946306,https://www.airlines-manager.com/aircraft/show/107343113,12:00,15:44,0,"$55,686.00","$30,496.00"
SFO - LAS,52176667167,SFO-BOS-PHX 2,A321neo,https://www.airlines-manager.com/network/showline/40459405,https://www.airlines-manager.com/network/showflight/52176667167,https://www.airlines-manager.com/aircraft/show/104901544,16:30,20:14,338,"$216,921.00","$178,228.00"
SFO - LAS,52185045444,SFO-BOS-PHX 5,A321neo,https://www.airlines-manager.com/network/showline/40459405,https://www.airlines-manager.com/network/showflight/52185045444,https://www.airlines-manager.com/aircraft/show/104864961,20:30,0:14,338,"$216,921.00","$178,228.00"
SFO - LAX,52143769122,SFO-PHL-SEA 6 B,A319-100,https://www.airlines-manager.com/network/showline/41084093,https://www.airlines-manager.com/network/showflight/52143769122,https://www.airlines-manager.com/aircraft/show/97900730,2:00,5:29,198,"$133,250.00","$101,236.00"
SFO - LAX,52143769123,SFO-PHL-SEA 1,737-900ER,https://www.airlines-manager.com/network/showline/41084093,https://www.airlines-manager.com/network/showflight/52143769123,https://www.airlines-manager.com/aircraft/show/92390872,4:30,7:59,320,"$175,671.00","$128,460.00"
SFO - LAX,52157350208,SFO-PHL-SEA 5,737-900ER,https://www.airlines-manager.com/network/showline/41084093,https://www.airlines-manager.com/network/showflight/52157350208,https://www.airlines-manager.com/aircraft/show/92390869,7:30,10:59,320,"$175,671.00","$128,460.00"
SFO - LAX,52163458601,SFO-PHL-SEA 4,737-900ER,https://www.airlines-manager.com/network/showline/41084093,https://www.airlines-manager.com/network/showflight/52163458601,https://www.airlines-manager.com/aircraft/show/92390870,8:15,11:44,320,"$175,671.00","$128,460.00"
SFO - LAX,52167946295,SFO-PHL-SEA 3,737-900ER,https://www.airlines-manager.com/network/showline/41084093,https://www.airlines-manager.com/network/showflight/52167946295,https://www.airlines-manager.com/aircraft/show/92390873,12:00,15:29,320,"$175,671.00","$128,460.00"
SFO - LAX,52181070608,SFO-PHL-SEA 2,737-900ER,https://www.airlines-manager.com/network/showline/41084093,https://www.airlines-manager.com/network/showflight/52181070608,https://www.airlines-manager.com/aircraft/show/92390871,16:45,20:14,320,"$175,671.00","$128,460.00"
SFO - LEX,52143769125,SFO-BTV-LEX 1,A321-200,https://www.airlines-manager.com/network/showline/48344124,https://www.airlines-manager.com/network/showflight/52143769125,https://www.airlines-manager.com/aircraft/show/112650095,2:00,11:59,310,"$622,649.00","$575,201.00"
SFO - LEX,52157350093,SFO-BTV-LEX 2,A321-200,https://www.airlines-manager.com/network/showline/48344124,https://www.airlines-manager.com/network/showflight/52157350093,https://www.airlines-manager.com/aircraft/show/112650094,6:00,15:59,310,"$622,649.00","$575,201.00"
SFO - LEX,52163458584,SFO-BTV-LEX 3,A321-200,https://www.airlines-manager.com/network/showline/48344124,https://www.airlines-manager.com/network/showflight/52163458584,https://www.airlines-manager.com/aircraft/show/112650093,8:00,17:59,310,"$622,649.00","$575,201.00"
SFO - LEX,52172581964,SFO-BTV-LEX 4,A321-200,https://www.airlines-manager.com/network/showline/48344124,https://www.airlines-manager.com/network/showflight/52172581964,https://www.airlines-manager.com/aircraft/show/112650092,14:00,23:59,310,"$622,649.00","$575,201.00"
SFO - LEX,52185045395,SFO-BTV-LEX 5 B,A319-100,https://www.airlines-manager.com/network/showline/48344124,https://www.airlines-manager.com/network/showflight/52185045395,https://www.airlines-manager.com/aircraft/show/112650089,20:00,5:59,198,"$468,448.00","$430,402.00"
SFO - LIT,52143769146,SFO-SDF-LIT 3,A321-200,https://www.airlines-manager.com/network/showline/46472621,https://www.airlines-manager.com/network/showflight/52143769146,https://www.airlines-manager.com/aircraft/show/94886627,2:15,10:59,310,"$540,388.00","$497,360.00"
SFO - LIT,52143769147,SFO-SDF-LIT 5,A321-200,https://www.airlines-manager.com/network/showline/46472621,https://www.airlines-manager.com/network/showflight/52143769147,https://www.airlines-manager.com/aircraft/show/106453498,3:15,11:59,310,"$540,388.00","$497,360.00"
SFO - LIT,52172582020,SFO-SDF-LIT 2,A321-200,https://www.airlines-manager.com/network/showline/46472621,https://www.airlines-manager.com/network/showflight/52172582020,https://www.airlines-manager.com/aircraft/show/94886628,14:00,22:44,310,"$540,388.00","$497,360.00"
SFO - LIT,52176667046,SFO-SDF-LIT 4,A321-200,https://www.airlines-manager.com/network/showline/46472621,https://www.airlines-manager.com/network/showflight/52176667046,https://www.airlines-manager.com/aircraft/show/106453500,15:00,23:44,310,"$540,388.00","$497,360.00"
SFO - LIT,52191270974,SFO-SDF-LIT 1,A321-200,https://www.airlines-manager.com/network/showline/46472621,https://www.airlines-manager.com/network/showflight/52191270974,https://www.airlines-manager.com/aircraft/show/106453499,23:45,8:29,310,"$540,388.00","$497,360.00"
SFO - MCI,52157350186,SFO-MCI-OMA 2,737-900ER,https://www.airlines-manager.com/network/showline/46129471,https://www.airlines-manager.com/network/showflight/52157350186,https://www.airlines-manager.com/aircraft/show/88239554,7:00,14:59,320,"$504,933.00","$456,007.00"
SFO - MCI,52181070637,SFO-MCI-OMA 1,737-900ER,https://www.airlines-manager.com/network/showline/46129471,https://www.airlines-manager.com/network/showflight/52181070637,https://www.airlines-manager.com/aircraft/show/88239553,17:00,0:59,320,"$504,933.00","$456,007.00"
SFO - MCI,52181070638,SFO-MCI-OMA 5 B,A319-100,https://www.airlines-manager.com/network/showline/46129471,https://www.airlines-manager.com/network/showflight/52181070638,https://www.airlines-manager.com/aircraft/show/105223003,17:00,0:59,198,"$380,833.00","$345,825.00"
SFO - MCI,52181070639,SFO-MCI-OMA 4,737-900ER,https://www.airlines-manager.com/network/showline/46129471,https://www.airlines-manager.com/network/showflight/52181070639,https://www.airlines-manager.com/aircraft/show/88239557,18:45,2:44,320,"$504,933.00","$456,007.00"
SFO - MCI,52191270934,SFO-MCI-OMA 3,737-900ER,https://www.airlines-manager.com/network/showline/46129471,https://www.airlines-manager.com/network/showflight/52191270934,https://www.airlines-manager.com/aircraft/show/88239555,23:15,7:14,320,"$504,933.00","$456,007.00"
SFO - MCO,52143769228,SFO-MCO-MSP 2,A321neo,https://www.airlines-manager.com/network/showline/41349629,https://www.airlines-manager.com/network/showflight/52143769228,https://www.airlines-manager.com/aircraft/show/105367367,3:30,14:59,338,"$791,675.00","$726,706.00"
SFO - MCO,52143769229,SFO-MCO-MSP 5,A321neo,https://www.airlines-manager.com/network/showline/41349629,https://www.airlines-manager.com/network/showflight/52143769229,https://www.airlines-manager.com/aircraft/show/105367364,4:30,15:59,338,"$791,675.00","$726,706.00"
SFO - MCO,52176667059,SFO-MCO-MSP 1,A321neo,https://www.airlines-manager.com/network/showline/41349629,https://www.airlines-manager.com/network/showflight/52176667059,https://www.airlines-manager.com/aircraft/show/105367368,15:00,2:29,338,"$791,675.00","$726,706.00"
SFO - MCO,52181070655,SFO-MCO-MSP 4,A321neo,https://www.airlines-manager.com/network/showline/41349629,https://www.airlines-manager.com/network/showflight/52181070655,https://www.airlines-manager.com/aircraft/show/105367365,17:00,4:29,338,"$791,675.00","$726,706.00"
SFO - MCO,52185045332,SFO-MCO-MSP 3,A321neo,https://www.airlines-manager.com/network/showline/41349629,https://www.airlines-manager.com/network/showflight/52185045332,https://www.airlines-manager.com/aircraft/show/105367366,19:15,6:44,338,"$791,675.00","$726,706.00"
SFO - MCO,52185045333,SFO CARGO 1,737-700,https://www.airlines-manager.com/network/showline/41349629,https://www.airlines-manager.com/network/showflight/52185045333,https://www.airlines-manager.com/aircraft/show/107343113,20:30,7:59,0,"$198,796.00","$148,149.00"
SFO - MEM,52143769185,SFO-MEM-PIT 4,A321-200,https://www.airlines-manager.com/network/showline/44710521,https://www.airlines-manager.com/network/showflight/52143769185,https://www.airlines-manager.com/aircraft/show/98788934,2:45,11:59,310,"$574,552.00","$525,828.00"
SFO - MEM,52157350076,SFO-MEM-PIT 6,ERJ-175,https://www.airlines-manager.com/network/showline/44710521,https://www.airlines-manager.com/network/showflight/52157350076,https://www.airlines-manager.com/aircraft/show/98675305,5:45,14:59,112,"$269,715.00","$237,333.00"
SFO - MEM,52172581913,SFO-MEM-PIT 1,A321-200,https://www.airlines-manager.com/network/showline/44710521,https://www.airlines-manager.com/network/showflight/52172581913,https://www.airlines-manager.com/aircraft/show/98788937,13:00,22:14,310,"$574,552.00","$525,828.00"
SFO - MEM,52176667141,SFO-MEM-PIT 3,A321-200,https://www.airlines-manager.com/network/showline/44710521,https://www.airlines-manager.com/network/showflight/52176667141,https://www.airlines-manager.com/aircraft/show/98788935,16:00,1:14,310,"$574,552.00","$525,828.00"
SFO - MEM,52185045308,SFO-MEM-PIT 5,A321-200,https://www.airlines-manager.com/network/showline/44710521,https://www.airlines-manager.com/network/showflight/52185045308,https://www.airlines-manager.com/aircraft/show/98788933,19:00,4:14,310,"$574,552.00","$525,828.00"
SFO - MEM,52191270972,SFO-MEM-PIT 2,A321-200,https://www.airlines-manager.com/network/showline/44710521,https://www.airlines-manager.com/network/showflight/52191270972,https://www.airlines-manager.com/aircraft/show/98788936,23:45,8:59,308,"$569,625.00","$521,037.00"
SFO - MEX,52143769238,SFO-IAH-MEX 3,757-300,https://www.airlines-manager.com/network/showline/42730810,https://www.airlines-manager.com/network/showflight/52143769238,https://www.airlines-manager.com/aircraft/show/101045337,3:45,12:59,400,"$769,587.00","$698,720.00"
SFO - MEX,52172581906,SFO-IAH-MEX 2,757-300,https://www.airlines-manager.com/network/showline/42730810,https://www.airlines-manager.com/network/showflight/52172581906,https://www.airlines-manager.com/aircraft/show/101045338,13:00,22:14,400,"$769,587.00","$698,720.00"
SFO - MEX,52176666996,SFO-IAH-MEX 5,757-300,https://www.airlines-manager.com/network/showline/42730810,https://www.airlines-manager.com/network/showflight/52176666996,https://www.airlines-manager.com/aircraft/show/101045335,15:00,0:14,400,"$769,587.00","$698,720.00"
SFO - MEX,52188655584,SFO-IAH-MEX 1,757-300,https://www.airlines-manager.com/network/showline/42730810,https://www.airlines-manager.com/network/showflight/52188655584,https://www.airlines-manager.com/aircraft/show/101045339,21:15,6:29,400,"$769,587.00","$698,720.00"
SFO - MEX,52191270945,SFO-IAH-MEX 4,757-300,https://www.airlines-manager.com/network/showline/42730810,https://www.airlines-manager.com/network/showflight/52191270945,https://www.airlines-manager.com/aircraft/show/101045336,23:15,8:29,369,"$719,546.00","$650,571.00"
SFO - MHT,52143768889,SFO-MHT-CHS 3,737-900ER,https://www.airlines-manager.com/network/showline/49035982,https://www.airlines-manager.com/network/showflight/52143768889,https://www.airlines-manager.com/aircraft/show/114917463,0:15,12:44,320,"$758,602.00","$694,617.00"
SFO - MHT,52143768890,SFO-MHT-CHS 4,737-900ER,https://www.airlines-manager.com/network/showline/49035982,https://www.airlines-manager.com/network/showflight/52143768890,https://www.airlines-manager.com/aircraft/show/114266973,4:15,16:44,320,"$758,602.00","$694,617.00"
SFO - MHT,52172581850,SFO-MHT-CHS 1,737-900ER,https://www.airlines-manager.com/network/showline/49035982,https://www.airlines-manager.com/network/showflight/52172581850,https://www.airlines-manager.com/aircraft/show/114917465,13:00,1:29,320,"$758,602.00","$694,617.00"
SFO - MHT,52181070623,SFO-MHT-CHS 2,737-900ER,https://www.airlines-manager.com/network/showline/49035982,https://www.airlines-manager.com/network/showflight/52181070623,https://www.airlines-manager.com/aircraft/show/114917464,17:00,5:29,320,"$758,602.00","$694,617.00"
SFO - MHT,52185045385,SFO-MHT-CHS 5 B,A319-100,https://www.airlines-manager.com/network/showline/49035982,https://www.airlines-manager.com/network/showflight/52185045385,https://www.airlines-manager.com/aircraft/show/114912262,20:00,8:29,197,"$566,484.00","$519,661.00"
SFO - MIA,52143768988,SFO-MIA-JFK 1,757-300,https://www.airlines-manager.com/network/showline/40228416,https://www.airlines-manager.com/network/showflight/52143768988,https://www.airlines-manager.com/aircraft/show/89233032,1:00,12:59,400,"$954,169.00","$864,326.00"
SFO - MIA,52143768989,SFO-MIA-JFK 2,757-300,https://www.airlines-manager.com/network/showline/40228416,https://www.airlines-manager.com/network/showflight/52143768989,https://www.airlines-manager.com/aircraft/show/84622093,4:00,15:59,400,"$954,169.00","$864,326.00"
SFO - MIA,52157350183,SFO-MIA-JFK 3,757-300,https://www.airlines-manager.com/network/showline/40228416,https://www.airlines-manager.com/network/showflight/52157350183,https://www.airlines-manager.com/aircraft/show/89233031,7:00,18:59,400,"$954,169.00","$864,326.00"
SFO - MIA,52172581935,SFO-MIA-JFK 4,757-300,https://www.airlines-manager.com/network/showline/40228416,https://www.airlines-manager.com/network/showflight/52172581935,https://www.airlines-manager.com/aircraft/show/89233034,13:00,0:59,400,"$954,169.00","$864,326.00"
SFO - MIA,52185045318,SFO-MIA-JFK 5,757-300,https://www.airlines-manager.com/network/showline/40228416,https://www.airlines-manager.com/network/showflight/52185045318,https://www.airlines-manager.com/aircraft/show/89233035,19:00,6:59,399,"$952,065.00","$862,305.00"
SFO - MKE,52143768926,SFO-CLE-MKE 1,737-900ER,https://www.airlines-manager.com/network/showline/45951021,https://www.airlines-manager.com/network/showflight/52143768926,https://www.airlines-manager.com/aircraft/show/92519368,0:30,9:44,320,"$583,418.00","$530,650.00"
SFO - MKE,52157350044,SFO-CLE-MKE 4,737-900ER,https://www.airlines-manager.com/network/showline/45951021,https://www.airlines-manager.com/network/showflight/52157350044,https://www.airlines-manager.com/aircraft/show/92519371,5:30,14:44,320,"$583,418.00","$530,650.00"
SFO - MKE,52157350045,SFO-CLE-MKE 3,737-900ER,https://www.airlines-manager.com/network/showline/45951021,https://www.airlines-manager.com/network/showflight/52157350045,https://www.airlines-manager.com/aircraft/show/92519367,6:45,15:59,320,"$583,418.00","$530,650.00"
SFO - MKE,52176667134,SFO-CLE-MKE 2,737-900ER,https://www.airlines-manager.com/network/showline/45951021,https://www.airlines-manager.com/network/showflight/52176667134,https://www.airlines-manager.com/aircraft/show/92519369,16:00,1:14,320,"$583,418.00","$530,650.00"
SFO - MKE,52181070717,SFO-CLE-MKE 5,737-900ER,https://www.airlines-manager.com/network/showline/45951021,https://www.airlines-manager.com/network/showflight/52181070717,https://www.airlines-manager.com/aircraft/show/92519370,18:00,3:14,320,"$583,418.00","$530,650.00"
SFO - MSO,52157350127,SFO-TUL-DSM 1,737-900ER,https://www.airlines-manager.com/network/showline/47065671,https://www.airlines-manager.com/network/showflight/52157350127,https://www.airlines-manager.com/aircraft/show/108410856,6:45,11:44,320,"$321,150.00","$287,439.00"
SFO - MSO,52157350128,SFO-TUL-DSM 4,737-900ER,https://www.airlines-manager.com/network/showline/47065671,https://www.airlines-manager.com/network/showflight/52157350128,https://www.airlines-manager.com/aircraft/show/108410859,7:30,12:29,320,"$321,150.00","$287,439.00"
SFO - MSO,52172581869,SFO-TUL-DSM 3,737-900ER,https://www.airlines-manager.com/network/showline/47065671,https://www.airlines-manager.com/network/showflight/52172581869,https://www.airlines-manager.com/aircraft/show/108410858,13:00,17:59,320,"$321,150.00","$287,439.00"
SFO - MSO,52188655544,SFO-TUL-DSM 2,737-900ER,https://www.airlines-manager.com/network/showline/47065671,https://www.airlines-manager.com/network/showflight/52188655544,https://www.airlines-manager.com/aircraft/show/108410857,21:00,1:59,265,"$287,772.00","$255,199.00"
SFO - MSP,52143769159,SFO-MCO-MSP 1,A321neo,https://www.airlines-manager.com/network/showline/42708322,https://www.airlines-manager.com/network/showflight/52143769159,https://www.airlines-manager.com/aircraft/show/105367368,2:30,10:44,338,"$570,073.00","$520,635.00"
SFO - MSP,52143769160,SFO-MCO-MSP 4,A321neo,https://www.airlines-manager.com/network/showline/42708322,https://www.airlines-manager.com/network/showflight/52143769160,https://www.airlines-manager.com/aircraft/show/105367365,4:30,12:44,338,"$570,073.00","$520,635.00"
SFO - MSP,52157350122,SFO-MCO-MSP 3,A321neo,https://www.airlines-manager.com/network/showline/42708322,https://www.airlines-manager.com/network/showflight/52157350122,https://www.airlines-manager.com/aircraft/show/105367366,6:45,14:59,338,"$570,073.00","$520,635.00"
SFO - MSP,52176667061,SFO-MCO-MSP 2,A321neo,https://www.airlines-manager.com/network/showline/42708322,https://www.airlines-manager.com/network/showflight/52176667061,https://www.airlines-manager.com/aircraft/show/105367367,15:00,23:14,338,"$570,073.00","$520,635.00"
SFO - MSP,52176667062,SFO-MCO-MSP 5,A321neo,https://www.airlines-manager.com/network/showline/42708322,https://www.airlines-manager.com/network/showflight/52176667062,https://www.airlines-manager.com/aircraft/show/105367364,16:00,0:14,336,"$565,605.00","$516,266.00"
SFO - MSY,52143769200,SFO-MSY-STL 6,ERJ-175,https://www.airlines-manager.com/network/showline/44531521,https://www.airlines-manager.com/network/showflight/52143769200,https://www.airlines-manager.com/aircraft/show/103534666,3:00,12:29,112,"$278,394.00","$245,720.00"
SFO - MSY,52157350102,SFO-MSY-STL 2,737-900ER,https://www.airlines-manager.com/network/showline/44531521,https://www.airlines-manager.com/network/showflight/52157350102,https://www.airlines-manager.com/aircraft/show/98075266,6:00,15:29,320,"$591,064.00","$536,830.00"
SFO - MSY,52163458591,SFO-MSY-STL 4,737-900ER,https://www.airlines-manager.com/network/showline/44531521,https://www.airlines-manager.com/network/showflight/52163458591,https://www.airlines-manager.com/aircraft/show/98075264,8:00,17:29,320,"$591,064.00","$536,830.00"
SFO - MSY,52172581918,SFO-MSY-STL 1,737-900ER,https://www.airlines-manager.com/network/showline/44531521,https://www.airlines-manager.com/network/showflight/52172581918,https://www.airlines-manager.com/aircraft/show/98075267,13:00,22:29,320,"$591,064.00","$536,830.00"
SFO - MSY,52188655604,SFO-MSY-STL 3,737-900ER,https://www.airlines-manager.com/network/showline/44531521,https://www.airlines-manager.com/network/showflight/52188655604,https://www.airlines-manager.com/aircraft/show/98075265,21:15,6:44,320,"$591,064.00","$536,830.00"
SFO - MSY,52191270932,SFO-MSY-STL 5,737-900ER,https://www.airlines-manager.com/network/showline/44531521,https://www.airlines-manager.com/network/showflight/52191270932,https://www.airlines-manager.com/aircraft/show/98075263,23:15,8:44,320,"$591,064.00","$536,830.00"
SFO - NRT,52143768840,SFO 84A-7 E1,777-300,https://www.airlines-manager.com/network/showline/40456655,https://www.airlines-manager.com/network/showflight/52143768840,https://www.airlines-manager.com/aircraft/show/85806656,0:00,20:29,932,"$3,433,804.00","$3,109,148.00"
SFO - NRT,52143768841,SFO 84A-3 E1,777-300,https://www.airlines-manager.com/network/showline/40456655,https://www.airlines-manager.com/network/showflight/52143768841,https://www.airlines-manager.com/aircraft/show/86776210,4:15,0:44,932,"$3,433,804.00","$3,109,148.00"
SFO - OGG,52143769158,SFO-OGG-AUS 5,A321-200,https://www.airlines-manager.com/network/showline/45270812,https://www.airlines-manager.com/network/showflight/52143769158,https://www.airlines-manager.com/aircraft/show/92773477,2:30,13:44,310,"$694,538.00","$641,976.00"
SFO - OGG,52172581947,SFO-OGG-AUS 1,A321-200,https://www.airlines-manager.com/network/showline/45270812,https://www.airlines-manager.com/network/showflight/52172581947,https://www.airlines-manager.com/aircraft/show/92773481,13:30,0:44,310,"$694,538.00","$641,976.00"
SFO - OGG,52176667083,SFO-OGG-AUS 2,A321-200,https://www.airlines-manager.com/network/showline/45270812,https://www.airlines-manager.com/network/showflight/52176667083,https://www.airlines-manager.com/aircraft/show/92773480,15:30,2:44,310,"$694,538.00","$641,976.00"
SFO - OGG,52188655647,SFO-OGG-AUS 3,A321-200,https://www.airlines-manager.com/network/showline/45270812,https://www.airlines-manager.com/network/showflight/52188655647,https://www.airlines-manager.com/aircraft/show/92773479,21:30,8:44,310,"$694,538.00","$641,976.00"
SFO - OGG,52191270955,SFO-OGG-AUS 4,A321-200,https://www.airlines-manager.com/network/showline/45270812,https://www.airlines-manager.com/network/showflight/52191270955,https://www.airlines-manager.com/aircraft/show/92773478,23:30,10:44,310,"$694,538.00","$641,976.00"
SFO - OKC,52143768952,SFO-OKC-FSD 3,737-900ER,https://www.airlines-manager.com/network/showline/46719700,https://www.airlines-manager.com/network/showflight/52143768952,https://www.airlines-manager.com/aircraft/show/107160380,0:30,7:59,320,"$474,161.00","$429,919.00"
SFO - OKC,52163458588,SFO-OKC-FSD 2,737-900ER,https://www.airlines-manager.com/network/showline/46719700,https://www.airlines-manager.com/network/showflight/52163458588,https://www.airlines-manager.com/aircraft/show/107160379,8:00,15:29,320,"$474,161.00","$429,919.00"
SFO - OKC,52181070648,SFO-OKC-FSD 1,737-900ER,https://www.airlines-manager.com/network/showline/46719700,https://www.airlines-manager.com/network/showflight/52181070648,https://www.airlines-manager.com/aircraft/show/107160378,17:00,0:29,320,"$474,161.00","$429,919.00"
SFO - OKC,52181070649,SFO-OKC-FSD 5,ERJ-175,https://www.airlines-manager.com/network/showline/46719700,https://www.airlines-manager.com/network/showflight/52181070649,https://www.airlines-manager.com/aircraft/show/107132310,18:30,1:59,112,"$223,932.00","$197,789.00"
SFO - OKC,52185045366,SFO-OKC-FSD 4,737-900ER,https://www.airlines-manager.com/network/showline/46719700,https://www.airlines-manager.com/network/showflight/52185045366,https://www.airlines-manager.com/aircraft/show/107160381,19:30,2:59,320,"$474,161.00","$429,919.00"
SFO - OMA,52143768998,SFO-MCI-OMA 5 B,A319-100,https://www.airlines-manager.com/network/showline/46129452,https://www.airlines-manager.com/network/showflight/52143768998,https://www.airlines-manager.com/aircraft/show/105223003,1:00,8:44,198,"$365,115.00","$332,780.00"
SFO - OMA,52143768999,SFO-MCI-OMA 1,737-900ER,https://www.airlines-manager.com/network/showline/46129452,https://www.airlines-manager.com/network/showflight/52143768999,https://www.airlines-manager.com/aircraft/show/88239553,1:00,8:44,320,"$482,778.00","$437,706.00"
SFO - OMA,52143769000,SFO-MCI-OMA 4,737-900ER,https://www.airlines-manager.com/network/showline/46129452,https://www.airlines-manager.com/network/showflight/52143769000,https://www.airlines-manager.com/aircraft/show/88239557,2:45,10:29,320,"$482,778.00","$437,706.00"
SFO - OMA,52157350191,SFO-MCI-OMA 3,737-900ER,https://www.airlines-manager.com/network/showline/46129452,https://www.airlines-manager.com/network/showflight/52157350191,https://www.airlines-manager.com/aircraft/show/88239555,7:15,14:59,320,"$482,778.00","$437,706.00"
SFO - OMA,52176667006,SFO-MCI-OMA 2,737-900ER,https://www.airlines-manager.com/network/showline/46129452,https://www.airlines-manager.com/network/showflight/52176667006,https://www.airlines-manager.com/aircraft/show/88239554,15:00,22:44,320,"$482,778.00","$437,706.00"
SFO - ONT,52143769281,SFO-OKC-FSD 2,737-900ER,https://www.airlines-manager.com/network/showline/46719649,https://www.airlines-manager.com/network/showflight/52143769281,https://www.airlines-manager.com/aircraft/show/107160379,4:30,7:59,320,"$179,727.00","$149,594.00"
SFO - ONT,52172581876,SFO-OKC-FSD 1,737-900ER,https://www.airlines-manager.com/network/showline/46719649,https://www.airlines-manager.com/network/showflight/52172581876,https://www.airlines-manager.com/aircraft/show/107160378,13:00,16:29,320,"$179,727.00","$149,594.00"
SFO - ONT,52176667039,SFO-OKC-FSD 5,ERJ-175,https://www.airlines-manager.com/network/showline/46719649,https://www.airlines-manager.com/network/showflight/52176667039,https://www.airlines-manager.com/aircraft/show/107132310,15:00,18:29,112,"$82,945.00","$66,822.00"
SFO - ONT,52176667040,SFO-OKC-FSD 4,737-900ER,https://www.airlines-manager.com/network/showline/46719649,https://www.airlines-manager.com/network/showflight/52176667040,https://www.airlines-manager.com/aircraft/show/107160381,16:00,19:29,320,"$179,727.00","$149,594.00"
SFO - ONT,52188655545,SFO-OKC-FSD 3,737-900ER,https://www.airlines-manager.com/network/showline/46719649,https://www.airlines-manager.com/network/showflight/52188655545,https://www.airlines-manager.com/aircraft/show/107160380,21:00,0:29,320,"$179,727.00","$149,594.00"
SFO - ORD,52157350100,SFO-ORD-DTW 2,757-300,https://www.airlines-manager.com/network/showline/40736837,https://www.airlines-manager.com/network/showflight/52157350100,https://www.airlines-manager.com/aircraft/show/101045333,6:00,14:59,400,"$756,824.00","$669,423.00"
SFO - ORD,52157350101,SFO-ORD-DTW 5,757-300,https://www.airlines-manager.com/network/showline/40736837,https://www.airlines-manager.com/network/showflight/52157350101,https://www.airlines-manager.com/aircraft/show/101045330,7:30,16:29,400,"$756,824.00","$669,423.00"
SFO - ORD,52172581908,SFO-ORD-DTW 1,757-300,https://www.airlines-manager.com/network/showline/40736837,https://www.airlines-manager.com/network/showflight/52172581908,https://www.airlines-manager.com/aircraft/show/101045334,13:00,21:59,400,"$756,824.00","$669,423.00"
SFO - ORD,52176667024,SFO-ORD-DTW 4,757-300,https://www.airlines-manager.com/network/showline/40736837,https://www.airlines-manager.com/network/showflight/52176667024,https://www.airlines-manager.com/aircraft/show/101045331,15:00,23:59,400,"$756,824.00","$669,423.00"
SFO - ORD,52185045398,SFO-ORD-DTW 3,757-300,https://www.airlines-manager.com/network/showline/40736837,https://www.airlines-manager.com/network/showflight/52185045398,https://www.airlines-manager.com/aircraft/show/101045332,20:00,4:59,400,"$756,824.00","$669,423.00"
SFO - ORF,52157350039,SFO-ORF-RIC 3,A321-200,https://www.airlines-manager.com/network/showline/47065515,https://www.airlines-manager.com/network/showflight/52157350039,https://www.airlines-manager.com/aircraft/show/108328836,5:30,17:29,310,"$729,113.00","$673,001.00"
SFO - ORF,52157350040,SFO-ORF-RIC 4,A321-200,https://www.airlines-manager.com/network/showline/47065515,https://www.airlines-manager.com/network/showflight/52157350040,https://www.airlines-manager.com/aircraft/show/108328837,7:30,19:29,310,"$729,113.00","$673,001.00"
SFO - ORF,52181070739,SFO-ORF-RIC 1,A321-200,https://www.airlines-manager.com/network/showline/47065515,https://www.airlines-manager.com/network/showflight/52181070739,https://www.airlines-manager.com/aircraft/show/108328834,18:00,5:59,310,"$729,113.00","$673,001.00"
SFO - ORF,52185045412,SFO-ORF-RIC 2,A321-200,https://www.airlines-manager.com/network/showline/47065515,https://www.airlines-manager.com/network/showflight/52185045412,https://www.airlines-manager.com/aircraft/show/108328835,20:00,7:59,310,"$729,113.00","$673,001.00"
SFO - ORF,52188655684,SFO-ORF-RIC 5 B,A319-100,https://www.airlines-manager.com/network/showline/47065515,https://www.airlines-manager.com/network/showflight/52188655684,https://www.airlines-manager.com/aircraft/show/108328833,22:00,9:59,198,"$545,293.00","$500,294.00"
SFO - PBI,52143769266,SFO-PBI-RDU 3,737-900ER,https://www.airlines-manager.com/network/showline/45099085,https://www.airlines-manager.com/network/showflight/52143769266,https://www.airlines-manager.com/aircraft/show/100301186,4:15,16:14,320,"$730,565.00","$666,234.00"
SFO - PBI,52157350109,SFO-PBI-RDU 4,737-900ER,https://www.airlines-manager.com/network/showline/45099085,https://www.airlines-manager.com/network/showflight/52157350109,https://www.airlines-manager.com/aircraft/show/100301185,6:15,18:14,320,"$730,565.00","$666,234.00"
SFO - PBI,52181070659,SFO-PBI-RDU 1,737-900ER,https://www.airlines-manager.com/network/showline/45099085,https://www.airlines-manager.com/network/showflight/52181070659,https://www.airlines-manager.com/aircraft/show/100301188,17:00,4:59,320,"$730,565.00","$666,234.00"
SFO - PBI,52185045300,SFO-PBI-RDU 2,737-900ER,https://www.airlines-manager.com/network/showline/45099085,https://www.airlines-manager.com/network/showflight/52185045300,https://www.airlines-manager.com/aircraft/show/100301187,19:00,6:59,320,"$730,565.00","$666,234.00"
SFO - PBI,52188655556,SFO-PBI-RDU 5,737-900ER,https://www.airlines-manager.com/network/showline/45099085,https://www.airlines-manager.com/network/showflight/52188655556,https://www.airlines-manager.com/aircraft/show/100301184,21:00,8:59,320,"$730,565.00","$666,234.00"
SFO - PDX,52143768899,SFO-MCO-MSP 5,A321neo,https://www.airlines-manager.com/network/showline/42708309,https://www.airlines-manager.com/network/showflight/52143768899,https://www.airlines-manager.com/aircraft/show/105367364,0:15,4:29,338,"$271,154.00","$241,757.00"
SFO - PDX,52167946185,SFO-MCO-MSP 1,A321neo,https://www.airlines-manager.com/network/showline/42708309,https://www.airlines-manager.com/network/showflight/52167946185,https://www.airlines-manager.com/aircraft/show/105367368,10:45,14:59,338,"$271,154.00","$241,757.00"
SFO - PDX,52172581840,SFO-MCO-MSP 4,A321neo,https://www.airlines-manager.com/network/showline/42708309,https://www.airlines-manager.com/network/showflight/52172581840,https://www.airlines-manager.com/aircraft/show/105367365,12:45,16:59,338,"$271,154.00","$241,757.00"
SFO - PDX,52176667060,SFO-MCO-MSP 3,A321neo,https://www.airlines-manager.com/network/showline/42708309,https://www.airlines-manager.com/network/showflight/52176667060,https://www.airlines-manager.com/aircraft/show/105367366,15:00,19:14,338,"$271,154.00","$241,757.00"
SFO - PDX,52191270944,SFO-MCO-MSP 2,A321neo,https://www.airlines-manager.com/network/showline/42708309,https://www.airlines-manager.com/network/showflight/52191270944,https://www.airlines-manager.com/aircraft/show/105367367,23:15,3:29,270,"$238,936.00","$210,393.00"
SFO - PEK,52143768961,SFO 84A-4 E1,777-300,https://www.airlines-manager.com/network/showline/40333487,https://www.airlines-manager.com/network/showflight/52143768961,https://www.airlines-manager.com/aircraft/show/86776213,0:45,0:14,932,"$3,796,237.00","$3,394,730.00"
SFO - PEK,52181070631,SFO-PEK E,787-10,https://www.airlines-manager.com/network/showline/40333487,https://www.airlines-manager.com/network/showflight/52181070631,https://www.airlines-manager.com/aircraft/show/106813006,17:00,15:59,648,"$2,826,020.00","$2,591,444.00"
SFO - PEK,52185045433,SFO 84A-7 E1,777-300,https://www.airlines-manager.com/network/showline/40333487,https://www.airlines-manager.com/network/showflight/52185045433,https://www.airlines-manager.com/aircraft/show/85806656,20:30,19:59,932,"$3,796,237.00","$3,394,730.00"
SFO - PHL,52143768855,SFO-PHL-SEA 2,737-900ER,https://www.airlines-manager.com/network/showline/40229890,https://www.airlines-manager.com/network/showflight/52143768855,https://www.airlines-manager.com/aircraft/show/92390871,0:00,11:44,320,"$727,366.00","$654,814.00"
SFO - PHL,52167946304,SFO-PHL-SEA 1,737-900ER,https://www.airlines-manager.com/network/showline/40229890,https://www.airlines-manager.com/network/showflight/52167946304,https://www.airlines-manager.com/aircraft/show/92390872,12:00,23:44,320,"$727,366.00","$654,814.00"
SFO - PHL,52172582005,SFO-PHL-SEA 6 B,A319-100,https://www.airlines-manager.com/network/showline/40229890,https://www.airlines-manager.com/network/showflight/52172582005,https://www.airlines-manager.com/aircraft/show/97900730,14:00,1:59,198,"$546,382.00","$493,990.00"
SFO - PHL,52176667029,SFO-PHL-SEA 5,737-900ER,https://www.airlines-manager.com/network/showline/40229890,https://www.airlines-manager.com/network/showflight/52176667029,https://www.airlines-manager.com/aircraft/show/92390869,15:00,2:44,320,"$727,366.00","$654,814.00"
SFO - PHL,52176667030,SFO-PHL-SEA 4,737-900ER,https://www.airlines-manager.com/network/showline/40229890,https://www.airlines-manager.com/network/showflight/52176667030,https://www.airlines-manager.com/aircraft/show/92390870,15:45,3:29,320,"$727,366.00","$654,814.00"
SFO - PHL,52185045329,SFO-PHL-SEA 3,737-900ER,https://www.airlines-manager.com/network/showline/40229890,https://www.airlines-manager.com/network/showflight/52185045329,https://www.airlines-manager.com/aircraft/show/92390873,19:15,6:59,320,"$727,366.00","$654,814.00"
SFO - PHX,52143769072,SFO-BOS-PHX 1,A321neo,https://www.airlines-manager.com/network/showline/42635167,https://www.airlines-manager.com/network/showflight/52143769072,https://www.airlines-manager.com/aircraft/show/104901564,1:30,5:59,338,"$320,579.00","$282,521.00"
SFO - PHX,52143769073,SFO-BOS-PHX 4,A321neo,https://www.airlines-manager.com/network/showline/42635167,https://www.airlines-manager.com/network/showflight/52143769073,https://www.airlines-manager.com/aircraft/show/104870960,2:30,6:59,338,"$320,579.00","$282,521.00"
SFO - PHX,52143769074,SFO-BOS-PHX 3,A321neo,https://www.airlines-manager.com/network/showline/42635167,https://www.airlines-manager.com/network/showflight/52143769074,https://www.airlines-manager.com/aircraft/show/104874465,4:15,8:44,338,"$320,579.00","$282,521.00"
SFO - PHX,52167946332,SFO-BOS-PHX 2,A321neo,https://www.airlines-manager.com/network/showline/42635167,https://www.airlines-manager.com/network/showflight/52167946332,https://www.airlines-manager.com/aircraft/show/104901544,12:00,16:29,338,"$320,579.00","$282,521.00"
SFO - PHX,52176667093,SFO CARGO 1,737-700,https://www.airlines-manager.com/network/showline/42635167,https://www.airlines-manager.com/network/showflight/52176667093,https://www.airlines-manager.com/aircraft/show/107343113,15:45,20:29,0,"$78,259.00","$52,319.00"
SFO - PHX,52176667094,SFO-BOS-PHX 5,A321neo,https://www.airlines-manager.com/network/showline/42635167,https://www.airlines-manager.com/network/showflight/52176667094,https://www.airlines-manager.com/aircraft/show/104864961,16:00,20:29,338,"$320,579.00","$282,521.00"
SFO - PIT,52143769045,SFO-MEM-PIT 3,A321-200,https://www.airlines-manager.com/network/showline/44710524,https://www.airlines-manager.com/network/showflight/52143769045,https://www.airlines-manager.com/aircraft/show/98788935,1:15,11:59,310,"$673,493.00","$618,337.00"
SFO - PIT,52143769046,SFO-MEM-PIT 5,A321-200,https://www.airlines-manager.com/network/showline/44710524,https://www.airlines-manager.com/network/showflight/52143769046,https://www.airlines-manager.com/aircraft/show/98788933,4:15,14:59,310,"$673,493.00","$618,337.00"
SFO - PIT,52172581912,SFO-MEM-PIT 2,A321-200,https://www.airlines-manager.com/network/showline/44710524,https://www.airlines-manager.com/network/showflight/52172581912,https://www.airlines-manager.com/aircraft/show/98788936,13:00,23:44,310,"$673,493.00","$618,337.00"
SFO - PIT,52176667140,SFO-MEM-PIT 4,A321-200,https://www.airlines-manager.com/network/showline/44710524,https://www.airlines-manager.com/network/showflight/52176667140,https://www.airlines-manager.com/aircraft/show/98788934,16:00,2:44,310,"$673,493.00","$618,337.00"
SFO - PIT,52185045309,SFO-MEM-PIT 6,ERJ-175,https://www.airlines-manager.com/network/showline/44710524,https://www.airlines-manager.com/network/showflight/52185045309,https://www.airlines-manager.com/aircraft/show/98675305,19:00,5:44,112,"$315,768.00","$278,749.00"
SFO - PIT,52188655713,SFO-MEM-PIT 1,A321-200,https://www.airlines-manager.com/network/showline/44710524,https://www.airlines-manager.com/network/showflight/52188655713,https://www.airlines-manager.com/aircraft/show/98788937,22:15,8:59,310,"$673,493.00","$618,337.00"
SFO - PSP,52143769271,SFO-ICT-BFF 2,A321-200,https://www.airlines-manager.com/network/showline/49034232,https://www.airlines-manager.com/network/showflight/52143769271,https://www.airlines-manager.com/aircraft/show/114912264,4:15,7:59,310,"$199,461.00","$174,663.00"
SFO - PSP,52167946293,SFO-ICT-BFF 1,A321-200,https://www.airlines-manager.com/network/showline/49034232,https://www.airlines-manager.com/network/showflight/52167946293,https://www.airlines-manager.com/aircraft/show/114912267,11:45,15:29,310,"$199,461.00","$174,663.00"
SFO - PSP,52172581946,SFO-ICT-BFF 5,ERJ-175,https://www.airlines-manager.com/network/showline/49034232,https://www.airlines-manager.com/network/showflight/52172581946,https://www.airlines-manager.com/aircraft/show/114912306,13:15,16:59,112,"$92,078.00","$76,467.00"
SFO - PSP,52176667049,SFO-ICT-BFF 4,A321-200,https://www.airlines-manager.com/network/showline/49034232,https://www.airlines-manager.com/network/showflight/52176667049,https://www.airlines-manager.com/aircraft/show/114912268,15:00,18:44,310,"$199,461.00","$174,663.00"
SFO - PSP,52188655558,SFO-ICT-BFF 3,A321-200,https://www.airlines-manager.com/network/showline/49034232,https://www.airlines-manager.com/network/showflight/52188655558,https://www.airlines-manager.com/aircraft/show/114912263,21:00,0:44,276,"$186,579.00","$162,172.00"
SFO - PVD,52143768847,SFO-PVD-BUF 4,A321-200,https://www.airlines-manager.com/network/showline/48344018,https://www.airlines-manager.com/network/showflight/52143768847,https://www.airlines-manager.com/aircraft/show/112650105,0:00,12:29,310,"$759,976.00","$702,309.00"
SFO - PVD,52157349998,SFO-PVD-BUF 5,A321-200,https://www.airlines-manager.com/network/showline/48344018,https://www.airlines-manager.com/network/showflight/52157349998,https://www.airlines-manager.com/aircraft/show/112650104,5:00,17:29,310,"$759,976.00","$702,309.00"
SFO - PVD,52172581859,SFO-PVD-BUF 1,A321-200,https://www.airlines-manager.com/network/showline/48344018,https://www.airlines-manager.com/network/showflight/52172581859,https://www.airlines-manager.com/aircraft/show/112650108,13:00,1:29,310,"$759,976.00","$702,309.00"
SFO - PVD,52181070651,SFO-PVD-BUF 2,A321-200,https://www.airlines-manager.com/network/showline/48344018,https://www.airlines-manager.com/network/showflight/52181070651,https://www.airlines-manager.com/aircraft/show/112650107,17:00,5:29,310,"$759,976.00","$702,309.00"
SFO - PVD,52185045306,SFO-PVD-BUF 3,A321-200,https://www.airlines-manager.com/network/showline/48344018,https://www.airlines-manager.com/network/showflight/52185045306,https://www.airlines-manager.com/aircraft/show/112650106,19:00,7:29,310,"$759,976.00","$702,309.00"
SFO - PWM,52143768914,SFO-KOA-PWM 5 B,A319-100,https://www.airlines-manager.com/network/showline/48344081,https://www.airlines-manager.com/network/showflight/52143768914,https://www.airlines-manager.com/aircraft/show/112650091,0:15,12:59,198,"$574,346.00","$528,149.00"
SFO - PWM,52143768915,SFO-KOA-PWM 1,A321-200,https://www.airlines-manager.com/network/showline/48344081,https://www.airlines-manager.com/network/showflight/52143768915,https://www.airlines-manager.com/aircraft/show/112650103,4:15,16:59,310,"$767,438.00","$709,838.00"
SFO - PWM,52157350200,SFO-KOA-PWM 2,A321-200,https://www.airlines-manager.com/network/showline/48344081,https://www.airlines-manager.com/network/showflight/52157350200,https://www.airlines-manager.com/aircraft/show/112650102,7:15,19:59,310,"$767,438.00","$709,838.00"
SFO - PWM,52172581967,SFO-KOA-PWM 3,A321-200,https://www.airlines-manager.com/network/showline/48344081,https://www.airlines-manager.com/network/showflight/52172581967,https://www.airlines-manager.com/aircraft/show/112650101,14:00,2:44,310,"$767,438.00","$709,838.00"
SFO - PWM,52176667111,SFO-KOA-PWM 4,A321-200,https://www.airlines-manager.com/network/showline/48344081,https://www.airlines-manager.com/network/showflight/52176667111,https://www.airlines-manager.com/aircraft/show/112650100,16:00,4:44,310,"$767,438.00","$709,838.00"
SFO - RDU,52157350001,SFO-PBI-RDU 1,737-900ER,https://www.airlines-manager.com/network/showline/45099094,https://www.airlines-manager.com/network/showflight/52157350001,https://www.airlines-manager.com/aircraft/show/100301188,5:00,16:14,320,"$709,558.00","$646,835.00"
SFO - RDU,52157350002,SFO-PBI-RDU 2,737-900ER,https://www.airlines-manager.com/network/showline/45099094,https://www.airlines-manager.com/network/showflight/52157350002,https://www.airlines-manager.com/aircraft/show/100301187,7:00,18:14,320,"$709,558.00","$646,835.00"
SFO - RDU,52163458663,SFO-PBI-RDU 5,737-900ER,https://www.airlines-manager.com/network/showline/45099094,https://www.airlines-manager.com/network/showflight/52163458663,https://www.airlines-manager.com/aircraft/show/100301184,9:00,20:14,320,"$709,558.00","$646,835.00"
SFO - RDU,52181070661,SFO-PBI-RDU 3,737-900ER,https://www.airlines-manager.com/network/showline/45099094,https://www.airlines-manager.com/network/showflight/52181070661,https://www.airlines-manager.com/aircraft/show/100301186,17:00,4:14,320,"$709,558.00","$646,835.00"
SFO - RDU,52185045302,SFO-PBI-RDU 4,737-900ER,https://www.airlines-manager.com/network/showline/45099094,https://www.airlines-manager.com/network/showflight/52185045302,https://www.airlines-manager.com/aircraft/show/100301185,19:00,6:14,320,"$709,558.00","$646,835.00"
SFO - RIC,52157350080,SFO-ORF-RIC 1,A321-200,https://www.airlines-manager.com/network/showline/47065521,https://www.airlines-manager.com/network/showflight/52157350080,https://www.airlines-manager.com/aircraft/show/108328834,6:00,17:29,310,"$723,204.00","$668,170.00"
SFO - RIC,52163458589,SFO-ORF-RIC 2,A321-200,https://www.airlines-manager.com/network/showline/47065521,https://www.airlines-manager.com/network/showflight/52163458589,https://www.airlines-manager.com/aircraft/show/108328835,8:00,19:29,310,"$723,204.00","$668,170.00"
SFO - RIC,52163458590,SFO-ORF-RIC 5 B,A319-100,https://www.airlines-manager.com/network/showline/47065521,https://www.airlines-manager.com/network/showflight/52163458590,https://www.airlines-manager.com/aircraft/show/108328833,10:00,21:29,198,"$542,409.00","$498,277.00"
SFO - RIC,52181070738,SFO-ORF-RIC 3,A321-200,https://www.airlines-manager.com/network/showline/47065521,https://www.airlines-manager.com/network/showflight/52181070738,https://www.airlines-manager.com/aircraft/show/108328836,18:00,5:29,310,"$723,204.00","$668,170.00"
SFO - RIC,52185045409,SFO-ORF-RIC 4,A321-200,https://www.airlines-manager.com/network/showline/47065521,https://www.airlines-manager.com/network/showflight/52185045409,https://www.airlines-manager.com/aircraft/show/108328837,20:00,7:29,310,"$723,204.00","$668,170.00"
SFO - RNO,52143769264,SFO-MCI-OMA 2,737-900ER,https://www.airlines-manager.com/network/showline/46129438,https://www.airlines-manager.com/network/showflight/52143769264,https://www.airlines-manager.com/aircraft/show/88239554,4:15,6:59,320,"$118,923.00","$92,603.00"
SFO - RNO,52172582033,SFO-MCI-OMA 1,737-900ER,https://www.airlines-manager.com/network/showline/46129438,https://www.airlines-manager.com/network/showflight/52172582033,https://www.airlines-manager.com/aircraft/show/88239553,14:15,16:59,320,"$118,923.00","$92,603.00"
SFO - RNO,52172582034,SFO-MCI-OMA 5 B,A319-100,https://www.airlines-manager.com/network/showline/46129438,https://www.airlines-manager.com/network/showflight/52172582034,https://www.airlines-manager.com/aircraft/show/105223003,14:15,16:59,198,"$90,023.00","$72,171.00"
SFO - RNO,52176667133,SFO-MCI-OMA 4,737-900ER,https://www.airlines-manager.com/network/showline/46129438,https://www.airlines-manager.com/network/showflight/52176667133,https://www.airlines-manager.com/aircraft/show/88239557,16:00,18:44,320,"$118,923.00","$92,603.00"
SFO - RNO,52185045443,SFO-MCI-OMA 3,737-900ER,https://www.airlines-manager.com/network/showline/46129438,https://www.airlines-manager.com/network/showflight/52185045443,https://www.airlines-manager.com/aircraft/show/88239555,20:30,23:14,320,"$118,923.00","$92,603.00"
SFO - RSW,52157350026,SFO-RSW-BDL 3,737-900ER,https://www.airlines-manager.com/network/showline/47540536,https://www.airlines-manager.com/network/showflight/52157350026,https://www.airlines-manager.com/aircraft/show/84915100,5:15,16:59,320,"$726,799.00","$661,985.00"
SFO - RSW,52157350027,SFO-RSW-BDL 4,737-900ER,https://www.airlines-manager.com/network/showline/47540536,https://www.airlines-manager.com/network/showflight/52157350027,https://www.airlines-manager.com/aircraft/show/84915101,7:15,18:59,320,"$726,799.00","$661,985.00"
SFO - RSW,52181070635,SFO-RSW-BDL 1,737-900ER,https://www.airlines-manager.com/network/showline/47540536,https://www.airlines-manager.com/network/showflight/52181070635,https://www.airlines-manager.com/aircraft/show/84915098,17:00,4:44,320,"$726,799.00","$661,985.00"
SFO - RSW,52185045313,SFO-RSW-BDL 2,737-900ER,https://www.airlines-manager.com/network/showline/47540536,https://www.airlines-manager.com/network/showflight/52185045313,https://www.airlines-manager.com/aircraft/show/84915099,19:00,6:44,320,"$726,799.00","$661,985.00"
SFO - RSW,52188655543,SFO-RSW-BDL 5,737-900ER,https://www.airlines-manager.com/network/showline/47540536,https://www.airlines-manager.com/network/showflight/52188655543,https://www.airlines-manager.com/aircraft/show/84915102,21:00,8:44,320,"$726,799.00","$661,985.00"
SFO - SAN,52163458582,SFO-PHL-SEA 1,737-900ER,https://www.airlines-manager.com/network/showline/42627058,https://www.airlines-manager.com/network/showflight/52163458582,https://www.airlines-manager.com/aircraft/show/92390872,8:00,11:44,320,"$216,405.00","$183,566.00"
SFO - SAN,52167946264,SFO-PHL-SEA 5,737-900ER,https://www.airlines-manager.com/network/showline/42627058,https://www.airlines-manager.com/network/showflight/52167946264,https://www.airlines-manager.com/aircraft/show/92390869,11:00,14:44,320,"$216,405.00","$183,566.00"
SFO - SAN,52167946265,SFO-PHL-SEA 4,737-900ER,https://www.airlines-manager.com/network/showline/42627058,https://www.airlines-manager.com/network/showflight/52167946265,https://www.airlines-manager.com/aircraft/show/92390870,12:00,15:44,320,"$216,405.00","$183,566.00"
SFO - SAN,52176667078,SFO-PHL-SEA 3,737-900ER,https://www.airlines-manager.com/network/showline/42627058,https://www.airlines-manager.com/network/showflight/52176667078,https://www.airlines-manager.com/aircraft/show/92390873,15:30,19:14,320,"$216,405.00","$183,566.00"
SFO - SAN,52185045417,SFO-PHL-SEA 2,737-900ER,https://www.airlines-manager.com/network/showline/42627058,https://www.airlines-manager.com/network/showflight/52185045417,https://www.airlines-manager.com/aircraft/show/92390871,20:15,23:59,313,"$213,545.00","$180,790.00"
SFO - SAT,52143768909,SFO-JAX-SAT 1,A321-200,https://www.airlines-manager.com/network/showline/45303038,https://www.airlines-manager.com/network/showflight/52143768909,https://www.airlines-manager.com/aircraft/show/86375568,0:15,8:14,310,"$496,292.00","$455,022.00"
SFO - SAT,52143768910,SFO-JAX-SAT 2,A321-200,https://www.airlines-manager.com/network/showline/45303038,https://www.airlines-manager.com/network/showflight/52143768910,https://www.airlines-manager.com/aircraft/show/86371267,2:15,10:14,310,"$496,292.00","$455,022.00"
SFO - SAT,52172581903,SFO-JAX-SAT 3,A321-200,https://www.airlines-manager.com/network/showline/45303038,https://www.airlines-manager.com/network/showflight/52172581903,https://www.airlines-manager.com/aircraft/show/86385102,13:00,20:59,310,"$496,292.00","$455,022.00"
SFO - SAT,52176667020,SFO-JAX-SAT 4,A321-200,https://www.airlines-manager.com/network/showline/45303038,https://www.airlines-manager.com/network/showflight/52176667020,https://www.airlines-manager.com/aircraft/show/86378760,15:00,22:59,310,"$496,292.00","$455,022.00"
SFO - SAT,52181070666,SFO-JAX-SAT 5,A321-200,https://www.airlines-manager.com/network/showline/45303038,https://www.airlines-manager.com/network/showflight/52181070666,https://www.airlines-manager.com/aircraft/show/86377315,17:15,1:14,310,"$496,292.00","$455,022.00"
SFO - SAV,52157350067,SFO-SAV-JAN 1,A321-200,https://www.airlines-manager.com/network/showline/49034205,https://www.airlines-manager.com/network/showflight/52157350067,https://www.airlines-manager.com/aircraft/show/114912265,5:45,16:59,310,"$693,394.00","$640,089.00"
SFO - SAV,52157350068,SFO-SAV-JAN 4,A321-200,https://www.airlines-manager.com/network/showline/49034205,https://www.airlines-manager.com/network/showflight/52157350068,https://www.airlines-manager.com/aircraft/show/114912270,7:45,18:59,310,"$693,394.00","$640,089.00"
SFO - SAV,52176666999,SFO-SAV-JAN 5 B,A319-100,https://www.airlines-manager.com/network/showline/49034205,https://www.airlines-manager.com/network/showflight/52176666999,https://www.airlines-manager.com/aircraft/show/114917486,15:00,2:14,198,"$520,994.00","$478,249.00"
SFO - SAV,52185045292,SFO-SAV-JAN 3,A321-200,https://www.airlines-manager.com/network/showline/49034205,https://www.airlines-manager.com/network/showflight/52185045292,https://www.airlines-manager.com/aircraft/show/114912269,19:00,6:14,310,"$693,394.00","$640,089.00"
SFO - SAV,52185045293,SFO-SAV-JAN 2,A321-200,https://www.airlines-manager.com/network/showline/49034205,https://www.airlines-manager.com/network/showflight/52185045293,https://www.airlines-manager.com/aircraft/show/114912266,20:30,7:44,309,"$691,405.00","$638,181.00"
SFO - SDF,52143769025,SFO-SDF-LIT 2,A321-200,https://www.airlines-manager.com/network/showline/46473760,https://www.airlines-manager.com/network/showflight/52143769025,https://www.airlines-manager.com/aircraft/show/94886628,1:15,10:59,310,"$611,616.00","$561,373.00"
SFO - SDF,52143769026,SFO-SDF-LIT 4,A321-200,https://www.airlines-manager.com/network/showline/46473760,https://www.airlines-manager.com/network/showflight/52143769026,https://www.airlines-manager.com/aircraft/show/106453500,2:15,11:59,310,"$611,616.00","$561,373.00"
SFO - SDF,52172582021,SFO-SDF-LIT 1,A321-200,https://www.airlines-manager.com/network/showline/46473760,https://www.airlines-manager.com/network/showflight/52172582021,https://www.airlines-manager.com/aircraft/show/106453499,14:00,23:44,310,"$611,616.00","$561,373.00"
SFO - SDF,52176667168,SFO-SDF-LIT 3,A321-200,https://www.airlines-manager.com/network/showline/46473760,https://www.airlines-manager.com/network/showflight/52176667168,https://www.airlines-manager.com/aircraft/show/94886627,16:30,2:14,310,"$611,616.00","$561,373.00"
SFO - SDF,52181070695,SFO-SDF-LIT 5,A321-200,https://www.airlines-manager.com/network/showline/46473760,https://www.airlines-manager.com/network/showflight/52181070695,https://www.airlines-manager.com/aircraft/show/106453498,17:30,3:14,310,"$611,616.00","$561,373.00"
SFO - SEA,52143769170,SFO-PHL-SEA 5,737-900ER,https://www.airlines-manager.com/network/showline/41349632,https://www.airlines-manager.com/network/showflight/52143769170,https://www.airlines-manager.com/aircraft/show/92390869,2:45,7:29,320,"$300,057.00","$256,449.00"
SFO - SEA,52143769171,SFO-PHL-SEA 4,737-900ER,https://www.airlines-manager.com/network/showline/41349632,https://www.airlines-manager.com/network/showflight/52143769171,https://www.airlines-manager.com/aircraft/show/92390870,3:30,8:14,320,"$300,057.00","$256,449.00"
SFO - SEA,52157350059,SFO-PHL-SEA 6 B,A319-100,https://www.airlines-manager.com/network/showline/41349632,https://www.airlines-manager.com/network/showflight/52157350059,https://www.airlines-manager.com/aircraft/show/97900730,5:30,10:14,198,"$228,794.00","$198,636.00"
SFO - SEA,52157350060,SFO-PHL-SEA 3,737-900ER,https://www.airlines-manager.com/network/showline/41349632,https://www.airlines-manager.com/network/showflight/52157350060,https://www.airlines-manager.com/aircraft/show/92390873,7:00,11:44,320,"$300,057.00","$256,449.00"
SFO - SEA,52167946299,SFO-PHL-SEA 2,737-900ER,https://www.airlines-manager.com/network/showline/41349632,https://www.airlines-manager.com/network/showflight/52167946299,https://www.airlines-manager.com/aircraft/show/92390871,12:00,16:44,320,"$300,057.00","$256,449.00"
SFO - SEA,52191270978,SFO-PHL-SEA 1,737-900ER,https://www.airlines-manager.com/network/showline/41349632,https://www.airlines-manager.com/network/showflight/52191270978,https://www.airlines-manager.com/aircraft/show/92390872,23:45,4:29,297,"$287,039.00","$243,852.00"
SFO - SHA,52185045400,SFO 168B-4 B,747-400,https://www.airlines-manager.com/network/showline/44204901,https://www.airlines-manager.com/network/showflight/52185045400,https://www.airlines-manager.com/aircraft/show/87933798,20:00,19:59,1046,"$4,630,516.00","$4,294,983.00"
SFO - SHA,52188655681,SFO 168A-4 B,747-400,https://www.airlines-manager.com/network/showline/44204901,https://www.airlines-manager.com/network/showflight/52188655681,https://www.airlines-manager.com/aircraft/show/86817628,22:00,21:59,1046,"$4,630,516.00","$4,294,983.00"
SFO - SLC,52143768876,SFO-ORD-DTW 4,757-300,https://www.airlines-manager.com/network/showline/42739134,https://www.airlines-manager.com/network/showflight/52143768876,https://www.airlines-manager.com/aircraft/show/101045331,0:00,4:29,400,"$360,461.00","$319,560.00"
SFO - SLC,52143768877,SFO-ORD-DTW 2,757-300,https://www.airlines-manager.com/network/showline/42739134,https://www.airlines-manager.com/network/showflight/52143768877,https://www.airlines-manager.com/aircraft/show/101045333,1:00,5:29,400,"$360,461.00","$319,560.00"
SFO - SLC,52163458579,SFO-ORD-DTW 1,757-300,https://www.airlines-manager.com/network/showline/42739134,https://www.airlines-manager.com/network/showflight/52163458579,https://www.airlines-manager.com/aircraft/show/101045334,8:00,12:29,400,"$360,461.00","$319,560.00"
SFO - SLC,52176666994,SFO-ORD-DTW 3,757-300,https://www.airlines-manager.com/network/showline/42739134,https://www.airlines-manager.com/network/showflight/52176666994,https://www.airlines-manager.com/aircraft/show/101045332,15:00,19:29,400,"$360,461.00","$319,560.00"
SFO - SMF,52163458629,SFO-SDF-LIT 1,A321-200,https://www.airlines-manager.com/network/showline/46503390,https://www.airlines-manager.com/network/showflight/52163458629,https://www.airlines-manager.com/aircraft/show/106453499,8:30,10:59,310,"$82,755.00","$62,173.00"
SFO - SMF,52172582019,SFO-SDF-LIT 3,A321-200,https://www.airlines-manager.com/network/showline/46503390,https://www.airlines-manager.com/network/showflight/52172582019,https://www.airlines-manager.com/aircraft/show/94886627,14:00,16:29,310,"$82,755.00","$62,173.00"
SFO - SMF,52176667045,SFO-SDF-LIT 5,A321-200,https://www.airlines-manager.com/network/showline/46503390,https://www.airlines-manager.com/network/showflight/52176667045,https://www.airlines-manager.com/aircraft/show/106453498,15:00,17:29,310,"$82,755.00","$62,173.00"
SFO - SMF,52188655754,SFO-SDF-LIT 2,A321-200,https://www.airlines-manager.com/network/showline/46503390,https://www.airlines-manager.com/network/showflight/52188655754,https://www.airlines-manager.com/aircraft/show/94886628,22:45,1:14,310,"$82,755.00","$62,173.00"
SFO - SMF,52191270973,SFO-SDF-LIT 4,A321-200,https://www.airlines-manager.com/network/showline/46503390,https://www.airlines-manager.com/network/showflight/52191270973,https://www.airlines-manager.com/aircraft/show/106453500,23:45,2:14,310,"$82,755.00","$62,173.00"
SFO - STL,52157350125,SFO-MSY-STL 3,737-900ER,https://www.airlines-manager.com/network/showline/44531548,https://www.airlines-manager.com/network/showflight/52157350125,https://www.airlines-manager.com/aircraft/show/98075265,6:45,15:29,320,"$554,913.00","$501,159.00"
SFO - STL,52163458649,SFO-MSY-STL 5,737-900ER,https://www.airlines-manager.com/network/showline/44531548,https://www.airlines-manager.com/network/showflight/52163458649,https://www.airlines-manager.com/aircraft/show/98075263,8:45,17:29,320,"$554,913.00","$501,159.00"
SFO - STL,52172581860,SFO-MSY-STL 6,ERJ-175,https://www.airlines-manager.com/network/showline/44531548,https://www.airlines-manager.com/network/showflight/52172581860,https://www.airlines-manager.com/aircraft/show/103534666,13:00,21:44,112,"$261,240.00","$229,318.00"
SFO - STL,52176667143,SFO-MSY-STL 2,737-900ER,https://www.airlines-manager.com/network/showline/44531548,https://www.airlines-manager.com/network/showflight/52176667143,https://www.airlines-manager.com/aircraft/show/98075266,16:00,0:44,320,"$554,913.00","$501,159.00"
SFO - STL,52181070744,SFO-MSY-STL 4,737-900ER,https://www.airlines-manager.com/network/showline/44531548,https://www.airlines-manager.com/network/showflight/52181070744,https://www.airlines-manager.com/aircraft/show/98075264,18:00,2:44,320,"$554,913.00","$501,159.00"
SFO - STL,52188655722,SFO-MSY-STL 1,737-900ER,https://www.airlines-manager.com/network/showline/44531548,https://www.airlines-manager.com/network/showflight/52188655722,https://www.airlines-manager.com/aircraft/show/98075267,22:30,7:14,319,"$551,748.00","$498,064.00"
SFO - TFU,52172581830,SFO 168B-3 B,747-400,https://www.airlines-manager.com/network/showline/45364033,https://www.airlines-manager.com/network/showflight/52172581830,https://www.airlines-manager.com/aircraft/show/87566902,12:30,14:59,1046,"$5,210,426.00","$4,802,767.00"
SFO - TFU,52176666977,SFO 168A-3 B,747-400,https://www.airlines-manager.com/network/showline/45364033,https://www.airlines-manager.com/network/showflight/52176666977,https://www.airlines-manager.com/aircraft/show/86483501,14:30,16:59,1046,"$5,210,426.00","$4,802,767.00"
SFO - TPA,52143769014,SFO-FLL-TPA 1,737-900ER,https://www.airlines-manager.com/network/showline/44446761,https://www.airlines-manager.com/network/showflight/52143769014,https://www.airlines-manager.com/aircraft/show/97955544,1:00,12:14,320,"$701,119.00","$635,068.00"
SFO - TPA,52157350007,SFO-FLL-TPA 3,737-900ER,https://www.airlines-manager.com/network/showline/44446761,https://www.airlines-manager.com/network/showflight/52157350007,https://www.airlines-manager.com/aircraft/show/97955542,5:00,16:14,320,"$701,119.00","$635,068.00"
SFO - TPA,52163458586,SFO-FLL-TPA 5,737-900ER,https://www.airlines-manager.com/network/showline/44446761,https://www.airlines-manager.com/network/showflight/52163458586,https://www.airlines-manager.com/aircraft/show/97955540,8:00,19:14,320,"$701,119.00","$635,068.00"
SFO - TPA,52172581919,SFO-FLL-TPA 2,737-900ER,https://www.airlines-manager.com/network/showline/44446761,https://www.airlines-manager.com/network/showflight/52172581919,https://www.airlines-manager.com/aircraft/show/97955543,13:00,0:14,320,"$701,119.00","$635,068.00"
SFO - TPA,52181070653,SFO-FLL-TPA 4,737-900ER,https://www.airlines-manager.com/network/showline/44446761,https://www.airlines-manager.com/network/showflight/52181070653,https://www.airlines-manager.com/aircraft/show/97955541,17:00,4:14,320,"$701,119.00","$635,068.00"
SFO - TPA,52185045416,SFO-FLL-TPA 6 B,A319-100,https://www.airlines-manager.com/network/showline/44446761,https://www.airlines-manager.com/network/showflight/52185045416,https://www.airlines-manager.com/aircraft/show/97900729,20:00,7:29,198,"$529,219.00","$481,363.00"
SFO - TPE,52185045401,SFO 168B-5 B,747-400,https://www.airlines-manager.com/network/showline/40932049,https://www.airlines-manager.com/network/showflight/52185045401,https://www.airlines-manager.com/aircraft/show/87933799,20:00,21:14,1046,"$4,754,947.00","$4,404,921.00"
SFO - TPE,52188655682,SFO 168A-5 B,747-400,https://www.airlines-manager.com/network/showline/40932049,https://www.airlines-manager.com/network/showflight/52188655682,https://www.airlines-manager.com/aircraft/show/86808589,22:00,23:14,1026,"$4,691,357.00","$4,345,338.00"
SFO - TUL,52157349976,SFO-TUL-DSM 2,737-900ER,https://www.airlines-manager.com/network/showline/47065674,https://www.airlines-manager.com/network/showflight/52157349976,https://www.airlines-manager.com/aircraft/show/108410857,4:45,12:29,320,"$491,552.00","$446,054.00"
SFO - TUL,52157349977,SFO-TUL-DSM 5,ERJ-175,https://www.airlines-manager.com/network/showline/47065674,https://www.airlines-manager.com/network/showflight/52157349977,https://www.airlines-manager.com/aircraft/show/108466264,7:00,14:44,112,"$232,107.00","$205,099.00"
SFO - TUL,52176667032,SFO-TUL-DSM 1,737-900ER,https://www.airlines-manager.com/network/showline/47065674,https://www.airlines-manager.com/network/showflight/52176667032,https://www.airlines-manager.com/aircraft/show/108410856,15:00,22:44,320,"$491,552.00","$446,054.00"
SFO - TUL,52176667033,SFO-TUL-DSM 4,737-900ER,https://www.airlines-manager.com/network/showline/47065674,https://www.airlines-manager.com/network/showflight/52176667033,https://www.airlines-manager.com/aircraft/show/108410859,15:45,23:29,320,"$491,552.00","$446,054.00"
SFO - TUL,52185045460,SFO-TUL-DSM 3,737-900ER,https://www.airlines-manager.com/network/showline/47065674,https://www.airlines-manager.com/network/showflight/52185045460,https://www.airlines-manager.com/aircraft/show/108410858,20:45,4:29,320,"$491,552.00","$446,054.00"
SFO - TUS,52163458594,SFO-OKC-FSD 1,737-900ER,https://www.airlines-manager.com/network/showline/46719652,https://www.airlines-manager.com/network/showflight/52163458594,https://www.airlines-manager.com/aircraft/show/107160378,8:00,12:59,320,"$317,941.00","$282,780.00"
SFO - TUS,52163458595,SFO-OKC-FSD 5,ERJ-175,https://www.airlines-manager.com/network/showline/46719652,https://www.airlines-manager.com/network/showflight/52163458595,https://www.airlines-manager.com/aircraft/show/107132310,9:30,14:29,112,"$151,535.00","$131,768.00"
SFO - TUS,52167946174,SFO-OKC-FSD 4,737-900ER,https://www.airlines-manager.com/network/showline/46719652,https://www.airlines-manager.com/network/showflight/52167946174,https://www.airlines-manager.com/aircraft/show/107160381,10:30,15:29,320,"$317,941.00","$282,780.00"
SFO - TUS,52176667127,SFO-OKC-FSD 3,737-900ER,https://www.airlines-manager.com/network/showline/46719652,https://www.airlines-manager.com/network/showflight/52176667127,https://www.airlines-manager.com/aircraft/show/107160380,16:00,20:59,320,"$317,941.00","$282,780.00"
SFO - TUS,52191270952,SFO-OKC-FSD 2,737-900ER,https://www.airlines-manager.com/network/showline/46719652,https://www.airlines-manager.com/network/showflight/52191270952,https://www.airlines-manager.com/aircraft/show/107160379,23:30,4:29,320,"$317,941.00","$282,780.00"
SFO - YUL,52143768957,SFO-YYZ-YUL 1,757-300,https://www.airlines-manager.com/network/showline/49174523,https://www.airlines-manager.com/network/showflight/52143768957,https://www.airlines-manager.com/aircraft/show/115413609,0:45,12:29,400,"$922,179.00","$846,155.00"
SFO - YUL,52157350091,SFO-YYZ-YUL 4,757-300,https://www.airlines-manager.com/network/showline/49174523,https://www.airlines-manager.com/network/showflight/52157350091,https://www.airlines-manager.com/aircraft/show/115413612,6:00,17:44,400,"$922,179.00","$846,155.00"
SFO - YUL,52172582018,SFO-YYZ-YUL 2,757-300,https://www.airlines-manager.com/network/showline/49174523,https://www.airlines-manager.com/network/showflight/52172582018,https://www.airlines-manager.com/aircraft/show/115413610,14:00,1:44,400,"$922,179.00","$846,155.00"
SFO - YUL,52181070615,SFO-YYZ-YUL 3,757-300,https://www.airlines-manager.com/network/showline/49174523,https://www.airlines-manager.com/network/showflight/52181070615,https://www.airlines-manager.com/aircraft/show/115413611,16:45,4:29,400,"$922,179.00","$846,155.00"
SFO - YUL,52181070616,SFO-YYZ-YUL 5,757-300,https://www.airlines-manager.com/network/showline/49174523,https://www.airlines-manager.com/network/showflight/52181070616,https://www.airlines-manager.com/aircraft/show/91126653,18:45,6:29,400,"$922,179.00","$846,155.00"
SFO - YVR,52143768958,SFO-MSY-STL 2,737-900ER,https://www.airlines-manager.com/network/showline/44531535,https://www.airlines-manager.com/network/showflight/52143768958,https://www.airlines-manager.com/aircraft/show/98075266,0:45,5:59,320,"$329,974.00","$289,011.00"
SFO - YVR,52143768959,SFO-MSY-STL 4,737-900ER,https://www.airlines-manager.com/network/showline/44531535,https://www.airlines-manager.com/network/showflight/52143768959,https://www.airlines-manager.com/aircraft/show/98075264,2:45,7:59,320,"$329,974.00","$289,011.00"
SFO - YVR,52157350199,SFO-MSY-STL 1,737-900ER,https://www.airlines-manager.com/network/showline/44531535,https://www.airlines-manager.com/network/showflight/52157350199,https://www.airlines-manager.com/aircraft/show/98075267,7:15,12:29,320,"$329,974.00","$289,011.00"
SFO - YVR,52176667142,SFO-MSY-STL 3,737-900ER,https://www.airlines-manager.com/network/showline/44531535,https://www.airlines-manager.com/network/showflight/52176667142,https://www.airlines-manager.com/aircraft/show/98075265,16:00,21:14,320,"$329,974.00","$289,011.00"
SFO - YVR,52181070746,SFO-MSY-STL 5,737-900ER,https://www.airlines-manager.com/network/showline/44531535,https://www.airlines-manager.com/network/showflight/52181070746,https://www.airlines-manager.com/aircraft/show/98075263,18:00,23:14,320,"$329,974.00","$289,011.00"
SFO - YVR,52188655668,SFO-MSY-STL 6,ERJ-175,https://www.airlines-manager.com/network/showline/44531535,https://www.airlines-manager.com/network/showflight/52188655668,https://www.airlines-manager.com/aircraft/show/103534666,21:45,2:59,112,"$156,406.00","$133,592.00"
SFO - YYZ,52143769093,SFO-YYZ-YUL 2,757-300,https://www.airlines-manager.com/network/showline/49174519,https://www.airlines-manager.com/network/showflight/52143769093,https://www.airlines-manager.com/aircraft/show/115413610,1:45,12:29,400,"$881,683.00","$803,563.00"
SFO - YYZ,52157350092,SFO-YYZ-YUL 3,757-300,https://www.airlines-manager.com/network/showline/49174519,https://www.airlines-manager.com/network/showflight/52157350092,https://www.airlines-manager.com/aircraft/show/115413611,6:00,16:44,400,"$881,683.00","$803,563.00"
SFO - YYZ,52163458593,SFO-YYZ-YUL 5,757-300,https://www.airlines-manager.com/network/showline/49174519,https://www.airlines-manager.com/network/showflight/52163458593,https://www.airlines-manager.com/aircraft/show/91126653,8:00,18:44,400,"$881,683.00","$803,563.00"
SFO - YYZ,52172582014,SFO-YYZ-YUL 1,757-300,https://www.airlines-manager.com/network/showline/49174519,https://www.airlines-manager.com/network/showflight/52172582014,https://www.airlines-manager.com/aircraft/show/115413609,14:00,0:44,400,"$881,683.00","$803,563.00"
SFO - YYZ,52181070699,SFO-YYZ-YUL 4,757-300,https://www.airlines-manager.com/network/showline/49174519,https://www.airlines-manager.com/network/showflight/52181070699,https://www.airlines-manager.com/aircraft/show/115413612,17:45,4:29,400,"$881,683.00","$803,563.00"`;