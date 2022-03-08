package SLAPPv1.Parameters;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name="ph", schema="SLAgua")
public class PH {

	@Id
	@Column(name="id", table="ph")
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	@Column(name="ph",nullable=false,table="ph")
	private Float ph;
	@Column(name="pool",nullable=false,table="ph")
	private Long pool;
	@Column(name="year",nullable=false,table="ph")
	private Long year;
	@Column(name="month",nullable=false,table="ph")
	private Long month;
	@Column(name="day",nullable=false,table="ph")
	private Long day;
	@Column(name="hour",nullable=false,table="ph")
	private Long hour;
	@Column(name="minute",nullable=false,table="ph")
	private Long minute;

	
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public Float getPh() {
		return ph;
	}
	public void setPh(Float ph) {
		this.ph = ph;
	}
	public Long getPool() {
		return pool;
	}
	public void setPool(Long pool) {
		this.pool = pool;
	}
	public Long getYear() {
		return year;
	}
	public void setYear(Long year) {
		this.year = year;
	}
	public Long getMonth() {
		return month;
	}
	public void setMonth(Long month) {
		this.month = month;
	}
	public Long getDay() {
		return day;
	}
	public void setDay(Long day) {
		this.day = day;
	}
	public Long getHour() {
		return hour;
	}
	public void setHour(Long hour) {
		this.hour = hour;
	}
	public Long getMinute() {
		return minute;
	}
	public void setMinute(Long minute) {
		this.minute = minute;
	}
	
}
