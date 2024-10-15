interface IHtWt{
    ht: number;
    wt: number;
}

export default function HtWt({ht, wt}:IHtWt){
    return(
        <div className="m-2 w-48 h-18 bg-[#fbfbfb] lt-shadow font-pokemondp text-[#595959] border-2 border-[#595959] rounded-md straight-shadow-md">
            <div className="pl-6 p-0.5 flex justify-between border-b-2 border-dashed border-[#595959]">
                <div>HT</div> <div className="w-28 rm-2">{(Math.ceil(ht*0.32808 * 100) / 100).toString().replace(".", "'") +"''"}</div>
            </div>
            
            <div className="pl-6 flex justify-between">
                <div>WT</div> <div className="w-28">{Math.ceil(wt*0.2202 * 100) / 100} lbs.</div>
            </div>
            
        </div>
    );
}