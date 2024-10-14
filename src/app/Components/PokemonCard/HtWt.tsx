interface IHtWt{
    ht: number;
    wt: number;
}

export default function HtWt({ht, wt}:IHtWt){
    return(
        <div className="m-2 w-48 h-16 bg-[#fbfbfb] font-minecraft text-[#595959] border-2 border-[#595959] rounded-md">
            <div className="pt-2 pl-6 flex justify-between border-b border-dashed border-[#595959]">
                <div>HT</div> <div className="w-20">{(Math.ceil(ht*0.32808 * 100) / 100).toString().replace(".", "'") +"''"}</div>
            </div>
            
            <div className="pb-2 pt-1 pl-6 flex justify-between">
                <div>WT</div> <div className="w-20">{Math.ceil(wt*0.2202 * 100) / 100} lbs.</div>
            </div>
            
        </div>
    );
}